/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as vscode from 'vscode';
import {ExtensionContext, Uri, workspace} from 'vscode';
import {LoadedScs, LoadMode, ScsLoader} from './ScsLoader';
import {ConnectionManager} from './ConnectionManager';

import {LanguageClient, LanguageClientOptions, ServerOptions, TransportKind} from 'vscode-languageclient';
import {SearcherByTemplate} from "./SearcherByTemplate";
import {genScs, saveGeneratedBase} from './ScsGenerator';

import {gwfToScs} from "kb-generator-ts"
import {convertOldGwfToNew, isOldGwf} from "./Old2NewScgConverter";
``
let client: LanguageClient;
let scMachineUrl = "ws://localhost:8090";
let scsLoader: ScsLoader;
let scsSearcher: SearcherByTemplate;
let connectionManager: ConnectionManager;

const onCommandScsConnect = async () => {
    scMachineUrl = await vscode.window.showInputBox({
        placeHolder: "Enter sc-machine url. For example, ws://localhost:8090"
    });
    await connectionManager.connect(scMachineUrl);
    scsLoader.scClient = connectionManager.client;
    scsSearcher.scClient = connectionManager.client;
};

const onCommandScsDisconnect = async () => {
    await connectionManager.disconnect();
    scsLoader.scClient = undefined;
    scsSearcher.scClient = undefined;
    vscode.window.showInformationMessage("You're now disconnected from sc-machine.")
};

const onCommandUpload = async (loadMode: LoadMode) => {
    if (connectionManager.client == undefined) {
        vscode.window.showErrorMessage("Unable to perform operation. Connect to sc-machine.");
        return;
    }
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const loadedScs = (await scsLoader.loadScs([editor.document.uri], loadMode))[0];
        if (loadedScs && loadedScs.length > 0) {
            // Create and show a new webview
            const panel = vscode.window.createWebviewPanel(
                'scsLoad', // Identifies the type of the webview. Used internally
                'SCs', // Title of the panel displayed to the user
                vscode.ViewColumn.Beside,
                {   // params to unlock sc-web scripts
                    enableScripts: true,
                    enableFindWidget: true,
                    enableCommandUris: true,
                }
            );
            if (loadMode == LoadMode.Preview) {
                panel.onDidDispose(() => {
                    scsLoader.unloadScs([editor.document.uri]);
                })
            }
            vscode.window.showInformationMessage(loadedScs);
            panel.webview.html = `<iframe src="http://localhost:8000?sys_id=${loadedScs}&scg_structure_view_only=true" height="1000" width="100%" title="SCs"></iframe>`;
            panel.title = loadedScs;
        }
        else{
            vscode.window.showErrorMessage(`Error`);
        }
    }
};

const onCommandUploadAll = async (loadMode: LoadMode) => {
    if (connectionManager.client == undefined) {
        vscode.window.showErrorMessage("Unable to perform operation. Connect to sc-machine.");
        return;
    }
    // Create and show a new webview
    const panel = vscode.window.createWebviewPanel(
        'scsLoad', // Identifies the type of the webview. Used internally
        'SCs', // Title of the panel displayed to the user
        vscode.ViewColumn.Beside,
        {   // params to unlock sc-web scripts
            enableScripts: true,
            enableFindWidget: true,
            enableCommandUris: true,
        }
    );

    const allScsFiles = await vscode.workspace.findFiles("**/*.scs");
    if (allScsFiles) {
        const loadedScs = (await scsLoader.loadScs(allScsFiles, loadMode));
        if (loadedScs.length > 0) {
            // ToDo fix link
            panel.webview.html = `<iframe src="http://localhost:8000?sys_id=unknowntechnicalid&scg_structure_view_only=true" height="1000" width="100%" title="SCs"></iframe>`;
        }
    }
};

const onCommandUnload = async (scsFile: LoadedScs) => {
    if (connectionManager.client == undefined) {
        vscode.window.showErrorMessage("Unable to perform operation. Connect to sc-machine.");
        return;
    }
    const editor = vscode.window.activeTextEditor;
    let unloadedScs: { idtf: string, errorMsg: string };
    if (scsFile != undefined) {
        unloadedScs = (await scsLoader.unloadScs([scsFile.filename]))[0];
    } else if (editor) {
        unloadedScs = (await scsLoader.unloadScs([editor.document.uri]))[0];
    }
    if (unloadedScs.idtf) {
        vscode.window.showInformationMessage(`Successfully deleted ${unloadedScs.idtf}`);
        vscode.window.tabGroups.all
            .flatMap(({tabs}) => tabs)
            .filter(document => document.label === unloadedScs.idtf)
            .forEach(label => {
                vscode.window.tabGroups.close(label);
            });
    } else {
        vscode.window.showErrorMessage(unloadedScs.errorMsg);
    }
};

