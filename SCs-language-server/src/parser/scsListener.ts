// Generated from ./src/syntax/scs.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ContentContext } from "./scsParser";
import { ContourContext } from "./scsParser";
import { SyntaxContext } from "./scsParser";
import { Sentence_wrapContext } from "./scsParser";
import { SentenceContext } from "./scsParser";
import { Sentence_assignContext } from "./scsParser";
import { Idtf_lvl1_preffixContext } from "./scsParser";
import { Idtf_lvl1_valueContext } from "./scsParser";
import { Idtf_lvl1Context } from "./scsParser";
import { Idtf_systemContext } from "./scsParser";
import { Idtf_edgeContext } from "./scsParser";
import { Idtf_setContext } from "./scsParser";
import { Idtf_commonContext } from "./scsParser";
import { Idtf_listContext } from "./scsParser";
import { Internal_sentenceContext } from "./scsParser";
import { Internal_sentence_listContext } from "./scsParser";
import { Sentence_lvl1Context } from "./scsParser";
import { Sentence_lvl_commonContext } from "./scsParser";
import { Attr_listContext } from "./scsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `scsParser`.
 */
export interface scsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `scsParser.content`.
	 * @param ctx the parse tree
	 */
	enterContent?: (ctx: ContentContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.content`.
	 * @param ctx the parse tree
	 */
	exitContent?: (ctx: ContentContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.contour`.
	 * @param ctx the parse tree
	 */
	enterContour?: (ctx: ContourContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.contour`.
	 * @param ctx the parse tree
	 */
	exitContour?: (ctx: ContourContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.syntax`.
	 * @param ctx the parse tree
	 */
	enterSyntax?: (ctx: SyntaxContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.syntax`.
	 * @param ctx the parse tree
	 */
	exitSyntax?: (ctx: SyntaxContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.sentence_wrap`.
	 * @param ctx the parse tree
	 */
	enterSentence_wrap?: (ctx: Sentence_wrapContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.sentence_wrap`.
	 * @param ctx the parse tree
	 */
	exitSentence_wrap?: (ctx: Sentence_wrapContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.sentence`.
	 * @param ctx the parse tree
	 */
	enterSentence?: (ctx: SentenceContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.sentence`.
	 * @param ctx the parse tree
	 */
	exitSentence?: (ctx: SentenceContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.sentence_assign`.
	 * @param ctx the parse tree
	 */
	enterSentence_assign?: (ctx: Sentence_assignContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.sentence_assign`.
	 * @param ctx the parse tree
	 */
	exitSentence_assign?: (ctx: Sentence_assignContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.idtf_lvl1_preffix`.
	 * @param ctx the parse tree
	 */
	enterIdtf_lvl1_preffix?: (ctx: Idtf_lvl1_preffixContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.idtf_lvl1_preffix`.
	 * @param ctx the parse tree
	 */
	exitIdtf_lvl1_preffix?: (ctx: Idtf_lvl1_preffixContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.idtf_lvl1_value`.
	 * @param ctx the parse tree
	 */
	enterIdtf_lvl1_value?: (ctx: Idtf_lvl1_valueContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.idtf_lvl1_value`.
	 * @param ctx the parse tree
	 */
	exitIdtf_lvl1_value?: (ctx: Idtf_lvl1_valueContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.idtf_lvl1`.
	 * @param ctx the parse tree
	 */
	enterIdtf_lvl1?: (ctx: Idtf_lvl1Context) => void;
	/**
	 * Exit a parse tree produced by `scsParser.idtf_lvl1`.
	 * @param ctx the parse tree
	 */
	exitIdtf_lvl1?: (ctx: Idtf_lvl1Context) => void;

	/**
	 * Enter a parse tree produced by `scsParser.idtf_system`.
	 * @param ctx the parse tree
	 */
	enterIdtf_system?: (ctx: Idtf_systemContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.idtf_system`.
	 * @param ctx the parse tree
	 */
	exitIdtf_system?: (ctx: Idtf_systemContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.idtf_edge`.
	 * @param ctx the parse tree
	 */
	enterIdtf_edge?: (ctx: Idtf_edgeContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.idtf_edge`.
	 * @param ctx the parse tree
	 */
	exitIdtf_edge?: (ctx: Idtf_edgeContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.idtf_set`.
	 * @param ctx the parse tree
	 */
	enterIdtf_set?: (ctx: Idtf_setContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.idtf_set`.
	 * @param ctx the parse tree
	 */
	exitIdtf_set?: (ctx: Idtf_setContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.idtf_common`.
	 * @param ctx the parse tree
	 */
	enterIdtf_common?: (ctx: Idtf_commonContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.idtf_common`.
	 * @param ctx the parse tree
	 */
	exitIdtf_common?: (ctx: Idtf_commonContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.idtf_list`.
	 * @param ctx the parse tree
	 */
	enterIdtf_list?: (ctx: Idtf_listContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.idtf_list`.
	 * @param ctx the parse tree
	 */
	exitIdtf_list?: (ctx: Idtf_listContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.internal_sentence`.
	 * @param ctx the parse tree
	 */
	enterInternal_sentence?: (ctx: Internal_sentenceContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.internal_sentence`.
	 * @param ctx the parse tree
	 */
	exitInternal_sentence?: (ctx: Internal_sentenceContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.internal_sentence_list`.
	 * @param ctx the parse tree
	 */
	enterInternal_sentence_list?: (ctx: Internal_sentence_listContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.internal_sentence_list`.
	 * @param ctx the parse tree
	 */
	exitInternal_sentence_list?: (ctx: Internal_sentence_listContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.sentence_lvl1`.
	 * @param ctx the parse tree
	 */
	enterSentence_lvl1?: (ctx: Sentence_lvl1Context) => void;
	/**
	 * Exit a parse tree produced by `scsParser.sentence_lvl1`.
	 * @param ctx the parse tree
	 */
	exitSentence_lvl1?: (ctx: Sentence_lvl1Context) => void;

	/**
	 * Enter a parse tree produced by `scsParser.sentence_lvl_common`.
	 * @param ctx the parse tree
	 */
	enterSentence_lvl_common?: (ctx: Sentence_lvl_commonContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.sentence_lvl_common`.
	 * @param ctx the parse tree
	 */
	exitSentence_lvl_common?: (ctx: Sentence_lvl_commonContext) => void;

	/**
	 * Enter a parse tree produced by `scsParser.attr_list`.
	 * @param ctx the parse tree
	 */
	enterAttr_list?: (ctx: Attr_listContext) => void;
	/**
	 * Exit a parse tree produced by `scsParser.attr_list`.
	 * @param ctx the parse tree
	 */
	exitAttr_list?: (ctx: Attr_listContext) => void;
}

