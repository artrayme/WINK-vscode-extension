'use strict';

import * as vs from 'vscode-languageserver';

import { SCsSession } from './scsSession';
import { getFilesInDirectory, getFileContent, normalizeFilePath } from './scsUtils';

// Create a connection for the server. The connection uses Node's IPC as a transport
const connection: vs.IConnection = vs.createConnection(new vs.IPCMessageReader(process), new vs.IPCMessageWriter(process));

// Create a simple text document manager. The text document manager
// supports full document sync only
const documents: vs.TextDocuments = new vs.TextDocuments();
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

const  session: SCsSession = new SCsSession(connection, documents);
let workspaceRoot: string | null | undefined;

function parseAllOpenedDocuments() {
    documents.all().forEach((doc: vs.TextDocument, index: number, array: vs.TextDocument[]) => {
        session.parsedData.parseDocument(doc.getText(), doc.uri);
    });
}

function parseDocumentsInFolder(path: string) {
    connection.console.log("Parse files in: " + path);
    
    const files: string[] = getFilesInDirectory(path, ['.scs', '.scsi']);
    files.forEach((filePath: string) => {
        const content: string = getFileContent(filePath).toString();
        session.parsedData.parseDocument(content, filePath);
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
    parseAllOpenedDocuments();
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
    session.parsedData.parseDocument(event.document.getText(), normalizeFilePath(event.document.uri));
});

// Listen on the connection
connection.listen();