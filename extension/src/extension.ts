/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as vscode from 'vscode';
import {ExtensionContext, workspace} from 'vscode';
import {ScsLoader} from './ScsLoader';
import {ConnectionManager} from './ConnectionManager';

import {LanguageClient, LanguageClientOptions, ServerOptions, TransportKind} from 'vscode-languageclient';
import {SearcherByTemplate} from "./SearcherByTemplate";
import {genScs} from './ScsGenerator';

let client: LanguageClient;
let scMachineUrl = "ws://localhost:8090";
let scsLoader: ScsLoader;
let scsSearcher: SearcherByTemplate;

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
            fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
        },
    };

    // Create the language client and start the client.
    client = new LanguageClient(
        'languageServerExample',
        'Language Server Example',
        serverOptions,
        clientOptions
    );

    client.start();
    let conn = new ConnectionManager();
    await conn.connect(scMachineUrl);
    scsLoader = new ScsLoader(conn.client);
    scsSearcher = new SearcherByTemplate(conn.client);
    context.subscriptions.push(conn.statusBarItem);

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.connect', async () => {
            scMachineUrl = await vscode.window.showInputBox({
                placeHolder: "Enter sc-machine url. For example, ws://localhost:8090"
            });
            await conn.connect(scMachineUrl);
            scsLoader.scClient = conn.client;
            scsSearcher.scClient = conn.client;
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.disconnect', async () => {
            conn.disconnect();
            scsLoader.scClient = undefined;
            scsSearcher.scClient = undefined;
            vscode.window.showInformationMessage("You're now disconnected from sc-machine.")
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.upload', async () => {
            if (conn.client == undefined) {
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
            const editor = vscode.window.activeTextEditor;

            if (editor) {
                const loadedScs = (await scsLoader.loadScs([editor.document.uri]))[0];
                vscode.window.showInformationMessage(loadedScs);
                if (loadedScs.length > 0) {
                    panel.webview.html = `<iframe src="http://localhost:8000?sys_id=${loadedScs}&scg_structure_view_only=true" height="1000" width="100%" title="SCs"></iframe>`;
                    panel.title = loadedScs;
                }
            }
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('scs.uploadAll', async () => {
            if (conn.client == undefined) {
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
                const loadedScs = (await scsLoader.loadScs(allScsFiles));
                if (loadedScs.length > 0) {
                    // ToDo fix link
                    panel.webview.html = `<iframe src="http://localhost:8000?sys_id=unknowntechnicalid&scg_structure_view_only=true" height="1000" width="100%" title="SCs"></iframe>`;
                }
            }
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.unload', async () => {
            if (conn.client == undefined) {
                vscode.window.showErrorMessage("Unable to perform operation. Connect to sc-machine.");
                return;
            }
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const unloadedScs = (await scsLoader.unloadScs([editor.document.uri]))[0];
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
            }
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.unloadAll', async () => {
            if (conn.client == undefined) {
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
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.findByTemplate', async () => {
            if (conn.client == undefined) {
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
        })
    );
    //new Map([[`human`, `en`], [`Sport`, `en`]]),

    context.subscriptions.push(
        vscode.commands.registerCommand('scs.genScs', async () => {
            const entityName = await vscode.window.showInputBox({
                title: "Gen SCs by entity name",
                prompt: "qwe"
            });
            const generationResults = await genScs(new Map([[entityName, `en`]]))
            const wsEdit = new vscode.WorkspaceEdit();
            const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder

            const conceptsFolder = (wsPath + '/concepts/');
            const relationsFolder = (wsPath + '/relations/');
            const instancesFolder = (wsPath + '/instances/');

            for (const [filename, scs] of generationResults.concepts) {
                const fullFileUri = vscode.Uri.file(conceptsFolder + filename + '.scs')
                wsEdit.createFile(fullFileUri, {ignoreIfExists: true});
                const writeData = Buffer.from(scs, 'utf8');
                await vscode.workspace.fs.writeFile(fullFileUri, writeData);
            }

            for (const [filename, scs] of generationResults.relations) {
                const fullFileUri = vscode.Uri.file(relationsFolder + filename + '.scs')
                wsEdit.createFile(fullFileUri, {ignoreIfExists: true});
                const writeData = Buffer.from(scs, 'utf8');
                await vscode.workspace.fs.writeFile(fullFileUri, writeData);
            }

            for (const [filename, scs] of generationResults.instances) {
                const fullFileUri = vscode.Uri.file(instancesFolder + filename + '.scs')
                wsEdit.createFile(fullFileUri, {ignoreIfExists: true});
                const writeData = Buffer.from(scs, 'utf8');
                await vscode.workspace.fs.writeFile(fullFileUri, writeData);
            }

            vscode.workspace.applyEdit(wsEdit);
            vscode.window.showInformationMessage("Generation completed successfully")
        })
    );
}

export function deactivate(): Thenable<void> {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
