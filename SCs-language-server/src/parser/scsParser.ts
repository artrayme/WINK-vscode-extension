// Generated from ./src/syntax/scs.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { scsListener } from "./scsListener";

export class scsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly ID_SYSTEM = 24;
	public static readonly LINK = 25;
	public static readonly CONNECTOR = 26;
	public static readonly EDGE_ATTR = 27;
	public static readonly LINE_TERMINATOR = 28;
	public static readonly LINE_COMMENT = 29;
	public static readonly MULTINE_COMMENT = 30;
	public static readonly WS = 31;
	public static readonly RULE_content = 0;
	public static readonly RULE_contour = 1;
	public static readonly RULE_syntax = 2;
	public static readonly RULE_sentence_wrap = 3;
	public static readonly RULE_sentence = 4;
	public static readonly RULE_sentence_assign = 5;
	public static readonly RULE_idtf_lvl1_preffix = 6;
	public static readonly RULE_idtf_lvl1_value = 7;
	public static readonly RULE_idtf_lvl1 = 8;
	public static readonly RULE_idtf_system = 9;
	public static readonly RULE_idtf_edge = 10;
	public static readonly RULE_idtf_set = 11;
	public static readonly RULE_idtf_common = 12;
	public static readonly RULE_idtf_list = 13;
	public static readonly RULE_internal_sentence = 14;
	public static readonly RULE_internal_sentence_list = 15;
	public static readonly RULE_sentence_lvl1 = 16;
	public static readonly RULE_sentence_lvl_common = 17;
	public static readonly RULE_attr_list = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"content", "contour", "syntax", "sentence_wrap", "sentence", "sentence_assign", 
		"idtf_lvl1_preffix", "idtf_lvl1_value", "idtf_lvl1", "idtf_system", "idtf_edge", 
		"idtf_set", "idtf_common", "idtf_list", "internal_sentence", "internal_sentence_list", 
		"sentence_lvl1", "sentence_lvl_common", "attr_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'_'", "'['", "']'", "'[*'", "'*]'", "';;'", "'='", "'sc_node'", 
		"'sc_link'", "'sc_edge_dcommon'", "'sc_edge_ucommon'", "'sc_edge_main'", 
		"'sc_edge_access'", "'#'", "'...'", "'('", "')'", "'{'", "';'", "'}'", 
		"'(*'", "'*)'", "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "ID_SYSTEM", "LINK", "CONNECTOR", "EDGE_ATTR", 
		"LINE_TERMINATOR", "LINE_COMMENT", "MULTINE_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(scsParser._LITERAL_NAMES, scsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return scsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "scs.g4"; }

	// @Override
	public get ruleNames(): string[] { return scsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return scsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(scsParser._ATN, this);
	}
	// @RuleVersion(0)
	public content(): ContentContext {
		let _localctx: ContentContext = new ContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, scsParser.RULE_content);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === scsParser.T__0) {
				{
				this.state = 38;
				this.match(scsParser.T__0);
				}
			}

			this.state = 41;
			_localctx._r = this.match(scsParser.T__1);
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 45;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case scsParser.T__0:
					case scsParser.T__3:
					case scsParser.T__4:
					case scsParser.T__5:
					case scsParser.T__6:
					case scsParser.T__7:
					case scsParser.T__8:
					case scsParser.T__9:
					case scsParser.T__10:
					case scsParser.T__11:
					case scsParser.T__12:
					case scsParser.T__13:
					case scsParser.T__14:
					case scsParser.T__15:
					case scsParser.T__16:
					case scsParser.T__17:
					case scsParser.T__18:
					case scsParser.T__19:
					case scsParser.T__20:
					case scsParser.T__21:
					case scsParser.T__22:
					case scsParser.ID_SYSTEM:
					case scsParser.LINK:
					case scsParser.CONNECTOR:
					case scsParser.EDGE_ATTR:
					case scsParser.LINE_TERMINATOR:
					case scsParser.LINE_COMMENT:
					case scsParser.MULTINE_COMMENT:
					case scsParser.WS:
						{
						this.state = 42;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === scsParser.T__1 || _la === scsParser.T__2)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					case scsParser.T__1:
						{
						this.state = 43;
						this.match(scsParser.T__1);
						}
						break;
					case scsParser.T__2:
						{
						this.state = 44;
						this.match(scsParser.T__2);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contour(): ContourContext {
		let _localctx: ContourContext = new ContourContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, scsParser.RULE_contour);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === scsParser.T__0) {
				{
				this.state = 52;
				this.match(scsParser.T__0);
				}
			}

			this.state = 55;
			_localctx._b = this.match(scsParser.T__3);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << scsParser.T__0) | (1 << scsParser.T__1) | (1 << scsParser.T__3) | (1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12) | (1 << scsParser.T__14) | (1 << scsParser.T__15) | (1 << scsParser.T__17) | (1 << scsParser.ID_SYSTEM) | (1 << scsParser.LINK))) !== 0)) {
				{
				{
				this.state = 56;
				this.sentence_wrap();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			_localctx._e = this.match(scsParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syntax(): SyntaxContext {
		let _localctx: SyntaxContext = new SyntaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, scsParser.RULE_syntax);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << scsParser.T__0) | (1 << scsParser.T__1) | (1 << scsParser.T__3) | (1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12) | (1 << scsParser.T__14) | (1 << scsParser.T__15) | (1 << scsParser.T__17) | (1 << scsParser.ID_SYSTEM) | (1 << scsParser.LINK))) !== 0)) {
				{
				{
				this.state = 64;
				this.sentence_wrap();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_wrap(): Sentence_wrapContext {
		let _localctx: Sentence_wrapContext = new Sentence_wrapContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, scsParser.RULE_sentence_wrap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 70;
			this.sentence();
			this.state = 71;
			this.match(scsParser.T__5);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence(): SentenceContext {
		let _localctx: SentenceContext = new SentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, scsParser.RULE_sentence);
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.sentence_lvl1();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.sentence_lvl_common();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 75;
				this.sentence_assign();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_assign(): Sentence_assignContext {
		let _localctx: Sentence_assignContext = new Sentence_assignContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, scsParser.RULE_sentence_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(scsParser.ID_SYSTEM);
			this.state = 79;
			this.match(scsParser.T__6);
			this.state = 80;
			this.idtf_common();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_lvl1_preffix(): Idtf_lvl1_preffixContext {
		let _localctx: Idtf_lvl1_preffixContext = new Idtf_lvl1_preffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, scsParser.RULE_idtf_lvl1_preffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_lvl1_value(): Idtf_lvl1_valueContext {
		let _localctx: Idtf_lvl1_valueContext = new Idtf_lvl1_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, scsParser.RULE_idtf_lvl1_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12))) !== 0)) {
				{
				this.state = 84;
				this.idtf_lvl1_preffix();
				this.state = 85;
				this.match(scsParser.T__13);
				}
			}

			this.state = 89;
			this.idtf_system();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_lvl1(): Idtf_lvl1Context {
		let _localctx: Idtf_lvl1Context = new Idtf_lvl1Context(this._ctx, this.state);
		this.enterRule(_localctx, 16, scsParser.RULE_idtf_lvl1);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case scsParser.T__7:
			case scsParser.T__8:
			case scsParser.T__9:
			case scsParser.T__10:
			case scsParser.T__11:
			case scsParser.T__12:
			case scsParser.T__14:
			case scsParser.ID_SYSTEM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.idtf_lvl1_value();
				}
				break;
			case scsParser.LINK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.match(scsParser.LINK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_system(): Idtf_systemContext {
		let _localctx: Idtf_systemContext = new Idtf_systemContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, scsParser.RULE_idtf_system);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			_la = this._input.LA(1);
			if (!(_la === scsParser.T__14 || _la === scsParser.ID_SYSTEM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_edge(): Idtf_edgeContext {
		let _localctx: Idtf_edgeContext = new Idtf_edgeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, scsParser.RULE_idtf_edge);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(scsParser.T__15);
			this.state = 98;
			this.idtf_system();
			this.state = 99;
			this.match(scsParser.CONNECTOR);
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 100;
				this.attr_list();
				}
				break;
			}
			this.state = 103;
			this.idtf_system();
			this.state = 104;
			this.match(scsParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_set(): Idtf_setContext {
		let _localctx: Idtf_setContext = new Idtf_setContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, scsParser.RULE_idtf_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(scsParser.T__17);
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 107;
				this.attr_list();
				}
				break;
			}
			this.state = 110;
			this.idtf_common();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === scsParser.T__18) {
				{
				{
				this.state = 111;
				this.match(scsParser.T__18);
				this.state = 113;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 112;
					this.attr_list();
					}
					break;
				}
				this.state = 115;
				this.idtf_common();
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 121;
			this.match(scsParser.T__19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_common(): Idtf_commonContext {
		let _localctx: Idtf_commonContext = new Idtf_commonContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, scsParser.RULE_idtf_common);
		try {
			this.state = 129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 123;
				this.idtf_system();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 124;
				this.idtf_edge();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 125;
				this.idtf_set();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 126;
				this.contour();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 127;
				this.content();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 128;
				this.match(scsParser.LINK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idtf_list(): Idtf_listContext {
		let _localctx: Idtf_listContext = new Idtf_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, scsParser.RULE_idtf_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.idtf_common();
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === scsParser.T__20) {
				{
				this.state = 132;
				this.internal_sentence_list();
				}
			}

			this.state = 142;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 135;
					this.match(scsParser.T__18);
					this.state = 136;
					this.idtf_common();
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === scsParser.T__20) {
						{
						this.state = 137;
						this.internal_sentence_list();
						}
					}

					}
					}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public internal_sentence(): Internal_sentenceContext {
		let _localctx: Internal_sentenceContext = new Internal_sentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, scsParser.RULE_internal_sentence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(scsParser.CONNECTOR);
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 146;
				this.attr_list();
				}
				break;
			}
			this.state = 149;
			this.idtf_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public internal_sentence_list(): Internal_sentence_listContext {
		let _localctx: Internal_sentence_listContext = new Internal_sentence_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, scsParser.RULE_internal_sentence_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(scsParser.T__20);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 152;
				this.internal_sentence();
				this.state = 153;
				this.match(scsParser.T__5);
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === scsParser.CONNECTOR);
			this.state = 159;
			this.match(scsParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_lvl1(): Sentence_lvl1Context {
		let _localctx: Sentence_lvl1Context = new Sentence_lvl1Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, scsParser.RULE_sentence_lvl1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.idtf_lvl1();
			this.state = 162;
			this.match(scsParser.T__22);
			this.state = 163;
			this.idtf_lvl1();
			this.state = 164;
			this.match(scsParser.T__22);
			this.state = 165;
			this.idtf_lvl1();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence_lvl_common(): Sentence_lvl_commonContext {
		let _localctx: Sentence_lvl_commonContext = new Sentence_lvl_commonContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, scsParser.RULE_sentence_lvl_common);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.idtf_common();
			this.state = 168;
			this.match(scsParser.CONNECTOR);
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 169;
				this.attr_list();
				}
				break;
			}
			this.state = 172;
			this.idtf_list();
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === scsParser.T__18) {
				{
				{
				this.state = 173;
				this.match(scsParser.T__18);
				this.state = 174;
				this.match(scsParser.CONNECTOR);
				this.state = 176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 175;
					this.attr_list();
					}
					break;
				}
				this.state = 178;
				this.idtf_list();
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_list(): Attr_listContext {
		let _localctx: Attr_listContext = new Attr_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, scsParser.RULE_attr_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 184;
					this.match(scsParser.ID_SYSTEM);
					this.state = 185;
					this.match(scsParser.EDGE_ATTR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\xC1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x05\x02*\n\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x05\x020\n\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x03\x05" +
		"\x038\n\x03\x03\x03\x03\x03\x07\x03<\n\x03\f\x03\x0E\x03?\v\x03\x03\x03" +
		"\x03\x03\x03\x04\x07\x04D\n\x04\f\x04\x0E\x04G\v\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x05\x06O\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x05\tZ\n\t\x03\t\x03\t\x03\n\x03\n" +
		"\x05\n`\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\fh\n\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x05\ro\n\r\x03\r\x03\r\x03\r\x05\rt\n\r\x03\r\x07\r" +
		"w\n\r\f\r\x0E\rz\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\x84\n\x0E\x03\x0F\x03\x0F\x05\x0F\x88\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\x8D\n\x0F\x07\x0F\x8F\n\x0F\f\x0F\x0E\x0F\x92\v\x0F" +
		"\x03\x10\x03\x10\x05\x10\x96\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x06\x11\x9E\n\x11\r\x11\x0E\x11\x9F\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\xAD\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xB3\n\x13\x03\x13\x07" +
		"\x13\xB6\n\x13\f\x13\x0E\x13\xB9\v\x13\x03\x14\x03\x14\x06\x14\xBD\n\x14" +
		"\r\x14\x0E\x14\xBE\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x05\x03\x02\x04\x05\x03\x02\n\x0F" +
		"\x04\x02\x11\x11\x1A\x1A\x02\xCA\x02)\x03\x02\x02\x02\x047\x03\x02\x02" +
		"\x02\x06E\x03\x02\x02\x02\bH\x03\x02\x02\x02\nN\x03\x02\x02\x02\fP\x03" +
		"\x02\x02\x02\x0ET\x03\x02\x02\x02\x10Y\x03\x02\x02\x02\x12_\x03\x02\x02" +
		"\x02\x14a\x03\x02\x02\x02\x16c\x03\x02\x02\x02\x18l\x03\x02\x02\x02\x1A" +
		"\x83\x03\x02\x02\x02\x1C\x85\x03\x02\x02\x02\x1E\x93\x03\x02\x02\x02 " +
		"\x99\x03\x02\x02\x02\"\xA3\x03\x02\x02\x02$\xA9\x03\x02\x02\x02&\xBC\x03" +
		"\x02\x02\x02(*\x07\x03\x02\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03" +
		"\x02\x02\x02+3\x07\x04\x02\x02,0\n\x02\x02\x02-0\x07\x04\x02\x02.0\x07" +
		"\x05\x02\x02/,\x03\x02\x02\x02/-\x03\x02\x02\x02/.\x03\x02\x02\x0202\x03" +
		"\x02\x02\x021/\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03" +
		"\x02\x02\x024\x03\x03\x02\x02\x0253\x03\x02\x02\x0268\x07\x03\x02\x02" +
		"76\x03\x02\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x029=\x07\x06\x02\x02" +
		":<\x05\b\x05\x02;:\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02" +
		"=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03\x02\x02\x02@A\x07\x07\x02\x02" +
		"A\x05\x03\x02\x02\x02BD\x05\b\x05\x02CB\x03\x02\x02\x02DG\x03\x02\x02" +
		"\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02F\x07\x03\x02\x02\x02GE\x03\x02" +
		"\x02\x02HI\x05\n\x06\x02IJ\x07\b\x02\x02J\t\x03\x02\x02\x02KO\x05\"\x12" +
		"\x02LO\x05$\x13\x02MO\x05\f\x07\x02NK\x03\x02\x02\x02NL\x03\x02\x02\x02" +
		"NM\x03\x02\x02\x02O\v\x03\x02\x02\x02PQ\x07\x1A\x02\x02QR\x07\t\x02\x02" +
		"RS\x05\x1A\x0E\x02S\r\x03\x02\x02\x02TU\t\x03\x02\x02U\x0F\x03\x02\x02" +
		"\x02VW\x05\x0E\b\x02WX\x07\x10\x02\x02XZ\x03\x02\x02\x02YV\x03\x02\x02" +
		"\x02YZ\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x05\x14\v\x02\\\x11\x03\x02" +
		"\x02\x02]`\x05\x10\t\x02^`\x07\x1B\x02\x02_]\x03\x02\x02\x02_^\x03\x02" +
		"\x02\x02`\x13\x03\x02\x02\x02ab\t\x04\x02\x02b\x15\x03\x02\x02\x02cd\x07" +
		"\x12\x02\x02de\x05\x14\v\x02eg\x07\x1C\x02\x02fh\x05&\x14\x02gf\x03\x02" +
		"\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x05\x14\v\x02jk\x07\x13" +
		"\x02\x02k\x17\x03\x02\x02\x02ln\x07\x14\x02\x02mo\x05&\x14\x02nm\x03\x02" +
		"\x02\x02no\x03\x02\x02\x02op\x03\x02\x02\x02px\x05\x1A\x0E\x02qs\x07\x15" +
		"\x02\x02rt\x05&\x14\x02sr\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02" +
		"\x02\x02uw\x05\x1A\x0E\x02vq\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02" +
		"\x02\x02xy\x03\x02\x02\x02y{\x03\x02\x02\x02zx\x03\x02\x02\x02{|\x07\x16" +
		"\x02\x02|\x19\x03\x02\x02\x02}\x84\x05\x14\v\x02~\x84\x05\x16\f\x02\x7F" +
		"\x84\x05\x18\r\x02\x80\x84\x05\x04\x03\x02\x81\x84\x05\x02\x02\x02\x82" +
		"\x84\x07\x1B\x02\x02\x83}\x03\x02\x02\x02\x83~\x03\x02\x02\x02\x83\x7F" +
		"\x03\x02\x02\x02\x83\x80\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x82" +
		"\x03\x02\x02\x02\x84\x1B\x03\x02\x02\x02\x85\x87\x05\x1A\x0E\x02\x86\x88" +
		"\x05 \x11\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x90" +
		"\x03\x02\x02\x02\x89\x8A\x07\x15\x02\x02\x8A\x8C\x05\x1A\x0E\x02\x8B\x8D" +
		"\x05 \x11\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F" +
		"\x03\x02\x02\x02\x8E\x89\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E" +
		"\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x1D\x03\x02\x02\x02\x92\x90" +
		"\x03\x02\x02\x02\x93\x95\x07\x1C\x02\x02\x94\x96\x05&\x14\x02\x95\x94" +
		"\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98" +
		"\x05\x1C\x0F\x02\x98\x1F\x03\x02\x02\x02\x99\x9D\x07\x17\x02\x02\x9A\x9B" +
		"\x05\x1E\x10\x02\x9B\x9C\x07\b\x02\x02\x9C\x9E\x03\x02\x02\x02\x9D\x9A" +
		"\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0" +
		"\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x07\x18\x02\x02\xA2!" +
		"\x03\x02\x02\x02\xA3\xA4\x05\x12\n\x02\xA4\xA5\x07\x19\x02\x02\xA5\xA6" +
		"\x05\x12\n\x02\xA6\xA7\x07\x19\x02\x02\xA7\xA8\x05\x12\n\x02\xA8#\x03" +
		"\x02\x02\x02\xA9\xAA\x05\x1A\x0E\x02\xAA\xAC\x07\x1C\x02\x02\xAB\xAD\x05" +
		"&\x14\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03" +
		"\x02\x02\x02\xAE\xB7\x05\x1C\x0F\x02\xAF\xB0\x07\x15\x02\x02\xB0\xB2\x07" +
		"\x1C\x02\x02\xB1\xB3\x05&\x14\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03" +
		"\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6\x05\x1C\x0F\x02\xB5\xAF\x03" +
		"\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03" +
		"\x02\x02\x02\xB8%\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x07" +
		"\x1A\x02\x02\xBB\xBD\x07\x1D\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x03" +
		"\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\'\x03" +
		"\x02\x02\x02\x19)/37=ENY_gnsx\x83\x87\x8C\x90\x95\x9F\xAC\xB2\xB7\xBE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!scsParser.__ATN) {
			scsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(scsParser._serializedATN));
		}

		return scsParser.__ATN;
	}

}

