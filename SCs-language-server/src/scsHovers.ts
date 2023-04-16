'use strict';

import * as vs from 'vscode-languageserver';

import { scsDetails } from './scsData.js';
import { getCurrentWord } from './scsUtils.js';

export class SCsHoverProvider {
    public provide(document: vs.TextDocument | undefined,
        position: vs.Position): vs.Hover | null {
        if (document != undefined) {
            const token = getCurrentWord(document, document.offsetAt(position));
            const details = scsDetails.get(token);
            if (details) {
                return {
                    contents: details
                };
            }
        }

        return null;
    }
}
