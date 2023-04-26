// Generated from ./src/syntax/scs.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import scsListener from './scsListener.js';
const serializedATN = [4,1,30,182,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,3,0,40,8,
0,1,0,1,0,1,1,3,1,45,8,1,1,1,1,1,5,1,49,8,1,10,1,12,1,52,9,1,1,1,1,1,1,2,
5,2,57,8,2,10,2,12,2,60,9,2,1,3,1,3,1,3,1,4,1,4,1,4,3,4,68,8,4,1,5,1,5,1,
5,1,5,1,6,1,6,1,7,1,7,1,7,3,7,79,8,7,1,7,1,7,1,8,1,8,3,8,85,8,8,1,9,1,9,
1,10,1,10,1,10,1,10,3,10,93,8,10,1,10,1,10,1,10,1,11,1,11,3,11,100,8,11,
1,11,1,11,1,11,3,11,105,8,11,1,11,5,11,108,8,11,10,11,12,11,111,9,11,1,11,
1,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,121,8,12,1,13,1,13,3,13,125,8,13,
1,13,1,13,1,13,3,13,130,8,13,5,13,132,8,13,10,13,12,13,135,9,13,1,14,1,14,
3,14,139,8,14,1,14,1,14,1,15,1,15,1,15,1,15,4,15,147,8,15,11,15,12,15,148,
1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,3,17,162,8,17,1,17,
1,17,1,17,1,17,3,17,168,8,17,1,17,5,17,171,8,17,10,17,12,17,174,9,17,1,18,
1,18,4,18,178,8,18,11,18,12,18,179,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,0,2,1,0,4,9,2,0,11,11,20,20,188,0,39,1,0,0,0,
2,44,1,0,0,0,4,58,1,0,0,0,6,61,1,0,0,0,8,67,1,0,0,0,10,69,1,0,0,0,12,73,
1,0,0,0,14,78,1,0,0,0,16,84,1,0,0,0,18,86,1,0,0,0,20,88,1,0,0,0,22,97,1,
0,0,0,24,120,1,0,0,0,26,122,1,0,0,0,28,136,1,0,0,0,30,142,1,0,0,0,32,152,
1,0,0,0,34,158,1,0,0,0,36,177,1,0,0,0,38,40,5,1,0,0,39,38,1,0,0,0,39,40,
1,0,0,0,40,41,1,0,0,0,41,42,5,30,0,0,42,1,1,0,0,0,43,45,5,1,0,0,44,43,1,
0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,50,5,28,0,0,47,49,3,6,3,0,48,47,1,0,
0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,50,1,0,0,
0,53,54,5,29,0,0,54,3,1,0,0,0,55,57,3,6,3,0,56,55,1,0,0,0,57,60,1,0,0,0,
58,56,1,0,0,0,58,59,1,0,0,0,59,5,1,0,0,0,60,58,1,0,0,0,61,62,3,8,4,0,62,
63,5,2,0,0,63,7,1,0,0,0,64,68,3,32,16,0,65,68,3,34,17,0,66,68,3,10,5,0,67,
64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,9,1,0,0,0,69,70,5,20,0,0,70,71,
5,3,0,0,71,72,3,24,12,0,72,11,1,0,0,0,73,74,7,0,0,0,74,13,1,0,0,0,75,76,
3,12,6,0,76,77,5,10,0,0,77,79,1,0,0,0,78,75,1,0,0,0,78,79,1,0,0,0,79,80,
1,0,0,0,80,81,3,18,9,0,81,15,1,0,0,0,82,85,3,14,7,0,83,85,5,21,0,0,84,82,
1,0,0,0,84,83,1,0,0,0,85,17,1,0,0,0,86,87,7,1,0,0,87,19,1,0,0,0,88,89,5,
12,0,0,89,90,3,18,9,0,90,92,5,22,0,0,91,93,3,36,18,0,92,91,1,0,0,0,92,93,
1,0,0,0,93,94,1,0,0,0,94,95,3,18,9,0,95,96,5,13,0,0,96,21,1,0,0,0,97,99,
5,14,0,0,98,100,3,36,18,0,99,98,1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,
109,3,24,12,0,102,104,5,15,0,0,103,105,3,36,18,0,104,103,1,0,0,0,104,105,
1,0,0,0,105,106,1,0,0,0,106,108,3,24,12,0,107,102,1,0,0,0,108,111,1,0,0,
0,109,107,1,0,0,0,109,110,1,0,0,0,110,112,1,0,0,0,111,109,1,0,0,0,112,113,
5,16,0,0,113,23,1,0,0,0,114,121,3,18,9,0,115,121,3,20,10,0,116,121,3,22,
11,0,117,121,3,2,1,0,118,121,3,0,0,0,119,121,5,21,0,0,120,114,1,0,0,0,120,
115,1,0,0,0,120,116,1,0,0,0,120,117,1,0,0,0,120,118,1,0,0,0,120,119,1,0,
0,0,121,25,1,0,0,0,122,124,3,24,12,0,123,125,3,30,15,0,124,123,1,0,0,0,124,
125,1,0,0,0,125,133,1,0,0,0,126,127,5,15,0,0,127,129,3,24,12,0,128,130,3,
30,15,0,129,128,1,0,0,0,129,130,1,0,0,0,130,132,1,0,0,0,131,126,1,0,0,0,
132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,27,1,0,0,0,135,133,1,
0,0,0,136,138,5,22,0,0,137,139,3,36,18,0,138,137,1,0,0,0,138,139,1,0,0,0,
139,140,1,0,0,0,140,141,3,26,13,0,141,29,1,0,0,0,142,146,5,17,0,0,143,144,
3,28,14,0,144,145,5,2,0,0,145,147,1,0,0,0,146,143,1,0,0,0,147,148,1,0,0,
0,148,146,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,151,5,18,0,0,151,31,
1,0,0,0,152,153,3,16,8,0,153,154,5,19,0,0,154,155,3,16,8,0,155,156,5,19,
0,0,156,157,3,16,8,0,157,33,1,0,0,0,158,159,3,24,12,0,159,161,5,22,0,0,160,
162,3,36,18,0,161,160,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,172,3,
26,13,0,164,165,5,15,0,0,165,167,5,22,0,0,166,168,3,36,18,0,167,166,1,0,
0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,171,3,26,13,0,170,164,1,0,0,0,171,
174,1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,35,1,0,0,0,174,172,1,0,0,
0,175,176,5,20,0,0,176,178,5,23,0,0,177,175,1,0,0,0,178,179,1,0,0,0,179,
177,1,0,0,0,179,180,1,0,0,0,180,37,1,0,0,0,21,39,44,50,58,67,78,84,92,99,
104,109,120,124,129,133,138,148,161,167,172,179];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class scsParser extends antlr4.Parser {

    static grammarFileName = "scs.g4";
    static literalNames = [ null, "'_'", "';;'", "'='", "'sc_node'", "'sc_link'", 
                            "'sc_edge_dcommon'", "'sc_edge_ucommon'", "'sc_edge_main'", 
                            "'sc_edge_access'", "'#'", "'...'", "'('", "')'", 
                            "'{'", "';'", "'}'", "'(*'", "'*)'", "'|'", 
                            null, null, null, null, null, null, null, null, 
                            "'[*'", "'*]'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ID_SYSTEM", "LINK", 
                             "CONNECTOR", "EDGE_ATTR", "LINE_TERMINATOR", 
                             "LINE_COMMENT", "MULTINE_COMMENT", "WS", "CONTOUR_BEGIN", 
                             "CONTOUR_END", "CONTENT_BODY" ];
    static ruleNames = [ "content", "contour", "syntax", "sentence_wrap", 
                         "sentence", "sentence_assign", "idtf_lvl1_preffix", 
                         "idtf_lvl1_value", "idtf_lvl1", "idtf_system", 
                         "idtf_edge", "idtf_set", "idtf_common", "idtf_list", 
                         "internal_sentence", "internal_sentence_list", 
                         "sentence_lvl1", "sentence_lvl_common", "attr_list" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = scsParser.ruleNames;
        this.literalNames = scsParser.literalNames;
        this.symbolicNames = scsParser.symbolicNames;
    }



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, scsParser.RULE_content);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 38;
	            this.match(scsParser.T__0);
	        }

	        this.state = 41;
	        this.match(scsParser.CONTENT_BODY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contour() {
	    let localctx = new ContourContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, scsParser.RULE_contour);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 43;
	            this.match(scsParser.T__0);
	        }

	        this.state = 46;
	        this.match(scsParser.CONTOUR_BEGIN);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1345346546) !== 0)) {
	            this.state = 47;
	            this.sentence_wrap();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
	        this.match(scsParser.CONTOUR_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	syntax() {
	    let localctx = new SyntaxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, scsParser.RULE_syntax);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1345346546) !== 0)) {
	            this.state = 55;
	            this.sentence_wrap();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentence_wrap() {
	    let localctx = new Sentence_wrapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, scsParser.RULE_sentence_wrap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.sentence();
	        this.state = 62;
	        this.match(scsParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentence() {
	    let localctx = new SentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, scsParser.RULE_sentence);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.sentence_lvl1();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.sentence_lvl_common();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.sentence_assign();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentence_assign() {
	    let localctx = new Sentence_assignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, scsParser.RULE_sentence_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(scsParser.ID_SYSTEM);
	        this.state = 70;
	        this.match(scsParser.T__2);
	        this.state = 71;
	        this.idtf_common();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idtf_lvl1_preffix() {
	    let localctx = new Idtf_lvl1_preffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, scsParser.RULE_idtf_lvl1_preffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1008) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idtf_lvl1_value() {
	    let localctx = new Idtf_lvl1_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, scsParser.RULE_idtf_lvl1_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1008) !== 0)) {
	            this.state = 75;
	            this.idtf_lvl1_preffix();
	            this.state = 76;
	            this.match(scsParser.T__9);
	        }

	        this.state = 80;
	        this.idtf_system();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idtf_lvl1() {
	    let localctx = new Idtf_lvl1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, scsParser.RULE_idtf_lvl1);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 11:
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.idtf_lvl1_value();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.match(scsParser.LINK);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idtf_system() {
	    let localctx = new Idtf_systemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, scsParser.RULE_idtf_system);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idtf_edge() {
	    let localctx = new Idtf_edgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, scsParser.RULE_idtf_edge);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(scsParser.T__11);
	        this.state = 89;
	        this.idtf_system();
	        this.state = 90;
	        this.match(scsParser.CONNECTOR);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 91;
	            this.attr_list();

	        }
	        this.state = 94;
	        this.idtf_system();
	        this.state = 95;
	        this.match(scsParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idtf_set() {
	    let localctx = new Idtf_setContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, scsParser.RULE_idtf_set);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(scsParser.T__13);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 98;
	            this.attr_list();

	        }
	        this.state = 101;
	        this.idtf_common();
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 102;
	            this.match(scsParser.T__14);
	            this.state = 104;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	            if(la_===1) {
	                this.state = 103;
	                this.attr_list();

	            }
	            this.state = 106;
	            this.idtf_common();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
	        this.match(scsParser.T__15);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idtf_common() {
	    let localctx = new Idtf_commonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, scsParser.RULE_idtf_common);
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.idtf_system();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.idtf_edge();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 116;
	            this.idtf_set();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 117;
	            this.contour();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 118;
	            this.content();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 119;
	            this.match(scsParser.LINK);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idtf_list() {
	    let localctx = new Idtf_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, scsParser.RULE_idtf_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.idtf_common();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 123;
	            this.internal_sentence_list();
	        }

	        this.state = 133;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 126;
	                this.match(scsParser.T__14);
	                this.state = 127;
	                this.idtf_common();
	                this.state = 129;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===17) {
	                    this.state = 128;
	                    this.internal_sentence_list();
	                }
	         
	            }
	            this.state = 135;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	internal_sentence() {
	    let localctx = new Internal_sentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, scsParser.RULE_internal_sentence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(scsParser.CONNECTOR);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 137;
	            this.attr_list();

	        }
	        this.state = 140;
	        this.idtf_list();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	internal_sentence_list() {
	    let localctx = new Internal_sentence_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, scsParser.RULE_internal_sentence_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(scsParser.T__16);
	        this.state = 146; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 143;
	            this.internal_sentence();
	            this.state = 144;
	            this.match(scsParser.T__1);
	            this.state = 148; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===22);
	        this.state = 150;
	        this.match(scsParser.T__17);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentence_lvl1() {
	    let localctx = new Sentence_lvl1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, scsParser.RULE_sentence_lvl1);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.idtf_lvl1();
	        this.state = 153;
	        this.match(scsParser.T__18);
	        this.state = 154;
	        this.idtf_lvl1();
	        this.state = 155;
	        this.match(scsParser.T__18);
	        this.state = 156;
	        this.idtf_lvl1();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentence_lvl_common() {
	    let localctx = new Sentence_lvl_commonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, scsParser.RULE_sentence_lvl_common);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.idtf_common();
	        this.state = 159;
	        this.match(scsParser.CONNECTOR);
	        this.state = 161;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 160;
	            this.attr_list();

	        }
	        this.state = 163;
	        this.idtf_list();
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 164;
	            this.match(scsParser.T__14);
	            this.state = 165;
	            this.match(scsParser.CONNECTOR);
	            this.state = 167;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            if(la_===1) {
	                this.state = 166;
	                this.attr_list();

	            }
	            this.state = 169;
	            this.idtf_list();
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attr_list() {
	    let localctx = new Attr_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, scsParser.RULE_attr_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 175;
	        		this.match(scsParser.ID_SYSTEM);
	        		this.state = 176;
	        		this.match(scsParser.EDGE_ATTR);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 179; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

scsParser.EOF = antlr4.Token.EOF;
scsParser.T__0 = 1;
scsParser.T__1 = 2;
scsParser.T__2 = 3;
scsParser.T__3 = 4;
scsParser.T__4 = 5;
scsParser.T__5 = 6;
scsParser.T__6 = 7;
scsParser.T__7 = 8;
scsParser.T__8 = 9;
scsParser.T__9 = 10;
scsParser.T__10 = 11;
scsParser.T__11 = 12;
scsParser.T__12 = 13;
scsParser.T__13 = 14;
scsParser.T__14 = 15;
scsParser.T__15 = 16;
scsParser.T__16 = 17;
scsParser.T__17 = 18;
scsParser.T__18 = 19;
scsParser.ID_SYSTEM = 20;
scsParser.LINK = 21;
scsParser.CONNECTOR = 22;
scsParser.EDGE_ATTR = 23;
scsParser.LINE_TERMINATOR = 24;
scsParser.LINE_COMMENT = 25;
scsParser.MULTINE_COMMENT = 26;
scsParser.WS = 27;
scsParser.CONTOUR_BEGIN = 28;
scsParser.CONTOUR_END = 29;
scsParser.CONTENT_BODY = 30;

scsParser.RULE_content = 0;
scsParser.RULE_contour = 1;
scsParser.RULE_syntax = 2;
scsParser.RULE_sentence_wrap = 3;
scsParser.RULE_sentence = 4;
scsParser.RULE_sentence_assign = 5;
scsParser.RULE_idtf_lvl1_preffix = 6;
scsParser.RULE_idtf_lvl1_value = 7;
scsParser.RULE_idtf_lvl1 = 8;
scsParser.RULE_idtf_system = 9;
scsParser.RULE_idtf_edge = 10;
scsParser.RULE_idtf_set = 11;
scsParser.RULE_idtf_common = 12;
scsParser.RULE_idtf_list = 13;
scsParser.RULE_internal_sentence = 14;
scsParser.RULE_internal_sentence_list = 15;
scsParser.RULE_sentence_lvl1 = 16;
scsParser.RULE_sentence_lvl_common = 17;
scsParser.RULE_attr_list = 18;

class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_content;
    }

	CONTENT_BODY() {
	    return this.getToken(scsParser.CONTENT_BODY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitContent(this);
		}
	}


}



class ContourContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_contour;
    }

	CONTOUR_BEGIN() {
	    return this.getToken(scsParser.CONTOUR_BEGIN, 0);
	};

	CONTOUR_END() {
	    return this.getToken(scsParser.CONTOUR_END, 0);
	};

	sentence_wrap = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sentence_wrapContext);
	    } else {
	        return this.getTypedRuleContext(Sentence_wrapContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterContour(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitContour(this);
		}
	}


}



class SyntaxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_syntax;
    }

	sentence_wrap = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sentence_wrapContext);
	    } else {
	        return this.getTypedRuleContext(Sentence_wrapContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterSyntax(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSyntax(this);
		}
	}


}



class Sentence_wrapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_sentence_wrap;
    }

	sentence() {
	    return this.getTypedRuleContext(SentenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterSentence_wrap(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSentence_wrap(this);
		}
	}


}



class SentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_sentence;
    }

	sentence_lvl1() {
	    return this.getTypedRuleContext(Sentence_lvl1Context,0);
	};

	sentence_lvl_common() {
	    return this.getTypedRuleContext(Sentence_lvl_commonContext,0);
	};

	sentence_assign() {
	    return this.getTypedRuleContext(Sentence_assignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSentence(this);
		}
	}


}



class Sentence_assignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_sentence_assign;
    }

	ID_SYSTEM() {
	    return this.getToken(scsParser.ID_SYSTEM, 0);
	};

	idtf_common() {
	    return this.getTypedRuleContext(Idtf_commonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterSentence_assign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSentence_assign(this);
		}
	}


}