export class ContentContext extends ParserRuleContext {
	public _r!: Token;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_content; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterContent) {
			listener.enterContent(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitContent) {
			listener.exitContent(this);
		}
	}
}


export class ContourContext extends ParserRuleContext {
	public _b!: Token;
	public _e!: Token;
	public sentence_wrap(): Sentence_wrapContext[];
	public sentence_wrap(i: number): Sentence_wrapContext;
	public sentence_wrap(i?: number): Sentence_wrapContext | Sentence_wrapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sentence_wrapContext);
		} else {
			return this.getRuleContext(i, Sentence_wrapContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_contour; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterContour) {
			listener.enterContour(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitContour) {
			listener.exitContour(this);
		}
	}
}


export class SyntaxContext extends ParserRuleContext {
	public sentence_wrap(): Sentence_wrapContext[];
	public sentence_wrap(i: number): Sentence_wrapContext;
	public sentence_wrap(i?: number): Sentence_wrapContext | Sentence_wrapContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sentence_wrapContext);
		} else {
			return this.getRuleContext(i, Sentence_wrapContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_syntax; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSyntax) {
			listener.enterSyntax(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSyntax) {
			listener.exitSyntax(this);
		}
	}
}


export class Sentence_wrapContext extends ParserRuleContext {
	public sentence(): SentenceContext | undefined {
		return this.tryGetRuleContext(0, SentenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_wrap; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_wrap) {
			listener.enterSentence_wrap(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_wrap) {
			listener.exitSentence_wrap(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	public sentence_lvl1(): Sentence_lvl1Context | undefined {
		return this.tryGetRuleContext(0, Sentence_lvl1Context);
	}
	public sentence_lvl_common(): Sentence_lvl_commonContext | undefined {
		return this.tryGetRuleContext(0, Sentence_lvl_commonContext);
	}
	public sentence_assign(): Sentence_assignContext | undefined {
		return this.tryGetRuleContext(0, Sentence_assignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence) {
			listener.enterSentence(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence) {
			listener.exitSentence(this);
		}
	}
}


export class Sentence_assignContext extends ParserRuleContext {
	public ID_SYSTEM(): TerminalNode { return this.getToken(scsParser.ID_SYSTEM, 0); }
	public idtf_common(): Idtf_commonContext {
		return this.getRuleContext(0, Idtf_commonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_assign; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_assign) {
			listener.enterSentence_assign(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_assign) {
			listener.exitSentence_assign(this);
		}
	}
}


export class Idtf_lvl1_preffixContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_lvl1_preffix; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_lvl1_preffix) {
			listener.enterIdtf_lvl1_preffix(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_lvl1_preffix) {
			listener.exitIdtf_lvl1_preffix(this);
		}
	}
}


export class Idtf_lvl1_valueContext extends ParserRuleContext {
	public idtf_system(): Idtf_systemContext {
		return this.getRuleContext(0, Idtf_systemContext);
	}
	public idtf_lvl1_preffix(): Idtf_lvl1_preffixContext | undefined {
		return this.tryGetRuleContext(0, Idtf_lvl1_preffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_lvl1_value; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_lvl1_value) {
			listener.enterIdtf_lvl1_value(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_lvl1_value) {
			listener.exitIdtf_lvl1_value(this);
		}
	}
}


export class Idtf_lvl1Context extends ParserRuleContext {
	public idtf_lvl1_value(): Idtf_lvl1_valueContext | undefined {
		return this.tryGetRuleContext(0, Idtf_lvl1_valueContext);
	}
	public LINK(): TerminalNode | undefined { return this.tryGetToken(scsParser.LINK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_lvl1; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_lvl1) {
			listener.enterIdtf_lvl1(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_lvl1) {
			listener.exitIdtf_lvl1(this);
		}
	}
}


export class Idtf_systemContext extends ParserRuleContext {
	public ID_SYSTEM(): TerminalNode { return this.getToken(scsParser.ID_SYSTEM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_system; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_system) {
			listener.enterIdtf_system(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_system) {
			listener.exitIdtf_system(this);
		}
	}
}


export class Idtf_edgeContext extends ParserRuleContext {
	public idtf_system(): Idtf_systemContext[];
	public idtf_system(i: number): Idtf_systemContext;
	public idtf_system(i?: number): Idtf_systemContext | Idtf_systemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_systemContext);
		} else {
			return this.getRuleContext(i, Idtf_systemContext);
		}
	}
	public CONNECTOR(): TerminalNode { return this.getToken(scsParser.CONNECTOR, 0); }
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_edge; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_edge) {
			listener.enterIdtf_edge(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_edge) {
			listener.exitIdtf_edge(this);
		}
	}
}


export class Idtf_setContext extends ParserRuleContext {
	public idtf_common(): Idtf_commonContext[];
	public idtf_common(i: number): Idtf_commonContext;
	public idtf_common(i?: number): Idtf_commonContext | Idtf_commonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_commonContext);
		} else {
			return this.getRuleContext(i, Idtf_commonContext);
		}
	}
	public attr_list(): Attr_listContext[];
	public attr_list(i: number): Attr_listContext;
	public attr_list(i?: number): Attr_listContext | Attr_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Attr_listContext);
		} else {
			return this.getRuleContext(i, Attr_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_set; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_set) {
			listener.enterIdtf_set(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_set) {
			listener.exitIdtf_set(this);
		}
	}
}


