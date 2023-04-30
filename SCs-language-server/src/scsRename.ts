import * as vs from 'vscode-languageserver';

import { SCsParsedData } from './scsParsedData.js';
import { getCurrentWord } from './scsUtils.js';

export class SCsRename {
    private parsedData: SCsParsedData;

    constructor(data: SCsParsedData) {
        this.parsedData = data;
    }

    public do(doc: vs.TextDocument | undefined, pos: vs.Position, newName: string): vs.WorkspaceEdit | undefined {
        if (doc != undefined) {
            const changes: { [doc_uri: string]: vs.TextEdit[]} = {};
            const symbol: string = getCurrentWord(doc, doc.offsetAt(pos));
            this.parsedData.provideReferences(symbol).forEach((loc: vs.Location) => {
                const v = changes[loc.uri];
                const edit: vs.TextEdit = vs.TextEdit.replace(loc.range, newName);
                if (v) {
                    v.push(edit);
                } else {
                    changes[loc.uri] = [edit];
                }
            });

            const result: vs.WorkspaceEdit = {
                changes: changes
            };
            return result;
        }
        return undefined;
    }
}
