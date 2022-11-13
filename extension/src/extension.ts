/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';
import * as vscode from 'vscode';
import { ScsLoader } from './ScsLoader'

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';

let client: LanguageClient;
let scsLoader = new ScsLoader();

export async function activate(context: ExtensionContext) {
	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('SCs-language-server', 'out', 'scsServer.js')
	);
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
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

	context.subscriptions.push(
		vscode.commands.registerCommand('scs.upload', async () => {
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
				const loadedScs = (await scsLoader.loadScs([editor.document.uri]))[0]
				vscode.window.showInformationMessage(loadedScs);
				if (loadedScs.length > 0) {
					panel.webview.html = `<iframe src="http://localhost:8000?sys_id=${loadedScs}&scg_structure_view_only=true" height="1000" width="100%" title="SCs"></iframe>`
					panel.title = loadedScs
				}
			}
		})
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('scs.uploadAll', async () => {
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
				const loadedScs = (await scsLoader.loadScs(allScsFiles))
				if (loadedScs.length > 0) {
					// ToDo fix link and size
					panel.webview.html = `<iframe src="http://localhost:8000?sys_id=unknowntechnicalid&scg_structure_view_only=true height="1000" width="100%" title="SCs"></iframe>`
				}
			}
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('scs.unload', async () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const unloadedScs = (await scsLoader.unloadScs([editor.document.uri]))[0]
				if (unloadedScs.idtf) {

					vscode.window.showInformationMessage(`Succesfully deleted ${unloadedScs.idtf}. You can close the tab`);
					// ToDo after new vscode API from this issue -> https://github.com/microsoft/vscode/issues/41909

					vscode.window.tabGroups.all
						.flatMap(({ tabs }) => tabs)
						.filter(document => document.label === unloadedScs.idtf)
						.forEach(label => { vscode.window.tabGroups.close(label) })
					// filteredTextDocuments;
					// const filteredTextDocuments = vscode.workspace.textDocuments.filter(td => td.fileName === unloadedScs.idtf)
					// for (const td of filteredTextDocuments) {
					// 	vscode.window.tabGroups.close()

					// 	await vscode.window.showTextDocument(td, { preview: true, preserveFocus: false });
					// 	await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
					// }
				} else {
					vscode.window.showErrorMessage(unloadedScs.errorMsg)
				}
			}
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('scs.unloadAll', async () => {
			const allProjectDocuments = vscode.workspace.textDocuments.map(document => document.uri);
			if (allProjectDocuments) {
				const unloadedScs = (await scsLoader.unloadAll())
				if (unloadedScs) {
					vscode.window.showInformationMessage("All successfully unloaded ");
				} else {
					vscode.window.showErrorMessage("Nothing to unload")
				}
			}
		})
	);

}

export function deactivate(): Thenable<void> {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