class Idtf_lvl1_preffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_lvl1_preffix;
    }


	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_lvl1_preffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_lvl1_preffix(this);
		}
	}


}



class Idtf_lvl1_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_lvl1_value;
    }

	idtf_system() {
	    return this.getTypedRuleContext(Idtf_systemContext,0);
	};

	idtf_lvl1_preffix() {
	    return this.getTypedRuleContext(Idtf_lvl1_preffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_lvl1_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_lvl1_value(this);
		}
	}


}



class Idtf_lvl1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_lvl1;
    }

	idtf_lvl1_value() {
	    return this.getTypedRuleContext(Idtf_lvl1_valueContext,0);
	};

	LINK() {
	    return this.getToken(scsParser.LINK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_lvl1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_lvl1(this);
		}
	}


}



class Idtf_systemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_system;
    }

	ID_SYSTEM() {
	    return this.getToken(scsParser.ID_SYSTEM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_system(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_system(this);
		}
	}


}



class Idtf_edgeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_edge;
    }

	idtf_system = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Idtf_systemContext);
	    } else {
	        return this.getTypedRuleContext(Idtf_systemContext,i);
	    }
	};

	CONNECTOR() {
	    return this.getToken(scsParser.CONNECTOR, 0);
	};

	attr_list() {
	    return this.getTypedRuleContext(Attr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_edge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_edge(this);
		}
	}


}



