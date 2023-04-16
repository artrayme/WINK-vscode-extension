import * as vs from 'vscode-languageserver';

import { SCsParsedData } from './scsParsedData.js';
import { getCurrentWord } from './scsUtils.js';

export class SCsDocumentHighlight {
    private parsedData: SCsParsedData;
    
    constructor(data: SCsParsedData) {
        this.parsedData = data;
    }

    public do(document: vs.TextDocument, pos: vs.Position) : vs.DocumentHighlight[] {
        const query: string = getCurrentWord(document, document.offsetAt(pos));
        const locations: vs.Location[] = this.parsedData.provideReferencesInFile(query, document.uri);

        return locations.map((value: vs.Location) => {
            return vs.DocumentHighlight.create(value.range);
        });
    }
}