export class Idtf_commonContext extends ParserRuleContext {
	public idtf_system(): Idtf_systemContext | undefined {
		return this.tryGetRuleContext(0, Idtf_systemContext);
	}
	public idtf_edge(): Idtf_edgeContext | undefined {
		return this.tryGetRuleContext(0, Idtf_edgeContext);
	}
	public idtf_set(): Idtf_setContext | undefined {
		return this.tryGetRuleContext(0, Idtf_setContext);
	}
	public contour(): ContourContext | undefined {
		return this.tryGetRuleContext(0, ContourContext);
	}
	public content(): ContentContext | undefined {
		return this.tryGetRuleContext(0, ContentContext);
	}
	public LINK(): TerminalNode | undefined { return this.tryGetToken(scsParser.LINK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_common; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_common) {
			listener.enterIdtf_common(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_common) {
			listener.exitIdtf_common(this);
		}
	}
}


export class Idtf_listContext extends ParserRuleContext {
	public idtf_common(): Idtf_commonContext[];
	public idtf_common(i: number): Idtf_commonContext;
	public idtf_common(i?: number): Idtf_commonContext | Idtf_commonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_commonContext);
		} else {
			return this.getRuleContext(i, Idtf_commonContext);
		}
	}
	public internal_sentence_list(): Internal_sentence_listContext[];
	public internal_sentence_list(i: number): Internal_sentence_listContext;
	public internal_sentence_list(i?: number): Internal_sentence_listContext | Internal_sentence_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Internal_sentence_listContext);
		} else {
			return this.getRuleContext(i, Internal_sentence_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_idtf_list; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterIdtf_list) {
			listener.enterIdtf_list(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitIdtf_list) {
			listener.exitIdtf_list(this);
		}
	}
}