class Idtf_setContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_set;
    }

	idtf_common = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Idtf_commonContext);
	    } else {
	        return this.getTypedRuleContext(Idtf_commonContext,i);
	    }
	};

	attr_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Attr_listContext);
	    } else {
	        return this.getTypedRuleContext(Attr_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_set(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_set(this);
		}
	}


}



class Idtf_commonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_common;
    }

	idtf_system() {
	    return this.getTypedRuleContext(Idtf_systemContext,0);
	};

	idtf_edge() {
	    return this.getTypedRuleContext(Idtf_edgeContext,0);
	};

	idtf_set() {
	    return this.getTypedRuleContext(Idtf_setContext,0);
	};

	contour() {
	    return this.getTypedRuleContext(ContourContext,0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	LINK() {
	    return this.getToken(scsParser.LINK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_common(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_common(this);
		}
	}


}



class Idtf_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_list;
    }

	idtf_common = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Idtf_commonContext);
	    } else {
	        return this.getTypedRuleContext(Idtf_commonContext,i);
	    }
	};

	internal_sentence_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Internal_sentence_listContext);
	    } else {
	        return this.getTypedRuleContext(Internal_sentence_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_list(this);
		}
	}


}



class Internal_sentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_internal_sentence;
    }

	CONNECTOR() {
	    return this.getToken(scsParser.CONNECTOR, 0);
	};

	idtf_list() {
	    return this.getTypedRuleContext(Idtf_listContext,0);
	};

	attr_list() {
	    return this.getTypedRuleContext(Attr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterInternal_sentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitInternal_sentence(this);
		}
	}


}



