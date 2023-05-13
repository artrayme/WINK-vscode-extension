import * as vscode from 'vscode';

import {ScAddr, ScClient, ScTemplate, ScType} from 'ts-sc-client-ws';
import {createTechnicalWinkId} from "./Utils";
import {convertOldGwfToNew} from "./Old2NewScgConverter";
import {gwfToScsAsync} from "kb-generator-ts";

export type WinkID = string;

export enum LoadMode {
    Preview,
    Save
}

export class ScsLoader implements vscode.TreeDataProvider<LoadedScsTreeElement> {
    loadedScs: Map<vscode.Uri, LoadedScsTreeElement> = new Map();
    scClient: ScClient;

    constructor(client: ScClient) {
        this.scClient = client;
    }


    // I don't know if this code works
    // Just tried to make scs loading faster
    // the old version of logic saved files one-by-one by separated requests
    // but it takes much more time comparing of one big request.
    // Unfortunately, the sc-machine has dummy error handling for multiple scs texts in a single request
    // Current behaviour: if one of the files has an error, sc-machine rises an exception and stops processing
    // Ideal behaviour: sc-machine should return an array of {boolean, errorText}.
    //                  In other words, it should ignore errors, but provide a rich description in response
    async loadScs(filenames: vscode.Uri[], loadMode: LoadMode = LoadMode.Preview): Promise<ScsLoadingResult[]> {
        const chunkSize = 100;
        const result: ScsLoadingResult[] = [];

        for (let i = 0; i < filenames.length; i += chunkSize) {
            const partOfFilenames = filenames.slice(i, i + chunkSize)

            const scsToLoad: { filePath: vscode.Uri, winkId: WinkID, scsText: string }[] = [];
            for (const filename of partOfFilenames) {
                const exists = this.loadedScs.has(filename);
                if (exists) await this.unloadScs([filename]);
                const doc = await vscode.workspace.openTextDocument(filename);
                if (filename.path.endsWith('.gwf')) {
                    const gwfInNewFormat: string = convertOldGwfToNew(doc.getText());
                    const resultScs = await gwfToScsAsync(gwfInNewFormat);
                    scsToLoad.push({filePath: filename, ...this.wrapScs(resultScs)})
                } else {
                    scsToLoad.push({filePath: filename, ...this.wrapScs(doc.getText())})
                }
            }

            await this.scClient.createElementsBySCs(scsToLoad.map(e => e.scsText))
                // if saved without errors -- just add all to the result
                .then(
                    (creationResults)=>{
                        for (let j = 0; j < creationResults.length; j++) {
                            const currentScsToLoad = scsToLoad[i*chunkSize+j]
                            result.push({...currentScsToLoad, errorText: ""})
                            this.loadedScs.set(currentScsToLoad.filePath, new LoadedScsTreeElement(currentScsToLoad.filePath, {
                                id: currentScsToLoad.winkId,
                                mode: loadMode,
                                text: currentScsToLoad.scsText
                            }));
                        }
                    }
                )
                .catch(
                // if we have an error in scs, then try to load all files from the current chunk one-by-one
                // not very fast, but it helps to load the whole project, even with errors
                async ()=>{
                    for (let j = 0; j < partOfFilenames.length; j++) {
                        const doc2 = await vscode.workspace.openTextDocument(partOfFilenames[j]);
                        const currentCreationResult = (await this.scClient.createElementsBySCs([doc2.getText()]))[0]
                        const currentScsToLoad = scsToLoad[i*chunkSize+j]
                        this.processLoadingResults(currentCreationResult, result, currentScsToLoad, loadMode, scsToLoad, j);
                    }
                }
            );

        }

        this.refresh();
        return result;
    }