export class Internal_sentenceContext extends ParserRuleContext {
	public CONNECTOR(): TerminalNode { return this.getToken(scsParser.CONNECTOR, 0); }
	public idtf_list(): Idtf_listContext {
		return this.getRuleContext(0, Idtf_listContext);
	}
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_internal_sentence; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterInternal_sentence) {
			listener.enterInternal_sentence(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitInternal_sentence) {
			listener.exitInternal_sentence(this);
		}
	}
}


export class Internal_sentence_listContext extends ParserRuleContext {
	public internal_sentence(): Internal_sentenceContext[];
	public internal_sentence(i: number): Internal_sentenceContext;
	public internal_sentence(i?: number): Internal_sentenceContext | Internal_sentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Internal_sentenceContext);
		} else {
			return this.getRuleContext(i, Internal_sentenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_internal_sentence_list; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterInternal_sentence_list) {
			listener.enterInternal_sentence_list(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitInternal_sentence_list) {
			listener.exitInternal_sentence_list(this);
		}
	}
}


export class Sentence_lvl1Context extends ParserRuleContext {
	public idtf_lvl1(): Idtf_lvl1Context[];
	public idtf_lvl1(i: number): Idtf_lvl1Context;
	public idtf_lvl1(i?: number): Idtf_lvl1Context | Idtf_lvl1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_lvl1Context);
		} else {
			return this.getRuleContext(i, Idtf_lvl1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_lvl1; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_lvl1) {
			listener.enterSentence_lvl1(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_lvl1) {
			listener.exitSentence_lvl1(this);
		}
	}
}


