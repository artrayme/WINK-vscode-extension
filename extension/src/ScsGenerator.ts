import { WBK } from "wikibase-sdk/dist/./wikibase-sdk";

import { OstisID, WikiID } from "kb-generator-ts/build/esm/wikidata/model/contanerTypes"
import { BatchEntityCollector } from "kb-generator-ts/build/esm/wikidata/pipeline/wikilayer/BatchEntityCollector"
import { InstancesFromConcepts } from "kb-generator-ts/build/esm/wikidata/pipeline/wikilayer/InstancesFromConcepts"
import { EntityDataCollector } from "kb-generator-ts/build/esm/wikidata/pipeline/wikilayer/EntityDataCollector"
import { DeleteEntitiesWithoutLabels } from "kb-generator-ts/build/esm/wikidata/pipeline/wikilayer/DeleteEntitiesWithoutLabels"
import { DeleteEntitiesWithoutTitle } from "kb-generator-ts/build/esm/wikidata/pipeline/wikilayer/DeleteEntitiesWithoutTitle"
import { FillMappingInfo } from "kb-generator-ts/build/esm/wikidata/pipeline/ostislayer/FillMappingInfo"
import { DeleteOstisIdDuplicates } from "kb-generator-ts/build/esm/wikidata/pipeline/ostislayer/DeleteOstisIdDuplicates"
import { DeleteEntitiesWithInvalidOstisIdtf } from "kb-generator-ts/build/esm/wikidata/pipeline/ostislayer/DeleteEntitiesWithInvalidOstisIdtf"
import { MapWikiToOstisRelationNames } from "kb-generator-ts/build/esm/wikidata/pipeline/ostislayer/MapWikiToOstisRelationNames"
import { ClearIllegalCharactersFromDescription } from "kb-generator-ts/build/esm/wikidata/pipeline/ostislayer/ClearIllegalCharactersFromDescription"

import { renderConcepts, renderRelations, renderInstances } from "kb-generator-ts/build/esm/scs-templates/ScsTemplateEngine"

export type ScsGeneratorResult = {
    concepts: Map<OstisID, string>,
    relations: Map<OstisID, string>,
    instances: Map<OstisID, string>
}

export const genScs = async (keywords?: Map<string, string>, wikiIds?: WikiID[]):Promise<ScsGeneratorResult>=>{
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