class Internal_sentence_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_internal_sentence_list;
    }

	internal_sentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Internal_sentenceContext);
	    } else {
	        return this.getTypedRuleContext(Internal_sentenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterInternal_sentence_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitInternal_sentence_list(this);
		}
	}


}



class Sentence_lvl1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_sentence_lvl1;
    }

	idtf_lvl1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Idtf_lvl1Context);
	    } else {
	        return this.getTypedRuleContext(Idtf_lvl1Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterSentence_lvl1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSentence_lvl1(this);
		}
	}


}



class Sentence_lvl_commonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_sentence_lvl_common;
    }

	idtf_common() {
	    return this.getTypedRuleContext(Idtf_commonContext,0);
	};

	CONNECTOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scsParser.CONNECTOR);
	    } else {
	        return this.getToken(scsParser.CONNECTOR, i);
	    }
	};


	idtf_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Idtf_listContext);
	    } else {
	        return this.getTypedRuleContext(Idtf_listContext,i);
	    }
	};

	attr_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Attr_listContext);
	    } else {
	        return this.getTypedRuleContext(Attr_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterSentence_lvl_common(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSentence_lvl_common(this);
		}
	}


}



class Attr_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_attr_list;
    }

	ID_SYSTEM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scsParser.ID_SYSTEM);
	    } else {
	        return this.getToken(scsParser.ID_SYSTEM, i);
	    }
	};


	EDGE_ATTR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scsParser.EDGE_ATTR);
	    } else {
	        return this.getToken(scsParser.EDGE_ATTR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterAttr_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitAttr_list(this);
		}
	}


}




