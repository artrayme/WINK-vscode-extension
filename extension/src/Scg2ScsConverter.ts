import {DOMParser} from 'xmldom';

let pairDictionary: Map<any, any>;
let temporaryNames: Map<any, any>;
let xmlDoc: Document;
let nodeCounter = 0;
let contoursAndPairs: Map<any, any>;
let contourCounter = 0;

interface ElementInfo {
    idToFind: string;
    foundEl: Element;
    type: string;
    isBegin: boolean;
}

export function convertGwfToScs(content: string){
    const parser = new DOMParser();
    xmlDoc = parser.parseFromString(content, "text/xml");
    // const childNode = xmlDoc.childNodes[0];

    pairDictionary = getPairDictionary();
    temporaryNames = new Map();
    contoursAndPairs = new Map();
    getTempNames(xmlDoc.documentElement.childNodes.item(1) as Element);
    getContoursChildren(xmlDoc.documentElement);

    const translatedDoc = {
        statement: ""
    };
    getChildren(xmlDoc.documentElement, translatedDoc);
    return translatedDoc.statement;
}


function getTempNames(elem: Element) {

    for (const i in elem.childNodes) {
        if ((elem.childNodes[i] as Element).nodeType === 1) {

            if (((elem.childNodes[i] as Element) as Element).hasAttribute("type")) {
                if ((elem.childNodes[i] as Element).tagName === "node" && (elem.childNodes[i] as Element).getAttribute("idtf") === "") {

                    temporaryNames.set((elem.childNodes[i] as Element).getAttribute("id"), "temp_sc_node"+nodeCounter);
                    nodeCounter += 1;

                } else if ((elem.childNodes[i] as Element).tagName === "contour" && (elem.childNodes[i] as Element).getAttribute("idtf") === "") {

                    temporaryNames.set((elem.childNodes[i] as Element).getAttribute("id"), "temp_contour"+contourCounter);
                    contourCounter += 1;

                }
            }

            getTempNames((elem.childNodes[i] as Element));
        }
    }
}

interface ScgElementsList {
    contourChildren: Element[];
}

function getContoursChildren(elem: Element) {

    for (const i in elem.childNodes) {
        if ((elem.childNodes[i] as Element).nodeType === 1) {
            //если дуга, то проверяем идет она в дугу или в узел
            if ((elem.childNodes[i] as Element).tagName === "contour") {

                const list: ScgElementsList = {
                    contourChildren: []
                };

                //находим все элементы, входящие в контур и записываем в выражение LIST
                findAllChildren(xmlDoc.documentElement, (elem.childNodes[i] as Element).getAttribute("id"), list);

                const contourName = (elem.childNodes[i] as Element).getAttribute("idtf") === "" ?
                    temporaryNames.get((elem.childNodes[i] as Element).getAttribute("id")) :
                    (elem.childNodes[i] as Element).getAttribute("idtf");

                for (const pair in list.contourChildren) {
                    contoursAndPairs.set(list.contourChildren[pair].getAttribute("id"), contourName);
                }
            }

            getContoursChildren((elem.childNodes[i] as Element));
        }
    }
}

interface Statement {
    firstEl:  Statement | string ;
    pair:  string;
    secondEl: Statement | string;
    isInContour: boolean;
}

function getChildren(elem: Element, translatedDoc: { statement: any; }) {

    for (const i in elem.childNodes) {
        if ((elem.childNodes[i] as Element).nodeType === 1) {
            //если дуга, то проверяем идет она в дугу или в узел
            if ((elem.childNodes[i] as Element).tagName === "arc" || (elem.childNodes[i] as Element).tagName === "pair") {
                const statement: Statement = {
                    firstEl: null, //элемент от которого идет дуга
                    pair: null, //дуга
                    secondEl: null, //элемент к которому идет дуга
                    isInContour: false
                };
                createStatement ((elem.childNodes[i] as Element), statement);

                const st = getTranslated(statement, false);
                if (statement.isInContour) {
                    translatedDoc.statement += contoursAndPairs.get((elem.childNodes[i] as Element).getAttribute("id")) +
                        " = [*\n\t";
                }
                translatedDoc.statement += st;
                if (statement.isInContour) {
                    translatedDoc.statement += "*];;\n";
                }
            }

            getChildren((elem.childNodes[i] as Element), translatedDoc);
        }
    }
}

//флаг, говорит о том вложенное ли выражение, если вложенное ;;\n будут отсутствовать
function getTranslated (statement: Statement , isInside: boolean) {
    let subStatement;
    let resultStatement = "";
    const isTranslated = false; //флаг, говорящий о том, что вторая дуга уже была переведена

    if (isInside) {
        resultStatement += "(";
    }

    if (statement.firstEl !== null && typeof (statement.firstEl) === "object") {

        subStatement = getTranslated(statement.firstEl, true);
        resultStatement += subStatement + " " + statement.pair + " ";

    } else {
        resultStatement += statement.firstEl+" "+statement.pair+" ";
    }

    if (statement.secondEl !== null && typeof (statement.secondEl) === "object") {

        subStatement = getTranslated (statement.secondEl, true);
        resultStatement += subStatement;

    } else if (!isTranslated){
        resultStatement += statement.secondEl;
    }
    if (!isInside) {
        resultStatement += ";;\n";
    } else {
        resultStatement += ")";
    }
    return resultStatement;
}



