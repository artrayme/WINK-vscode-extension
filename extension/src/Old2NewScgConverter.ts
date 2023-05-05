import {DOMParser} from 'xmldom';
import {XMLSerializer} from 'xmldom';

let dictionary: Map<string, string>;
const getDictionary = () => {
    const replacementPairs = new Map();
    replacementPairs.set("node/-/not_define", "node/-/-/not_define")
        .set("node/var/symmetry", "node/var/perm/tuple")
        .set("node/const/general_node", "node/const/perm/general")
        .set("node/const/relation", "node/const/perm/relation")
        .set("node/const/attribute", "node/const/perm/role")
        .set("node/const/nopredmet", "node/const/perm/struct")
        .set("node/const/material", "node/const/perm/terminal")
        .set("node/const/asymmetry", "node/const/perm/tuple")
        .set("node/var/general_node", "node/var/perm/general")
        .set("node/var/relation", "node/var/perm/relation")
        .set("node/var/attribute", "node/var/perm/role")
        .set("node/var/nopredmet", "node/var/perm/struct")
        .set("node/var/material", "node/var/perm/terminal")
        .set("node/const/predmet", "node/const/temp/struct")
        .set("node/const/group", "node/const/perm/group")
        .set("node/var/predmet", "node/var/temp/struct")
        .set("node/var/group", "node/var/perm/group")

        .set("pair/const/synonym", "pair/const/-/perm/noorien")
        .set("pair/const/orient", "pair/const/-/perm/orient")
        .set("arc/const/fuz", "pair/const/fuz/perm/orient/membership")
        .set("arc/const/fuz/temp", "pair/const/fuz/temp/orient/membership")
        .set("arc/const/neg", "pair/const/neg/perm/orient/membership")
        .set("arc/const/neg/temp", "pair/const/neg/temp/orient/membership")
        .set("arc/const/pos", "pair/const/pos/perm/orient/membership")
        .set("arc/const/pos/temp", "pair/const/pos/temp/orient/membership")
        .set("pair/var/noorient", "pair/-/-/-/noorient")
        .set("pair/var/orient", "pair/-/-/-/orient")
        .set("arc/var/fuz", "pair/var/fuz/perm/orient/membership")
        .set("arc/var/fuz/temp", "pair/var/fuz/temp/orient/membership")
        .set("arc/var/neg", "pair/var/neg/perm/orient/membership")
        .set("arc/var/neg/temp", "pair/var/neg/temp/orient/membership")
        .set("arc/var/pos", "pair/var/-/perm/noorien")
        .set("arc/var/pos/temp", "pair/var/pos/temp/orient/membership")
        .set("pair/noorient", "pair/-/-/-/noorient")
        .set("pair/orient", "pair/-/-/-/orient")
        .set("arc/-/-", "node/var/perm/general"); //тут не нашла дуги, поэтому получилась дефолтная одиночная

    return replacementPairs;
};

const updateTags = (elem: Document) => {

    updateExistingTypesByTag(elem, "node");
    updateExistingTypesByTag(elem, "pair");
    updateExistingTypesByTag(elem, "arc");

    const contours = elem.getElementsByTagName("contour");
    for (let i = 0; i < contours.length; i++) {
        if (contours[i].getAttribute("type") === "")
            contours[i].setAttribute("type", dictionary.get(contours[i].getAttribute("type")));
    }

    const buses = elem.getElementsByTagName("bus");
    for (let i = 0; i < buses.length; i++) {
        if (contours[i].getAttribute("type") === "")
            buses[i].setAttribute("type", dictionary.get(buses[i].getAttribute("type")));
    }

};
const convertOldGwfToNew = (content: string): string => {
    dictionary = getDictionary();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content, "text/xml");
    updateTags(xmlDoc);
    return (new XMLSerializer()).serializeToString(xmlDoc);
};

const isOldGwf = (content: string): boolean => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content, "text/xml");
    const nodes = xmlDoc.getElementsByTagName("node");
    for (let i = 0; i < nodes.length; i++) {
        if (dictionary.has(nodes[i].getAttribute("type")))
            return true;
    }

    const pairs = xmlDoc.getElementsByTagName("pair");
    for (let i = 0; i < pairs.length; i++) {
        if (dictionary.has(pairs[i].getAttribute("type")))
            return true;
    }

    const arcs = xmlDoc.getElementsByTagName("arc");
    for (let i = 0; i < arcs.length; i++) {
        if (dictionary.has(arcs[i].getAttribute("type")))
            return true;
    }
    return false;
};

const updateExistingTypesByTag = (elem: Document, tag: string) => {
    const elements = elem.getElementsByTagName(tag);
    for (let i = 0; i < elements.length; i++) {
        if (dictionary.has(elements[i].getAttribute("type")))
            elements[i].setAttribute("type", dictionary.get(elements[i].getAttribute("type")));
    }
};

export {
    convertOldGwfToNew,
    isOldGwf
}

