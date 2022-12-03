import * as vscode from 'vscode';

import {ScAddr, ScClient, ScTemplate, ScType} from 'ts-sc-client-ws';
import {createTechnicalWinkId} from "./Utils";
import {convertOldGwfToNew} from "./Old2NewScgConverter";
import {convertGwfToScs} from "./Scg2ScsConverterOld";
// import {convertGwfToScs} from "./Scg2ScsConverter";

const scClient = new ScClient('ws://localhost:8090');

export class ScsLoader {
    loadedScs: Map<vscode.Uri, { id: string; text: string }> = new Map;

    async loadScs(filenames: vscode.Uri[]): Promise<string[]> {
        const result: string[] = [];

        for (const filename of filenames) {
            const exists = this.loadedScs.has(filename);
            if (exists) await this.unloadScs([filename]);
            const doc = await vscode.workspace.openTextDocument(filename);
            let preparedScs: { id: string, text: string };
            if (filename.path.endsWith('.gwf')) {
                const gwfInNewFormat: string = convertOldGwfToNew(doc.getText());
                const scsText: string = convertGwfToScs(gwfInNewFormat);
                preparedScs = this.wrapScs(scsText);
            } else {
                preparedScs = this.wrapScs(doc.getText());
            }
            const isCreated = await scClient.createElementsBySCs([preparedScs.text]);

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
        const technicalIdtf = createTechnicalWinkId();
        const resultSCs = technicalIdtf + " = [* " + text + " *];;";
        return {id: technicalIdtf, text: resultSCs};
    }

    async unloadScs(filenames: vscode.Uri[]) {
        const result = new Array<{ idtf: string, errorMsg: string }>();
        for (const filename of filenames) {
            if (this.loadedScs.has(filename)) {
                const contourNodeIdtf = this.loadedScs.get(filename).id;
                const contourAddr = (await scClient.resolveKeynodes([{
                    id: contourNodeIdtf,
                    type: ScType.Node
                }]))[contourNodeIdtf];
                const foundAddrs = await this.findElementsInContour(contourAddr);
                await scClient.deleteElements(Array.from(foundAddrs).map(e => new ScAddr(e)));
                if (foundAddrs.size > 0) result.push({idtf: contourNodeIdtf, errorMsg: ""});
                else result.push({
                    idtf: "",
                    errorMsg: "Can't find this construction in connected sc-machine. Maybe someone else deleted this construction from the base? "
                });
            } else {
                result.push({
                    idtf: "",
                    errorMsg: "There is no such construction. Maybe you haven't uploaded this construction or you've already deleted it?"
                });
            }
        }
        return result;
    }

    public async unloadAll() {
        const allIdtfs = this.loadedScs.values();
        const foundAddrs = new Set<number>();
        for (const scsIdtf of allIdtfs) {
            const contourAddr = (await scClient.resolveKeynodes([{id: scsIdtf.id, type: ScType.Node}]))[scsIdtf.id];
            const temp = await this.findElementsInContour(contourAddr);
            temp.forEach(element => {
                foundAddrs.add(element);
            });
        }
        await scClient.deleteElements(Array.from(foundAddrs).map(e => new ScAddr(e)));
        return foundAddrs;
    }



    private async findElementsInContour(contourNode: ScAddr) {
        const unloadingTemplate1 = new ScTemplate().triple(
            contourNode,
            ScType.EdgeAccessVarPosPerm,
            ScType.EdgeAccess
        );
        const unloadingTemplate2 = new ScTemplate().triple(
            contourNode,
            ScType.EdgeAccessVarPosPerm,
            ScType.EdgeUCommon
        );
        const unloadingTemplate3 = new ScTemplate().triple(
            contourNode,
            ScType.EdgeAccessVarPosPerm,
            ScType.EdgeDCommon
        );
        const templates = [unloadingTemplate1, unloadingTemplate2, unloadingTemplate3];

        const foundAddrs = new Set<number>();
        const found = [];
        for (const template of templates) {
            found.push(await scClient.templateSearch(template));
        }
        found.reduce((prev, current) => prev.concat(current))
            .forEach(triplet => triplet.forEachTriple((addr1, addr2, addr3) => {
                foundAddrs.add(addr1.value);
                foundAddrs.add(addr2.value);
                foundAddrs.add(addr3.value);
            }));
        return foundAddrs;
    }
}