//для каждой найденной дуги будет определяться свое выражение
function createStatement (elem:Element, statement: Statement) {
    const begElementInfo: ElementInfo = {
        idToFind: elem.getAttribute("id_b"),  //идентификатор по которому будем искать начальный элемент
        foundEl: null, //элемент, который найдется
        type: null, //тип элемента (узел, дуга, шина, контур)
        isBegin: true //флаг, определяющий: элемент начальный или конечный
    };

    statement.pair = pairDictionary.get(elem.getAttribute("type"));
    if (elem.getAttribute("parent") !== "0") {
        statement.isInContour = true;
    }

    const endElementInfo: ElementInfo = {
        idToFind: elem.getAttribute("id_e"),  //идентификатор по которому будем искать конечный элемент
        foundEl: null, //элемент, который найдется
        type: null, //тип элемента (узел, дуга, шина, контур)
        isBegin: false //флаг, определяющий: элемент начальный или конечный
    };

    //находим элементы
    findElement(xmlDoc.documentElement, begElementInfo);
    findElement(xmlDoc.documentElement, endElementInfo);

    //определяем тип элементов, которые уже нашли
    defineElementType (begElementInfo);
    defineElementType (endElementInfo);

    //заполняем statement
    defineStatement(begElementInfo, statement);
    defineStatement(endElementInfo, statement);

}


function defineStatement (elementInfo: ElementInfo, statement: Statement) {
    switch (elementInfo.type) {
        case "node": { //если узел, то в statement идет аттрибут "idtf" или _ (в случае пустого идентификатора)

            const attributeIdtf = elementInfo.foundEl.getAttribute('idtf');

            if (elementInfo.isBegin) {
                if (attributeIdtf !== '') {
                    statement.firstEl = attributeIdtf;
                } else {
                    statement.firstEl = temporaryNames.get(elementInfo.foundEl.getAttribute('id'));
                }

            } else {
                if (attributeIdtf !== '') {
                    statement.secondEl = attributeIdtf;
                } else {
                    statement.secondEl = temporaryNames.get(elementInfo.foundEl.getAttribute('id'));
                }
            }
            break;
        }
        case 'file': {//если файл, то в statement идет аттрибут "file_name" дочернего узла номер 1

            const attributeFileName = (elementInfo.foundEl.childNodes[1] as Element).getAttribute("file_name");

            if (elementInfo.isBegin) {
                statement.firstEl = attributeFileName !== '' ? "\"file://" + attributeFileName + "\"" : "\"file://\"";
            } else {
                statement.secondEl = attributeFileName !== '' ? "\"file://" + attributeFileName + "\"" : "\"file://\"";
            }

            break;
        }
        case 'link': {// если ссылка, то в statement идет ИНФОРМАЦИЯ второго подузла <node...<content...<![CDATA[ИНФОРМАЦИЯ]]>>>
            const attributeIdtf = elementInfo.foundEl.getAttribute('idtf');

            if (elementInfo.isBegin) {
                if (attributeIdtf !== '') {
                    statement.firstEl = attributeIdtf;
                } else {
                    statement.firstEl = temporaryNames.get(elementInfo.foundEl.getAttribute('id'));
                }
            } else {
                if (attributeIdtf !== '') {
                    statement.secondEl = attributeIdtf;
                } else {
                    statement.secondEl = temporaryNames.get(elementInfo.foundEl.getAttribute('id'));
                }
            }

            break;
        }
        case 'pair':{ //если pair, то рекурсивно вызываем

            const statementInside: Statement = {
                firstEl: null, //элемент от которого идет дуга
                pair: null, //дуга
                secondEl: null, //элемент к которому идет дуга
                isInContour: false
            };

            createStatement(elementInfo.foundEl, statementInside); //заполняем вложенную тройку значениями

            if (elementInfo.isBegin) {
                statement.firstEl = statementInside;
            } else {
                statement.secondEl = statementInside;
            }

            break;
        }

        case 'bus': { //если bus, то ищем узел-хозяина шины по всему документу и записываем, как при обычном узле аттрибут "idtf"

            const busOwner: ElementInfo = {
                idToFind: elementInfo.foundEl.getAttribute("owner"),  //идентификатор хозяина по которому будем искать элемент
                foundEl: null, //элемент, который найдется
                isBegin: null,
                type: null
            };

            findElement(xmlDoc.documentElement, busOwner);

            const attributeIdtf = busOwner.foundEl.getAttribute('idtf');

            if (elementInfo.isBegin) {
                if (attributeIdtf !== '') {
                    statement.firstEl = attributeIdtf;
                } else {
                    statement.firstEl = temporaryNames.get(busOwner.foundEl.getAttribute('id'));
                }

            } else {
                if (attributeIdtf !== '') {
                    statement.secondEl = attributeIdtf;
                } else {
                    statement.secondEl = temporaryNames.get(busOwner.foundEl.getAttribute('id'));
                }

            }
            break;
        }
        case 'contour': { //поиск всех узлов, чей parent = id контура (списком)

            const attributeIdtf = elementInfo.foundEl.getAttribute('idtf');

            if (elementInfo.isBegin) {
                if (attributeIdtf !== '') {
                    statement.firstEl = attributeIdtf;
                } else {
                    statement.firstEl = temporaryNames.get(elementInfo.foundEl.getAttribute('id'));
                }

            } else {
                if (attributeIdtf !== '') {
                    statement.secondEl = attributeIdtf;
                } else {
                    statement.secondEl = temporaryNames.get(elementInfo.foundEl.getAttribute('id'));
                }
            }

            break;
        }
        default:
        // do nothing
    }
}