const onCommandUnloadAll = async () => {
    if (connectionManager.client == undefined) {
        vscode.window.showErrorMessage("Unable to perform operation. Connect to sc-machine.");
        return;
    }
    const allProjectDocuments = vscode.workspace.textDocuments.map(document => document.uri);
    if (allProjectDocuments) {
        const unloadedScs = (await scsLoader.unloadAll());
        if (unloadedScs) {
            vscode.window.showInformationMessage("All successfully unloaded");
        } else {
            vscode.window.showErrorMessage("Nothing to unload");
        }
    }
};

const onCommandScsFindByTemplate = async () => {
    if (connectionManager.client == undefined) {
        vscode.window.showErrorMessage("Unable to perform operation. Connect to sc-machine.");
        return;
    }
    // Create and show a new webview
    const panel = vscode.window.createWebviewPanel(
        'scsFind', // Identifies the type of the webview. Used internally
        'Found', // Title of the panel displayed to the user
        vscode.ViewColumn.Beside,
        {   // params to unlock sc-web scripts
            enableScripts: true,
            enableFindWidget: true,
            enableCommandUris: true,
        }
    );
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const itdfOfSearchingResults = await scsSearcher.findByScsTemplate(editor.document.getText());
        vscode.window.showInformationMessage(itdfOfSearchingResults);
        panel.webview.html = `<iframe src="http://localhost:8000?sys_id=${itdfOfSearchingResults}&scg_structure_view_only=true" height="1000" width="100%" title="SCs"></iframe>`;
        panel.title = itdfOfSearchingResults;
    }
};

const onCommandScsGenScs = async () => {
    const entityName = await vscode.window.showInputBox({
        title: "Gen SCs by entity name",
        prompt: "For example, 'Human; Carl Linnaeus; Q2'"
    });
    if (!entityName) return;
    const entities = entityName.split(';');
    const inputMap = new Map<string, string>();
    for (let i = 0; i < entities.length; i++) {
        inputMap.set(entities[i].trim(), `en`)
    }
    const generationResults = await genScs(inputMap)
    const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder
    const wsEdit = new vscode.WorkspaceEdit();
    await saveGeneratedBase(generationResults, wsPath, wsEdit)
    vscode.window.showInformationMessage("Generation completed successfully")
};

const onCommandGwfToScs = async () => {
    const editor = vscode.window.activeTextEditor;
    const gwfXml = (await vscode.workspace.openTextDocument(editor.document.uri)).getText();
    if (editor) {
        gwfToScs(gwfXml,
            (scs) => {
                vscode.workspace.openTextDocument({
                    content: scs,
                    language: "scs"
                }).then((document) => {
                    vscode.window.showTextDocument(document, vscode.ViewColumn.Beside)
                })
            },
            (error) => {
                vscode.window.showErrorMessage(`Problem with GWF: ${error}`);
            }
        );

    }
};

export async function activate(context: ExtensionContext) {
    // The server is implemented in node
    const serverModule = context.asAbsolutePath(
        path.join('SCs-language-server', 'out', 'scsServer.js')
    );
    // The debug options for the server
    // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
    const debugOptions = {execArgv: ['--nolazy', '--inspect=6009']};

    const serverOptions: ServerOptions = {
        run: {module: serverModule, transport: TransportKind.ipc},
        debug: {module: serverModule, transport: TransportKind.ipc, options: debugOptions}
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: ['scs', 'scsi'],
        synchronize: {
            fileEvents: [workspace.createFileSystemWatcher('**/.clientrc'), workspace.createFileSystemWatcher('**/*.scs')]
        }
    };

    // Create the language client and start the client.
    client = new LanguageClient(
        'languageServerExample',
        'Language Server Example',
        serverOptions,
        clientOptions
    );

    // INIT
    client.start();
    await client.onReady(); // fix: extension failures in case of long LSP startup time
    connectionManager = new ConnectionManager(client);
    await connectionManager.connect(scMachineUrl);
    scsLoader = new ScsLoader(connectionManager.client);
    scsSearcher = new SearcherByTemplate(connectionManager.client);
    vscode.window.registerTreeDataProvider('loadedFiles', scsLoader);

    // SUBSCRIPTIONS
    context.subscriptions.push(connectionManager.statusBarItem);

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.connect', onCommandScsConnect)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.disconnect', onCommandScsDisconnect)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.preview', async () => {
            await onCommandUpload(LoadMode.Preview)
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.previewAll', async () => {
            await onCommandUploadAll(LoadMode.Preview)
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.upload', async () => {
            await onCommandUpload(LoadMode.Save)
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.uploadAll', async () => {
            await onCommandUploadAll(LoadMode.Save)
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.unload', onCommandUnload)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.unloadAll', onCommandUnloadAll)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.findByTemplate', onCommandScsFindByTemplate)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.genScs', onCommandScsGenScs)
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('gwf.toScs', onCommandGwfToScs)
    );

}

export function deactivate(): Thenable<void> {
    return scsLoader.unloadAll(LoadMode.Preview).then(() => {
        if (!client) {
            return undefined;
        }
        return client.stop();
    }).catch(() => {
        return undefined;
    });
}
