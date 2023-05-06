import {
    BatchEntityCollector,
    ClearIllegalCharactersFromDescription,
    DeleteEntitiesWithInvalidOstisIdtf,
    DeleteEntitiesWithoutLabels,
    DeleteEntitiesWithoutTitle,
    DeleteOstisIdDuplicates,
    EntityDataCollector,
    FillMappingInfo,
    InstancesFromConcepts,
    MapWikiToOstisRelationNames,
    OstisID,
    SemanticID,
    renderConcepts,
    renderInstances,
    renderRelations, PipelineInit,
} from "kb-generator-ts";
import vscode from "vscode";

const WBK = require("wikibase-sdk");

export type ScsGeneratorResult = {
    concepts: Map<OstisID, string>,
    relations: Map<OstisID, string>,
    instances: Map<OstisID, string>
}

export const genScs = async (keywords?: Map<string, string>, SemanticIDs?: SemanticID[]): Promise<ScsGeneratorResult> => {
    const wdk = WBK({
        instance: `https://www.wikidata.org`,
        sparqlEndpoint: `https://query.wikidata.org/sparql`
    });
    const languages: string[] = [`en`, `ru`];
    const mainCollector = new BatchEntityCollector(
        new PipelineInit(),
        languages,
        wdk,
        keywords,
        SemanticIDs,
        1,
        1
    );

    const relationsInstanceOf = new Set<SemanticID>([`P31`, `P106`, `P1855`]);
    const relationsHasInstance = new Set<SemanticID>([`P5869`]);
    const relationsSubclassOf = new Set<SemanticID>([`P279`]);

    const pipeline = new ClearIllegalCharactersFromDescription(
        new MapWikiToOstisRelationNames(
            new DeleteEntitiesWithInvalidOstisIdtf(
                new DeleteOstisIdDuplicates(
                    new FillMappingInfo(
                        new DeleteEntitiesWithoutTitle(
                            new DeleteEntitiesWithoutLabels(
                                new EntityDataCollector(
                                    new InstancesFromConcepts(
                                        mainCollector,
                                        relationsInstanceOf,
                                        relationsHasInstance,
                                        relationsSubclassOf
                                    ),
                                    wdk,
                                    // @ts-ignore
                                    languages
                                )
                            )
                        )
                    )
                )
            ),
            new Map([
                [`P527`, `nrel_basic_decomposition`],
                [`P1552`, `nrel_inclusion`]
            ])
        )
    );
    const resultContainer = await pipeline.execute();


    const concepts = renderConcepts(resultContainer);
    const relations = renderRelations(resultContainer);
    const instances = renderInstances(resultContainer);
    return {concepts: concepts, relations: relations, instances: instances};
}

export const saveGeneratedBase = async (generationResults: ScsGeneratorResult, wsPath: string, wsEdit: vscode.WorkspaceEdit) => {
    const conceptsFolder = (wsPath + '/concepts/');
    const relationsFolder = (wsPath + '/relations/');
    const instancesFolder = (wsPath + '/instances/');

    for (const [filename, scs] of generationResults.concepts) {
        const fullFileUri = vscode.Uri.file(conceptsFolder + filename + '.scs')
        wsEdit.createFile(fullFileUri, {ignoreIfExists: true});
        const writeData = Buffer.from(scs, 'utf8');
        await vscode.workspace.fs.writeFile(fullFileUri, writeData);
    }

    for (const [filename, scs] of generationResults.relations) {
        const fullFileUri = vscode.Uri.file(relationsFolder + filename + '.scs')
        wsEdit.createFile(fullFileUri, {ignoreIfExists: true});
        const writeData = Buffer.from(scs, 'utf8');
        await vscode.workspace.fs.writeFile(fullFileUri, writeData);
    }

    for (const [filename, scs] of generationResults.instances) {
        const fullFileUri = vscode.Uri.file(instancesFolder + filename + '.scs')
        wsEdit.createFile(fullFileUri, {ignoreIfExists: true});
        const writeData = Buffer.from(scs, 'utf8');
        await vscode.workspace.fs.writeFile(fullFileUri, writeData);
    }
    vscode.workspace.applyEdit(wsEdit);

}
