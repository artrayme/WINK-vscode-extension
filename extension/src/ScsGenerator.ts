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
    renderConcepts,
    renderInstances,
    renderRelations,
    WikiID
} from "kb-generator-ts";

const WBK = require("wikibase-sdk");

export type ScsGeneratorResult = {
    concepts: Map<OstisID, string>,
    relations: Map<OstisID, string>,
    instances: Map<OstisID, string>
}

export const genScs = async (keywords?: Map<string, string>, wikiIds?: WikiID[]): Promise<ScsGeneratorResult> => {
    const wdk = WBK({
        instance: `https://www.wikidata.org`,
        sparqlEndpoint: `https://query.wikidata.org/sparql`
    });
    const languages: string[] = [`en`, `ru`];
    const mainCollector = new BatchEntityCollector(
        // @ts-ignore
        languages,
        wdk,
        keywords,
        wikiIds,
        1,
        1
    );

    const relationsInstanceOf = new Set<WikiID>([`P31`, `P106`, `P1855`]);
    const relationsHasInstance = new Set<WikiID>([`P5869`]);
    const relationsSubclassOf = new Set<WikiID>([`P279`]);

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
