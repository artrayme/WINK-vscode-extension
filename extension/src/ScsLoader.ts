import * as vscode from 'vscode';

import { ScClient, ScAddr } from 'ts-sc-client-ws';
const scClient = new ScClient('ws://localhost:8090');


export class ScsLoader {
    loadedScs: Map<vscode.Uri, { id: string; text: string } > = new Map;


    async loadScs(filenames: vscode.Uri[]): Promise<string[]> {
        let result: string[];
        result = []

        for (const filename of filenames) {
            // if (this.loadedScs.has(filename)) await this.unloadScs([filename]) // ToDo add after template search fix
            const doc = await vscode.workspace.openTextDocument(filename);

            const preparedScs = this.wrapScs(doc.getText());
            const isCreated = await scClient.createElementsBySCs([preparedScs.text])

            if (isCreated) {
                vscode.window.showInformationMessage(doc.fileName);
                this.loadedScs.set(filename, preparedScs);
                result.push(preparedScs.id);
            } else {
                vscode.window.showErrorMessage(doc.fileName);
                result.push("");
            }
        }
        return result;
    }

    private wrapScs(text: string): { id: string; text: string } {
        const technicalIdtf = "wink_vscode_extension_" + this.makeid(8)
        const resultSCs = technicalIdtf + " = [* " + text + " *];;"
        return { id: technicalIdtf, text: resultSCs }
    }

    async unloadScs(filenames: vscode.Uri[])  {
        for (const filename of filenames) {
            if(this.loadedScs.has(filename)){
                const foundConstruction= await scClient.templateSearch(this.loadedScs.get(filename).text)
                let foundAddrs: ScAddr[];
                foundAddrs = []
                for (const triplet of foundConstruction) {
                    triplet.forEachTriple((element)=>{
                        foundAddrs.push(element)
                    })
                }
                await scClient.deleteElements(foundAddrs)
            }
        }
    }

    private makeid(length: number): string {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
} 