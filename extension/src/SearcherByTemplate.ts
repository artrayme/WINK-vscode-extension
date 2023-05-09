import {ScAddr, ScClient, ScConstruction, ScType} from 'ts-sc-client-ws';
import {createTechnicalWinkId} from "./Utils";
export class SearcherByTemplate {
    scClient: ScClient;

    constructor(client: ScClient) { this.scClient = client; }

    async findByScsTemplate(scsTemplate: string): Promise<string> {
        const structWinkIdtf = createTechnicalWinkId();
        const searchingResults = await this.scClient.templateSearch(scsTemplate);
        const uniqNodes = new Set<number>();
        searchingResults.forEach(e => e.forEachTriple(n => uniqNodes.add(n.value)));

        const structNode = (await this.scClient.resolveKeynodes([{id: structWinkIdtf, type: ScType.NodeStruct}]))[0];
        const construction = new ScConstruction();

        uniqNodes.forEach(node => {
            construction.createEdge(
                ScType.EdgeAccessConstPosPerm,
                structNode,
                new ScAddr(node)
            );
        });

        await this.scClient.createElements(construction);
        return structWinkIdtf;
    }
}