scsParser.ContentContext = ContentContext; 
scsParser.ContourContext = ContourContext; 
scsParser.SyntaxContext = SyntaxContext; 
scsParser.Sentence_wrapContext = Sentence_wrapContext; 
scsParser.SentenceContext = SentenceContext; 
scsParser.Sentence_assignContext = Sentence_assignContext; 
scsParser.Idtf_lvl1_preffixContext = Idtf_lvl1_preffixContext; 
scsParser.Idtf_lvl1_valueContext = Idtf_lvl1_valueContext; 
scsParser.Idtf_lvl1Context = Idtf_lvl1Context; 
scsParser.Idtf_systemContext = Idtf_systemContext; 
scsParser.Idtf_edgeContext = Idtf_edgeContext; 
scsParser.Idtf_setContext = Idtf_setContext; 
scsParser.Idtf_commonContext = Idtf_commonContext; 
scsParser.Idtf_listContext = Idtf_listContext; 
scsParser.Internal_sentenceContext = Internal_sentenceContext; 
scsParser.Internal_sentence_listContext = Internal_sentence_listContext; 
scsParser.Sentence_lvl1Context = Sentence_lvl1Context; 
scsParser.Sentence_lvl_commonContext = Sentence_lvl_commonContext; 
scsParser.Attr_listContext = Attr_listContext; 