export class Sentence_lvl_commonContext extends ParserRuleContext {
	public idtf_common(): Idtf_commonContext {
		return this.getRuleContext(0, Idtf_commonContext);
	}
	public CONNECTOR(): TerminalNode[];
	public CONNECTOR(i: number): TerminalNode;
	public CONNECTOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(scsParser.CONNECTOR);
		} else {
			return this.getToken(scsParser.CONNECTOR, i);
		}
	}
	public idtf_list(): Idtf_listContext[];
	public idtf_list(i: number): Idtf_listContext;
	public idtf_list(i?: number): Idtf_listContext | Idtf_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Idtf_listContext);
		} else {
			return this.getRuleContext(i, Idtf_listContext);
		}
	}
	public attr_list(): Attr_listContext[];
	public attr_list(i: number): Attr_listContext;
	public attr_list(i?: number): Attr_listContext | Attr_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Attr_listContext);
		} else {
			return this.getRuleContext(i, Attr_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_sentence_lvl_common; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterSentence_lvl_common) {
			listener.enterSentence_lvl_common(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitSentence_lvl_common) {
			listener.exitSentence_lvl_common(this);
		}
	}
}


export class Attr_listContext extends ParserRuleContext {
	public ID_SYSTEM(): TerminalNode[];
	public ID_SYSTEM(i: number): TerminalNode;
	public ID_SYSTEM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(scsParser.ID_SYSTEM);
		} else {
			return this.getToken(scsParser.ID_SYSTEM, i);
		}
	}
	public EDGE_ATTR(): TerminalNode[];
	public EDGE_ATTR(i: number): TerminalNode;
	public EDGE_ATTR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(scsParser.EDGE_ATTR);
		} else {
			return this.getToken(scsParser.EDGE_ATTR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return scsParser.RULE_attr_list; }
	// @Override
	public enterRule(listener: scsListener): void {
		if (listener.enterAttr_list) {
			listener.enterAttr_list(this);
		}
	}
	// @Override
	public exitRule(listener: scsListener): void {
		if (listener.exitAttr_list) {
			listener.exitAttr_list(this);
		}
	}
}


