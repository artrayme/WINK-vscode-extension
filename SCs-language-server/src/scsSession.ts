import * as vs from 'vscode-languageserver';

import { SCsHoverProvider } from './scsHovers.js';
import { SCsCompletionItemProvider } from './scsCompletion.js';
import { SCsReferenceProvider } from './scsReferences.js';
import { SCsDocumentHighlight } from './scsHighlight.js';
import { SCsRename } from './scsRename.js';
import { SCsParsedData } from './scsParsedData.js';
import { ScClientWrapper } from './scsServer.js';

// After the server has started the client sends an initialize request. The server receives
// in the passed params the rootPath of the workspace plus the client capabilities. 
export class SCsSession {

    private connection: vs.IConnection;
    private documents: vs.TextDocuments;
    private scClient: ScClientWrapper;

    private hoverProvider: SCsHoverProvider;
    private completionProvider: SCsCompletionItemProvider;
    private referenceProvider: SCsReferenceProvider;
    private docHighlight: SCsDocumentHighlight;
    private renameProvider: SCsRename;

    parsedData: SCsParsedData;

    constructor(conn: vs.IConnection, client: ScClientWrapper, docs: vs.TextDocuments) {
        this.connection = conn;
        this.documents = docs;
        this.scClient = client;
        this.parsedData = new SCsParsedData(this.connection.console, this.scClient);
        this.parsedData.sendDiagnostic = this.connection.sendDiagnostics;

        this.hoverProvider = new SCsHoverProvider();
        this.completionProvider = new SCsCompletionItemProvider(this.parsedData);
        this.referenceProvider = new SCsReferenceProvider(this.parsedData);
        this.docHighlight = new SCsDocumentHighlight(this.parsedData);
        this.renameProvider = new SCsRename(this.parsedData);
    }

    public onHover() : vs.RequestHandler<vs.TextDocumentPositionParams, vs.Hover | null | undefined, void> {
        return async (params) => {
            const doc: vs.TextDocument | undefined = this.documents.get(params.textDocument.uri);
            return this.hoverProvider.provide(doc, params.position);
        };
    }

    public onWorkspaceSymbol() : vs.RequestHandler<vs.WorkspaceSymbolParams, vs.SymbolInformation[], void> {
        return async (params) => {
            return this.parsedData.provideWorkspaceSymbolUsage(params.query);
        };
    }

    public onReferences() : vs.RequestHandler<vs.ReferenceParams, vs.Location[] | undefined, void> {
        return async (params) => {
            const doc: vs.TextDocument | undefined = this.documents.get(params.textDocument.uri);
            return this.referenceProvider.do(doc, params.position);
        };
    }

    public onCompletion() : vs.RequestHandler<vs.TextDocumentPositionParams, vs.CompletionItem[] | vs.CompletionList | undefined, void> {
        return async (params) => {
            const doc: vs.TextDocument | undefined = this.documents.get(params.textDocument.uri);
            if (doc != undefined) return this.completionProvider.provide(doc, params.position);
             return undefined;
        };
    }

    public onCompletionResolve() : vs.RequestHandler<vs.CompletionItem, vs.CompletionItem, void> {
        return async (item) => {
            return this.completionProvider.resolve(item);
        };
    }

    public onDocumentHighlight() : vs.RequestHandler<vs.TextDocumentPositionParams, vs.DocumentHighlight[] | undefined, void> {
        return async (params) => {
            const doc  = this.documents.get(params.textDocument.uri);
            if (doc != undefined) return this.docHighlight.do(doc, params.position);
            return undefined;
        };
    }

    public onRename() : vs.RequestHandler<vs.RenameParams, vs.WorkspaceEdit | undefined, void> {
        return async (params) => {
            return this.renameProvider.do(this.documents.get(params.textDocument.uri),
                                          params.position,
                                          params.newName);
        };
    }
}
