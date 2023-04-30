'use strict';

import * as vs from 'vscode-languageserver';
import { CharStreams, CommonTokenStream, ErrorListener, TerminalNode, ParseTreeWalker } from 'antlr4';
import { makeUri } from './scsUtils.js';
import { RemoteConsole } from 'vscode-languageserver';
import scsLexer from './syntax/scsLexer.js';
import scsParser from './syntax/scsParser.js';
import { Idtf_systemContext, Attr_listContext } from './syntax/scsParser.js';
import { ScClientWrapper } from './scsServer.js';
import scsListener from './syntax/scsListener.js';

interface ParseError {
    line: number,
    offset: number,
    len: number,
    msg: string
}

class SCsErrorListener implements ErrorListener<any> {

    private callback: (err: ParseError) => void = () => { };

    constructor(callback: (err: ParseError) => void) {
        this.callback = callback;
    }

    syntaxError(recognizer: any, offendingSymbol: { text: string | any[]; }, line: any, charPositionInLine: any, msg: string, e: any): void {
        this.callback({
            line: line,
            offset: charPositionInLine,
            len: offendingSymbol ? offendingSymbol.text.length : 0,
            msg: msg
        });
    }
}
class scsTreeWalker extends scsListener {
    private finfo: FileInfo;
    constructor(finfo: FileInfo) {
        super();
        this.finfo = finfo;
    }

    addSymbol(id: TerminalNode): void {
        this.finfo.appendSymbol(
            id.symbol.text,
            getSymbolRange(
                {
                    line: id.symbol.line,
                    len: id.symbol.text.length,
                    offset: id.symbol.column+1
                }
            )
        );
    }

    exitIdtf_system(ctx: Idtf_systemContext): void {
        const id = ctx.ID_SYSTEM()
        if (id) {
            this.addSymbol(id);
        }
    }

    exitAttr_list(ctx: Attr_listContext): void {
        const id = ctx.ID_SYSTEM()
        if (id) {
            id.forEach((element: TerminalNode) => {
                this.addSymbol(element);

            })        
        }
    }
}
interface SymbolPosition {
    line: number;   // index of file line (starts with 1)
    column: number; // index of symbol offset in a line (starts with 1)
}

interface SymbolRange {
    start: SymbolPosition;
    end: SymbolPosition;
}

function isSymbolPositionEqual(a: SymbolPosition, b: SymbolPosition): boolean {
    return (a.line === b.line && a.column == b.column);
}

function isSymbolRangeEqual(a: SymbolRange, b: SymbolRange): boolean {
    return isSymbolPositionEqual(a.start, b.start) && isSymbolPositionEqual(a.end, b.end);
}

function getSymbolRange(location: { line: any; offset: any; len: any; }): SymbolRange {
    return {
        start: {
            line: location.line,
            column: location.offset
        },
        end: {
            line: location.line,
            column: location.offset + location.len
        }
    };
}

function toRange(range: SymbolRange): vs.Range {
    const begPos: vs.Position = vs.Position.create(range.start.line - 1, range.start.column - 1);
    const endPos: vs.Position = vs.Position.create(range.end.line - 1, range.end.column - 1);
    return vs.Range.create(begPos, endPos);
}

class FileInfo {
    private uri: string;             // uri of a file
    public errors: vs.Diagnostic[];    // list of all errors is a file
    private symbols: Map<string, SymbolRange[]>;       // map of all symbol occurenses
    // private ast: SyntaxContext | null = null;

    constructor(docUri: string) {
        this.uri = docUri;
        this.errors = [];
        this.symbols = new Map<string, SymbolRange[]>();
    }

    public appendError(err: ParseError): void {
        const range = vs.Range.create(err.line - 1, err.offset, err.line - 1, err.offset + err.len);
        const diagnostic = vs.Diagnostic.create(range, err.msg);

        this.errors.push(diagnostic);
    }

    public clear(): void {
        this.errors = [];
        this.symbols.clear();
        this.uri = "";
    }

    public appendSymbol(name: string, location: SymbolRange) {
        const list = this.symbols.get(name);
        if (list) {
            const found = list.find((value: SymbolRange): boolean => {
                return (isSymbolRangeEqual(location, value));
            });

            if (!found)
                list.push(location);
        } else {
            this.symbols.set(name, [location]);
        }
    }

    public provideComplete(prefix: string, docUri: string): string[] {
        const result: string[] = [];
        this.symbols.forEach((value: SymbolRange[], key: string) => {
            if (key.startsWith('..') && docUri !== this.uri)
                return;

            if (key.startsWith(prefix)) {
                result.push(key);
            }
        });

        return result;
    }

    public getSymbolsNum() {
        return this.symbols.size;
    }

    public getErrors(): vs.Diagnostic[] {
        return this.errors;
    }