function findAllChildren (elem: Element, id: string, list: ScgElementsList) {
    for (const i in elem.childNodes) {
        if ((elem.childNodes[i] as Element).nodeType === 1) {
            if ((elem.childNodes[i] as Element).getAttribute("parent") === id &&
                ((elem.childNodes[i] as Element).tagName === "pair" || (elem.childNodes[i] as Element).tagName === "arc")) {
                list.contourChildren.push((elem.childNodes[i] as Element));
            }
        }

        findAllChildren((elem.childNodes[i] as Element), id, list);
    }
}

//функция определения типа элемента, по нему также можно понять, какие элементы обрабатываются на данный момент
function defineElementType (element: ElementInfo) {
    if (element.foundEl.tagName === "node") {
        if ((element.foundEl.childNodes[1] as Element).getAttribute("mime_type") === "image/jpg" ||
            (element.foundEl.childNodes[1] as Element).getAttribute("mime_type") === "image/png") {

            element.type = "file";

        } else if ((element.foundEl.childNodes[1] as Element).getAttribute("mime_type") === "content/term") {
            element.type = "link";

        } else {
            element.type = "node";

        }

    } else if (element.foundEl.tagName === "pair") {
        element.type = "pair";

    } else if (element.foundEl.tagName === "bus") {
        element.type = "bus";

    } else if (element.foundEl.tagName === "contour") {
        element.type = "contour";

    }
}

//функция поиска элемента по идентификатору
function findElement(elem: Element, elementInfo: ElementInfo) {
    for (const i in elem.childNodes) {
        if ((elem.childNodes[i] as Element).nodeType === 1) {
            if ((elem.childNodes[i] as Element).getAttribute("id") === elementInfo.idToFind) {
                elementInfo.foundEl = (elem.childNodes[i] as Element);
            }
        }

        findElement((elem.childNodes[i] as Element), elementInfo);
    }
}


function getPairDictionary() {
    const replacementPairs = new Map();
    replacementPairs.set("pair/const/-/perm/noorien", "<=>")
        .set("pair/const/-/perm/orient", "=>")
        .set("pair/const/fuz/perm/orient/membership", "-/>")
        .set("pair/const/fuz/temp/orient/membership", "~/>")
        .set("pair/var/pos/perm/orient/membership", "_->")
        .set("pair/var/neg/temp/orient/membership", "_~|>")
        .set("pair/var/neg/perm/orient/membership", "_-|>")
        .set("pair/const/pos/perm/orient/membership", "->")
        .set("pair/const/pos/temp/orient/membership", "~>")
        .set("pair/var/fuz/temp/orient/membership", "_~/>")
        .set("pair/var/fuz/perm/orient/membership", "_-/>")
        .set("pair/const/neg/perm/orient/membership", "-|>") //а еще 7я это ..>
        .set("pair/const/neg/temp/orient/membership", "~|>")
        .set("pair/var/pos/temp/orient/membership", "_~>")
        .set("pair/-/-/-/noorient", "<>")
        .set("pair/-/-/-/orient", ">")//тут все дуги, кроме двух _<=> и _=>

        //тут установим дуги, которые по сути не переводятся, но они зачем-то существуют
        .set("pair/meta/pos/temp/orient/membership", "->")
        .set("pair/meta/pos/perm/orient/membership", "->")
        .set("pair/meta/neg/temp/orient/membership", "->")
        .set("pair/meta/neg/perm/orient/membership", "->")
        .set("pair/meta/fuz/temp/orient/membership", "->")
        .set("pair/meta/fuz/perm/orient/membership", "->")
        .set("pair/meta/-/temp/orient", "->")
        .set("pair/meta/-/temp/noorien", "->")
        .set("pair/meta/-/perm/orient", "->")
        .set("pair/meta/-/perm/noorien", "->")
        .set("pair/var/-/temp/orient", "->")
        .set("pair/var/-/temp/noorien", "->")
        .set("pair/var/-/perm/orient", "->")
        .set("pair/var/-/perm/noorien", "->")
        .set("pair/const/-/temp/orient", "->")
        .set("pair/const/-/temp/noorien", "->");
    return replacementPairs;
}
