'use strict';

import * as vs from 'vscode-languageserver';
import { SCsSession } from './scsSession.js';
import { getFilesInDirectory, getFileContent, normalizeFilePath } from './scsUtils.js';
import {ScClient} from 'ts-sc-client-ws';

interface scsServerParams {
    onlineMode: boolean
    client: ScClient | null
}
// Create a connection for the server. The connection uses Node's IPC as a transport
const connection: vs.IConnection = vs.createConnection(new vs.IPCMessageReader(process), new vs.IPCMessageWriter(process));
connection.console.info(`Sample server running in node ${process.version}`);

const documents: vs.TextDocuments = new vs.TextDocuments();
documents.listen(connection);

let workspaceRoot: string | null | undefined;
let scMachineUrl: string | undefined;
let onlineMode: boolean = false;
let client: ScClientWrapper;
export class ScClientWrapper {
    connection: ScClient | null = null;
    url: string = '';
    private online: boolean = false;
    constructor(scMachineUrl: string = '', isOnline: boolean = false) {
        this.reconfigure(scMachineUrl, isOnline);   
    }

    reconfigure(scMachineUrl: string, isOnline: boolean) {
        this.url = scMachineUrl;
        this.online = isOnline;
        this.connection = (this.url && this.online) ? new ScClient(scMachineUrl) : null;
    }

}

client = new ScClientWrapper(); 

const session: SCsSession = new SCsSession(connection, client, documents);

function parseAllOpenedDocuments() {
    documents.all().forEach((doc: vs.TextDocument, index: number, array: vs.TextDocument[]) => {
        session.parsedData.parseDocumentANTLR(doc.getText(), doc.uri);
    });
}


function parseDocumentsInFolder(path: string) {
    connection.console.log("Parse files in: " + path);
    
    const files: string[] = getFilesInDirectory(path, ['.scs', '.scsi']);
    files.forEach((filePath: string) => {
        const content: string = getFileContent(filePath).toString();
        session.parsedData.parseDocumentANTLR(content, filePath);
    });
    
}

connection.onInitialize((params): vs.InitializeResult => {
	
    workspaceRoot = params.rootPath;
    if (workspaceRoot)
        parseDocumentsInFolder(workspaceRoot);

	return {
		capabilities: {
			textDocumentSync: vs.TextDocumentSyncKind.Full,
            hoverProvider: true,
            completionProvider: { resolveProvider: true },
            //workspaceSymbolProvider: true,
            documentHighlightProvider: true,
            referencesProvider: true,
            renameProvider: true
            }
		};

    
});

connection.onDidChangeConfiguration((params) => {
    onlineMode = params.settings.onlineMode
    scMachineUrl = params.settings.scMachineUrl
    client.reconfigure(scMachineUrl ? scMachineUrl : '', onlineMode)
    //parseAllOpenedDocuments();
});

connection.onDidChangeWatchedFiles(() => {
    connection.console.log("Watched files changed");

    parseAllOpenedDocuments();
});

connection.onWorkspaceSymbol(session.onWorkspaceSymbol());
connection.onHover(session.onHover());
connection.onReferences(session.onReferences());
connection.onCompletion(session.onCompletion());
connection.onCompletionResolve(session.onCompletionResolve());
connection.onDocumentHighlight(session.onDocumentHighlight());
connection.onRenameRequest(session.onRename());

documents.onDidChangeContent((event) => {
    session.parsedData.parseDocumentANTLR(event.document.getText(), normalizeFilePath(event.document.uri));
});

// Listen on the connection
connection.listen();
