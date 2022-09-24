/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';
import * as vscode from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';
import { ScAddr, ScClient, ScConstruction, ScLinkContent, ScLinkContentType, ScType } from 'ts-sc-client';
// import WebSocket = require('ws');

let client: LanguageClient;

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
	const disposable = vscode.commands.registerCommand('ostis.save-scs', () => {
		vscode.window.showInformationMessage('Hello World!');
	});
	context.subscriptions.push(disposable);

	
	const scClient = new ScClient(new WebSocket('https://localhost:8090'));
    const myNode = "_node";
    const myLink = "_link";

    const linkContent = "my_content";
    const fakeNodeAddr = new ScAddr(123);

    const construction = new ScConstruction();

    construction.createNode(ScType.NodeConst, myNode);
    construction.createLink(
      ScType.LinkConst,
      new ScLinkContent(linkContent, ScLinkContentType.String),
      myLink
    );
    construction.createEdge(
      ScType.EdgeAccessConstPosPerm,
      myNode,
      fakeNodeAddr
    );

    await scClient.createElements(construction);
}

export function deactivate(): Thenable<void> {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
