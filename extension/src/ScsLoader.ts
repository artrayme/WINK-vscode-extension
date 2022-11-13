import * as vscode from 'vscode';

import { ScClient, ScAddr, ScTemplate, ScType } from 'ts-sc-client-ws';
const scClient = new ScClient('ws://localhost:8090');


export class ScsLoader {
    loadedScs: Map<vscode.Uri, { id: string; text: string }> = new Map;

    async loadScs(filenames: vscode.Uri[]): Promise<string[]> {
        let result: string[];
        result = []

        for (const filename of filenames) {
            const exists = this.loadedScs.has(filename);
            if (exists) {
                await this.unloadScs([filename]) // ToDo add after template search fix
            }
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

    async unloadScs(filenames: vscode.Uri[]) {
        const result = new Array<{ idtf: string, errorMsg: string }>();
        for (const filename of filenames) {
            if (this.loadedScs.has(filename)) {
                const contourNodeIdtf = this.loadedScs.get(filename).id;
                const contourAddr = (await scClient.resolveKeynodes([{ id: contourNodeIdtf, type: ScType.Node }]))[contourNodeIdtf]
                const unloadingTemplate = new ScTemplate().triple(
                    contourAddr,
                    ScType.EdgeAccessVarPosPerm,
                    ScType.Node
                )
                const foundConstruction = await scClient.templateSearch(unloadingTemplate)
                let foundAddrs = new Set<ScAddr>();
                for (const triplet of foundConstruction) {
                    triplet.forEachTriple((element) => {
                        foundAddrs.add(element)
                    })
                }
                await scClient.deleteElements(Array.from(foundAddrs))
                if (foundAddrs.size > 0) result.push({ idtf: contourNodeIdtf, errorMsg: "" })
                else result.push({ idtf: "", errorMsg: "Can't find this construction in connected sc-machine. Maybe someone else deleted this construction from the base? " })
            } else {
                result.push({ idtf: "", errorMsg: "There is no such construction. Maybe you haven't uploaded this construction or you've already deleted it?" })
            }
        }
        return result;
    }

    public async unloadAll() {
        const allIdtfs = this.loadedScs.values()
        let foundAddrs = new Set<ScAddr>()
        for (const scsIdtf of allIdtfs) {
            const contourAddr = (await scClient.resolveKeynodes([{ id: scsIdtf.id, type: ScType.Node }]))[scsIdtf.id]
            const unloadingTemplate = new ScTemplate().triple(
                contourAddr,
                ScType.EdgeAccessVarPosPerm,
                ScType.Node
            )
            const foundConstruction = await scClient.templateSearch(unloadingTemplate)
            for (const triplet of foundConstruction) {
                triplet.forEachTriple((element) => {
                    foundAddrs.add(element)
                })
            }
        }
        await scClient.deleteElements(Array.from(foundAddrs))
        return foundAddrs
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