    private processLoadingResults(currentCreationResult: boolean, result: ScsLoadingResult[], currentScsToLoad: { filePath: vscode.Uri; winkId: WinkID; scsText: string }, loadMode: LoadMode, scsToLoad: { filePath: vscode.Uri; winkId: WinkID; scsText: string }[], j: number) {
        if (currentCreationResult) {
            result.push({...currentScsToLoad, errorText: ""})
            this.loadedScs.set(currentScsToLoad.filePath, new LoadedScsTreeElement(currentScsToLoad.filePath, {
                id: currentScsToLoad.winkId,
                mode: loadMode,
                text: currentScsToLoad.scsText
            }));
        } else {
            result.push({...scsToLoad[j], errorText: `Loading failed`})
        }
    }

    private wrapScs(text: string): { winkId: WinkID; scsText: string } {
        const technicalIdtf = createTechnicalWinkId();
        const resultSCs: WinkID = technicalIdtf + " = [* " + text + " *];;";
        return {winkId: technicalIdtf, scsText: resultSCs};
    }

    async unloadScs(filenames: vscode.Uri[]): Promise<{ idtf: string, errorMsg: string }[]> {
        const result = new Array<{ idtf: string, errorMsg: string }>();
        for (const filename of filenames) {
            if (this.loadedScs.has(filename)) {
                const contourNodeIdtf = this.loadedScs.get(filename).id;
                this.loadedScs.delete(filename);
                this.refresh();
                const contourAddr = (await this.scClient.resolveKeynodes([{
                    id: contourNodeIdtf,
                    type: ScType.Node
                }]))[contourNodeIdtf];
                const foundAddrs = await this.findElementsInContour(contourAddr);
                await this.scClient.deleteElements(Array.from(foundAddrs).map(e => new ScAddr(e)));
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

    public async unloadAll(loadMode: LoadMode = LoadMode.Preview): Promise<Set<number>> {
        const allIdtfs = this.loadedScs.values();
        const foundAddrs = new Set<number>();
        for (const scsIdtf of allIdtfs) {
            if (scsIdtf.mode == loadMode) {
                const contourAddr = (await this.scClient.resolveKeynodes([{
                    id: scsIdtf.id,
                    type: ScType.Node
                }]))[scsIdtf.id];
                const temp = await this.findElementsInContour(contourAddr);
                temp.forEach(element => {
                    foundAddrs.add(element);
                });
            }
        }
        await this.scClient.deleteElements(Array.from(foundAddrs).map(e => new ScAddr(e)));
        this.loadedScs.clear();
        this.refresh();
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
            found.push(await this.scClient.templateSearch(template));
        }
        found.reduce((prev, current) => prev.concat(current))
            .forEach(triplet => triplet.forEachTriple((addr1, addr2, addr3) => {
                foundAddrs.add(addr1.value);
                foundAddrs.add(addr2.value);
                foundAddrs.add(addr3.value);
            }));
        return foundAddrs;
    }

    private _onDidChangeTreeData: vscode.EventEmitter<LoadedScsTreeElement | undefined | void> = new vscode.EventEmitter<LoadedScsTreeElement | undefined | void>();
    readonly onDidChangeTreeData: vscode.Event<LoadedScsTreeElement | undefined | void> = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: LoadedScsTreeElement): vscode.TreeItem {
        return element;
    }

    getChildren(_element?: LoadedScsTreeElement): Thenable<LoadedScsTreeElement[]> {
        let ret_value = new Array<LoadedScsTreeElement>();
        for (const i of this.loadedScs.values()) {
            ret_value.push(i);
        }
        return Promise.resolve(ret_value);
    }

}

export class LoadedScsTreeElement extends vscode.TreeItem {
    id: WinkID;
    mode: LoadMode;
    text: string;
    filename: vscode.Uri;

    constructor(filename: vscode.Uri, info: { id: WinkID, mode: LoadMode, text: string }) {
        super(filename, vscode.TreeItemCollapsibleState.None);
        this.id = info.id;
        this.mode = info.mode;
        this.filename = filename;
        this.text = info.text;
    }
}

export class ScsLoadingResult {
    constructor(
        readonly filePath: vscode.Uri,
        readonly winkId: WinkID,
        readonly errorText: string
    ) {
    }
}