    public getSymbolRanges(name: string): SymbolRange[] | undefined {
        return this.symbols.get(name);
    }
}

export class SCsParsedData {
    private console;
    private files: Map<string, FileInfo>;
    private conn: ScClientWrapper

    constructor(inConsole: RemoteConsole, scClient: ScClientWrapper) {
        this.console = inConsole;
        this.files = new Map<string, FileInfo>();
        this.conn = scClient;
    }

    private doSendDiagnostic(params: vs.PublishDiagnosticsParams): void {
        if (this.sendDiagnostic)
            this.sendDiagnostic(params);
    }
    // send diagnostic callback (shall be set by scsSession later)
    public sendDiagnostic: undefined | ((params: vs.PublishDiagnosticsParams) => void);

    public parseDocumentANTLR(docText: string, docUri: string) {

        docUri = makeUri(docUri);
        const finfo = new FileInfo(docUri);
        this.files.set(docUri, finfo);

        try {

            const chars = CharStreams.fromString(docText);
            const lexer = new scsLexer(chars);
            const tokens = new CommonTokenStream(lexer);
            const parser = new scsParser(tokens);
            parser.buildParseTrees = true;
            parser.addErrorListener(new SCsErrorListener(function (err: ParseError) {
                finfo.appendError(err);
            }));

            const tree = parser.syntax();
            const walker = new scsTreeWalker(finfo);
            //@ts-ignore
            ParseTreeWalker.DEFAULT.walk(walker, tree)

        } catch (e: any) {
            this.console.log(e.stack);
        }

        // send diagnostic
        if (this.sendDiagnostic) {
            let resultErrors: vs.Diagnostic[] = [];

            if (finfo) {
                resultErrors = finfo.getErrors();
            }

            this.doSendDiagnostic({
                uri: docUri,
                diagnostics: resultErrors
            });
        }
    }

    public parseDocumentOnline(docText: string, docUri: string) {
        // TODO: placeholder for now
        this.parseDocumentANTLR(docText, docUri);
    }

    public parseDocument(docText: string, docUri: string) {
        if (this.conn && this.conn.isOnline) {
            this.parseDocumentOnline(docText, docUri);
        }
        else {
            this.parseDocumentANTLR(docText, docUri);
        }
    }

    public provideAutoComplete(docUri: string, prefix: string): string[] {
        /// TODO: make unique and faster
        let result: string[] = [];

        this.files.forEach((value: FileInfo, key) => {
            result = result.concat(value.provideComplete(prefix, docUri));
        });

        const uniqueResult = result.filter(function (item, pos) {
            return result.indexOf(item) == pos;
        });

        return uniqueResult;
    }

    public provideWorkspaceSymbolUsage(query: string): vs.SymbolInformation[] {
        const result: vs.SymbolInformation[] = [];

        this.files.forEach((value: FileInfo, key) => {
            const ranges = value.getSymbolRanges(query);

            if (ranges) {
                ranges.forEach((r: SymbolRange) => {
                    const sym: vs.SymbolInformation = vs.SymbolInformation.create(key,
                        vs.SymbolKind.Variable, toRange(r));
                });
            }
        });

        return result;
    }

    public provideReferencesInFile(query: string, uri: string): vs.Location[] {
        const result: vs.Location[] = [];

        const fileInfo: FileInfo | undefined = this.files.get(uri);
        if (fileInfo) {
            const ranges: SymbolRange[] | undefined = fileInfo.getSymbolRanges(query);

            if (ranges) {
                ranges.forEach((r: SymbolRange) => {
                    result.push(vs.Location.create(uri, toRange(r)));
                });
            }
        }

        return result;
    }

    public provideReferences(query: string): vs.Location[] {
        const result: vs.Location[] = [];
        this.files.forEach((value: FileInfo, key: string) => {
            const ranges: SymbolRange[] | undefined = value.getSymbolRanges(query);

            if (ranges) {
                ranges.forEach((r: SymbolRange) => {
                    result.push(vs.Location.create(key, toRange(r)));
                });
            }
        });

        return result;
    }

    public _onAppendSymbol(docUri: string, name: string, location: { line: any; offset: any; len: any; }): void {
        const finfo = this.files.get(docUri);

        if (!finfo)
            return; // we need to work safe

        name = name.trim();
        // append symbol
        finfo.appendSymbol(name, getSymbolRange(location));
    }

    public _onAppendError(docUri: string, err: ParseError): void {
        const finfo = this.files.get(docUri);

        this.console.log(docUri);
        this.console.log(err.msg);

        if (!finfo)
            return; // we need to work safe

        // append symbol
        finfo.appendError(err);
    }

    public _log(msg: string) {
        this.console.log(msg);
    }
}
