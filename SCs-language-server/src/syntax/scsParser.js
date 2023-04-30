// Generated from ./src/syntax/scs.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import scsListener from './scsListener.js';
import scsVisitor from './scsVisitor.js';

const serializedATN = [4,1,82,225,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,3,0,54,8,0,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,63,8,1,10,1,12,1,66,9,1,1,1,1,1,1,2,1,2,
1,3,5,3,73,8,3,10,3,12,3,76,9,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,
87,8,5,1,6,1,6,1,7,1,7,1,7,3,7,94,8,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,3,13,116,8,13,
1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,129,8,14,1,15,
3,15,132,8,15,1,15,1,15,3,15,136,8,15,1,15,1,15,3,15,140,8,15,1,15,1,15,
3,15,144,8,15,5,15,146,8,15,10,15,12,15,149,9,15,1,16,1,16,3,16,153,8,16,
1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,163,8,18,1,19,1,19,3,19,167,
8,19,1,19,1,19,1,19,3,19,172,8,19,5,19,174,8,19,10,19,12,19,177,9,19,1,20,
1,20,3,20,181,8,20,1,20,1,20,1,20,3,20,186,8,20,1,21,1,21,1,21,1,21,4,21,
192,8,21,11,21,12,21,193,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,
23,3,23,206,8,23,1,23,1,23,1,24,1,24,1,24,1,24,5,24,214,8,24,10,24,12,24,
217,9,24,1,25,1,25,4,25,221,8,25,11,25,12,25,222,1,25,0,0,26,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,0,2,1,0,3,50,
1,0,53,62,229,0,53,1,0,0,0,2,57,1,0,0,0,4,69,1,0,0,0,6,74,1,0,0,0,8,79,1,
0,0,0,10,86,1,0,0,0,12,88,1,0,0,0,14,93,1,0,0,0,16,95,1,0,0,0,18,99,1,0,
0,0,20,103,1,0,0,0,22,105,1,0,0,0,24,109,1,0,0,0,26,111,1,0,0,0,28,128,1,
0,0,0,30,131,1,0,0,0,32,152,1,0,0,0,34,154,1,0,0,0,36,162,1,0,0,0,38,164,
1,0,0,0,40,185,1,0,0,0,42,187,1,0,0,0,44,197,1,0,0,0,46,203,1,0,0,0,48,209,
1,0,0,0,50,220,1,0,0,0,52,54,5,1,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,
0,0,0,55,56,5,76,0,0,56,1,1,0,0,0,57,64,5,74,0,0,58,63,3,8,4,0,59,60,3,46,
23,0,60,61,5,2,0,0,61,63,1,0,0,0,62,58,1,0,0,0,62,59,1,0,0,0,63,66,1,0,0,
0,64,62,1,0,0,0,64,65,1,0,0,0,65,67,1,0,0,0,66,64,1,0,0,0,67,68,5,75,0,0,
68,3,1,0,0,0,69,70,7,0,0,0,70,5,1,0,0,0,71,73,3,8,4,0,72,71,1,0,0,0,73,76,
1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,74,1,0,0,0,77,78,5,
0,0,1,78,7,1,0,0,0,79,80,3,10,5,0,80,81,5,2,0,0,81,9,1,0,0,0,82,87,3,44,
22,0,83,87,3,16,8,0,84,87,3,18,9,0,85,87,3,48,24,0,86,82,1,0,0,0,86,83,1,
0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,11,1,0,0,0,88,89,5,73,0,0,89,13,1,0,
0,0,90,94,5,72,0,0,91,94,5,51,0,0,92,94,3,20,10,0,93,90,1,0,0,0,93,91,1,
0,0,0,93,92,1,0,0,0,94,15,1,0,0,0,95,96,5,73,0,0,96,97,5,52,0,0,97,98,3,
36,18,0,98,17,1,0,0,0,99,100,3,14,7,0,100,101,5,52,0,0,101,102,3,2,1,0,102,
19,1,0,0,0,103,104,7,1,0,0,104,21,1,0,0,0,105,106,3,20,10,0,106,107,5,63,
0,0,107,108,5,72,0,0,108,23,1,0,0,0,109,110,3,22,11,0,110,25,1,0,0,0,111,
112,5,64,0,0,112,113,3,32,16,0,113,115,3,4,2,0,114,116,3,50,25,0,115,114,
1,0,0,0,115,116,1,0,0,0,116,117,1,0,0,0,117,118,3,32,16,0,118,119,5,65,0,
0,119,27,1,0,0,0,120,121,5,66,0,0,121,122,3,30,15,0,122,123,5,67,0,0,123,
129,1,0,0,0,124,125,5,5,0,0,125,126,3,30,15,0,126,127,5,4,0,0,127,129,1,
0,0,0,128,120,1,0,0,0,128,124,1,0,0,0,129,29,1,0,0,0,130,132,3,50,25,0,131,
130,1,0,0,0,131,132,1,0,0,0,132,133,1,0,0,0,133,135,3,36,18,0,134,136,3,
42,21,0,135,134,1,0,0,0,135,136,1,0,0,0,136,147,1,0,0,0,137,139,5,68,0,0,
138,140,3,50,25,0,139,138,1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,141,143,
3,36,18,0,142,144,3,42,21,0,143,142,1,0,0,0,143,144,1,0,0,0,144,146,1,0,
0,0,145,137,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,
31,1,0,0,0,149,147,1,0,0,0,150,153,3,12,6,0,151,153,3,14,7,0,152,150,1,0,
0,0,152,151,1,0,0,0,153,33,1,0,0,0,154,155,5,77,0,0,155,35,1,0,0,0,156,163,
3,32,16,0,157,163,3,26,13,0,158,163,3,28,14,0,159,163,3,2,1,0,160,163,3,
0,0,0,161,163,3,34,17,0,162,156,1,0,0,0,162,157,1,0,0,0,162,158,1,0,0,0,
162,159,1,0,0,0,162,160,1,0,0,0,162,161,1,0,0,0,163,37,1,0,0,0,164,166,3,
36,18,0,165,167,3,42,21,0,166,165,1,0,0,0,166,167,1,0,0,0,167,175,1,0,0,
0,168,169,5,68,0,0,169,171,3,36,18,0,170,172,3,42,21,0,171,170,1,0,0,0,171,
172,1,0,0,0,172,174,1,0,0,0,173,168,1,0,0,0,174,177,1,0,0,0,175,173,1,0,
0,0,175,176,1,0,0,0,176,39,1,0,0,0,177,175,1,0,0,0,178,180,3,4,2,0,179,181,
3,50,25,0,180,179,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,183,3,38,19,
0,183,186,1,0,0,0,184,186,3,42,21,0,185,178,1,0,0,0,185,184,1,0,0,0,186,
41,1,0,0,0,187,191,5,69,0,0,188,189,3,40,20,0,189,190,5,2,0,0,190,192,1,
0,0,0,191,188,1,0,0,0,192,193,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,
195,1,0,0,0,195,196,5,70,0,0,196,43,1,0,0,0,197,198,3,24,12,0,198,199,5,
71,0,0,199,200,3,24,12,0,200,201,5,71,0,0,201,202,3,24,12,0,202,45,1,0,0,
0,203,205,3,4,2,0,204,206,3,50,25,0,205,204,1,0,0,0,205,206,1,0,0,0,206,
207,1,0,0,0,207,208,3,38,19,0,208,47,1,0,0,0,209,210,3,36,18,0,210,215,3,
46,23,0,211,212,5,68,0,0,212,214,3,46,23,0,213,211,1,0,0,0,214,217,1,0,0,
0,215,213,1,0,0,0,215,216,1,0,0,0,216,49,1,0,0,0,217,215,1,0,0,0,218,219,
5,72,0,0,219,221,5,78,0,0,220,218,1,0,0,0,221,222,1,0,0,0,222,220,1,0,0,
0,222,223,1,0,0,0,223,51,1,0,0,0,24,53,62,64,74,86,93,115,128,131,135,139,
143,147,152,162,166,171,175,180,185,193,205,215,222];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class scsParser extends antlr4.Parser {

    static grammarFileName = "scs.g4";
    static literalNames = [ null, "'_'", "';;'", "'<>'", "'>'", "'<'", "'..>'", 
                            "'<..'", "'->'", "'<-'", "'<=>'", "'=>'", "'<='", 
                            "'-|>'", "'<|-'", "'-/>'", "'</-'", "'~>'", 
                            "'<~'", "'~|>'", "'<|~'", "'~/>'", "'</~'", 
                            "'_<>'", "'_>'", "'_<'", "'_..>'", "'_<..'", 
                            "'<.._'", "'_->'", "'_<-'", "'<-_'", "'_<=>'", 
                            "'_=>'", "'_<='", "'<=_'", "'_-|>'", "'_<|-'", 
                            "'<|-_'", "'_-/>'", "'_</-'", "'</-_'", "'_~>'", 
                            "'_<~'", "'<~_'", "'_~|>'", "'_<|~'", "'<|~_'", 
                            "'_~/>'", "'_</~'", "'</~_'", "'...'", "'='", 
                            "'sc_node'", "'sc_link'", "'sc_edge_dcommon'", 
                            "'sc_edge_ucommon'", "'sc_edge_main'", "'sc_edge_access'", 
                            "'sc_arc_common'", "'sc_edge'", "'sc_arc_main'", 
                            "'sc_arc_access'", "'#'", "'('", "')'", "'{'", 
                            "'}'", "';'", "'(*'", "'*)'", "'|'", null, null, 
                            "'[*'", "'*]'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "ID_SYSTEM", "ALIAS_SYMBOLS", "CONTOUR_BEGIN", 
                             "CONTOUR_END", "CONTENT_BODY", "LINK", "EDGE_ATTR", 
                             "LINE_TERMINATOR", "LINE_COMMENT", "MULTINE_COMMENT", 
                             "WS" ];
    static ruleNames = [ "content", "contour", "connector", "syntax", "sentence_wrap", 
                         "sentence", "idtf_alias", "idtf_system", "sentence_assign", 
                         "sentence_assign_contour", "idtf_lvl1_preffix", 
                         "idtf_lvl1_value", "idtf_lvl1", "idtf_edge", "idtf_set", 
                         "idtf_set_elements", "idtf_atomic", "idtf_url", 
                         "idtf_common", "idtf_list", "internal_sentence", 
                         "internal_sentence_list", "sentence_lvl1", "sentence_lvl_4_list_item", 
                         "sentence_lvl_common", "attr_list" ];

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
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 52;
	            this.match(scsParser.T__0);
	        }

	        this.state = 55;
	        localctx.c = this.match(scsParser.CONTENT_BODY);
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
	        this.state = 57;
	        this.match(scsParser.CONTOUR_BEGIN);

	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967290) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2146435071) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 14085) !== 0)) {
	            this.state = 62;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 58;
	                this.sentence_wrap();
	                break;

	            case 2:
	                this.state = 59;
	                this.sentence_lvl_4_list_item();
	                this.state = 60;
	                this.match(scsParser.T__1);
	                break;

	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 67;
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



	connector() {
	    let localctx = new ConnectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, scsParser.RULE_connector);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        localctx.c = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 524287) !== 0))) {
	            localctx.c = this._errHandler.recoverInline(this);
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



	syntax() {
	    let localctx = new SyntaxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, scsParser.RULE_syntax);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===5 || ((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 115388413) !== 0)) {
	            this.state = 71;
	            this.sentence_wrap();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 77;
	        this.match(scsParser.EOF);
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
	    this.enterRule(localctx, 8, scsParser.RULE_sentence_wrap);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.sentence();
	        this.state = 80;
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
	    this.enterRule(localctx, 10, scsParser.RULE_sentence);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.sentence_lvl1();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.sentence_assign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.sentence_assign_contour();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.sentence_lvl_common();
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



	idtf_alias() {
	    let localctx = new Idtf_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, scsParser.RULE_idtf_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(scsParser.ALIAS_SYMBOLS);
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
	    this.enterRule(localctx, 14, scsParser.RULE_idtf_system);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 72:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.match(scsParser.ID_SYSTEM);
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.match(scsParser.T__50);
	            break;
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            localctx.type = this.idtf_lvl1_preffix();
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



	sentence_assign() {
	    let localctx = new Sentence_assignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, scsParser.RULE_sentence_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(scsParser.ALIAS_SYMBOLS);
	        this.state = 96;
	        this.match(scsParser.T__51);
	        this.state = 97;
	        localctx.i = this.idtf_common();
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



	sentence_assign_contour() {
	    let localctx = new Sentence_assign_contourContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, scsParser.RULE_sentence_assign_contour);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        localctx.a = this.idtf_system();
	        this.state = 100;
	        this.match(scsParser.T__51);
	        this.state = 101;
	        this.contour();
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
	    this.enterRule(localctx, 20, scsParser.RULE_idtf_lvl1_preffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        localctx.type = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 1023) !== 0))) {
	            localctx.type = this._errHandler.recoverInline(this);
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
	    this.enterRule(localctx, 22, scsParser.RULE_idtf_lvl1_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        localctx.type = this.idtf_lvl1_preffix();
	        this.state = 106;
	        this.match(scsParser.T__62);
	        this.state = 107;
	        localctx.i = this.match(scsParser.ID_SYSTEM);
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
	    this.enterRule(localctx, 24, scsParser.RULE_idtf_lvl1);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.idtf_lvl1_value();
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
	    this.enterRule(localctx, 26, scsParser.RULE_idtf_edge);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(scsParser.T__63);
	        this.state = 112;
	        localctx.src = this.idtf_atomic();
	        this.state = 113;
	        localctx.c = this.connector();
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 114;
	            localctx.attrs = this.attr_list();

	        }
	        this.state = 117;
	        localctx.trg = this.idtf_atomic();
	        this.state = 118;
	        this.match(scsParser.T__64);
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
	    this.enterRule(localctx, 28, scsParser.RULE_idtf_set);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120;
	            this.match(scsParser.T__65);
	            this.state = 121;
	            localctx.ctx_s = this.idtf_set_elements();
	            this.state = 122;
	            this.match(scsParser.T__66);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.match(scsParser.T__4);
	            this.state = 125;
	            localctx.ctx_v = this.idtf_set_elements();
	            this.state = 126;
	            this.match(scsParser.T__3);
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



	idtf_set_elements() {
	    let localctx = new Idtf_set_elementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, scsParser.RULE_idtf_set_elements);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 130;
	            localctx.a1 = this.attr_list();

	        }
	        this.state = 133;
	        localctx.i1 = this.idtf_common();
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===69) {
	            this.state = 134;
	            this.internal_sentence_list();
	        }

	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===68) {
	            this.state = 137;
	            this.match(scsParser.T__67);
	            this.state = 139;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            if(la_===1) {
	                this.state = 138;
	                localctx.a2 = this.attr_list();

	            }
	            this.state = 141;
	            localctx.i2 = this.idtf_common();
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===69) {
	                this.state = 142;
	                this.internal_sentence_list();
	            }

	            this.state = 149;
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



	idtf_atomic() {
	    let localctx = new Idtf_atomicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, scsParser.RULE_idtf_atomic);
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 73:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 150;
	            localctx.a = this.idtf_alias();
	            break;
	        case 51:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 72:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 151;
	            localctx.is = this.idtf_system();
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



	idtf_url() {
	    let localctx = new Idtf_urlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, scsParser.RULE_idtf_url);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(scsParser.LINK);
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
	    this.enterRule(localctx, 36, scsParser.RULE_idtf_common);
	    try {
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 72:
	        case 73:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 156;
	            localctx.a = this.idtf_atomic();
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 157;
	            localctx.ie = this.idtf_edge();
	            break;
	        case 5:
	        case 66:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 158;
	            localctx.iset = this.idtf_set();
	            break;
	        case 74:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 159;
	            localctx.ct = this.contour();
	            break;
	        case 1:
	        case 76:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 160;
	            localctx.cn = this.content();
	            break;
	        case 77:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 161;
	            localctx.u = this.idtf_url();
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



	idtf_list() {
	    let localctx = new Idtf_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, scsParser.RULE_idtf_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        localctx.i1 = this.idtf_common();
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===69) {
	            this.state = 165;
	            this.internal_sentence_list();
	        }

	        this.state = 175;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 168;
	                this.match(scsParser.T__67);
	                this.state = 169;
	                localctx.i2 = this.idtf_common();
	                this.state = 171;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===69) {
	                    this.state = 170;
	                    this.internal_sentence_list();
	                }
	         
	            }
	            this.state = 177;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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
	    this.enterRule(localctx, 40, scsParser.RULE_internal_sentence);
	    try {
	        this.state = 185;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            localctx.c = this.connector();
	            this.state = 180;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            if(la_===1) {
	                this.state = 179;
	                localctx.attrs = this.attr_list();

	            }
	            this.state = 182;
	            localctx.targets = this.idtf_list();
	            break;
	        case 69:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.internal_sentence_list();
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



	internal_sentence_list() {
	    let localctx = new Internal_sentence_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, scsParser.RULE_internal_sentence_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(scsParser.T__68);
	        this.state = 191; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 188;
	            this.internal_sentence();
	            this.state = 189;
	            this.match(scsParser.T__1);
	            this.state = 193; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 524287) !== 0) || _la===69);
	        this.state = 195;
	        this.match(scsParser.T__69);
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
	    this.enterRule(localctx, 44, scsParser.RULE_sentence_lvl1);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        localctx.src = this.idtf_lvl1();
	        this.state = 198;
	        this.match(scsParser.T__70);
	        this.state = 199;
	        localctx.edge = this.idtf_lvl1();
	        this.state = 200;
	        this.match(scsParser.T__70);
	        this.state = 201;
	        localctx.trg = this.idtf_lvl1();
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



	sentence_lvl_4_list_item() {
	    let localctx = new Sentence_lvl_4_list_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, scsParser.RULE_sentence_lvl_4_list_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        localctx.c = this.connector();
	        this.state = 205;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        if(la_===1) {
	            this.state = 204;
	            localctx.attrs = this.attr_list();

	        }
	        this.state = 207;
	        localctx.targets = this.idtf_list();
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
	    this.enterRule(localctx, 48, scsParser.RULE_sentence_lvl_common);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        localctx.src = this.idtf_common();
	        this.state = 210;
	        this.sentence_lvl_4_list_item();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===68) {
	            this.state = 211;
	            this.match(scsParser.T__67);
	            this.state = 212;
	            this.sentence_lvl_4_list_item();
	            this.state = 217;
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
	    this.enterRule(localctx, 50, scsParser.RULE_attr_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 218;
	        		this.match(scsParser.ID_SYSTEM);
	        		this.state = 219;
	        		this.match(scsParser.EDGE_ATTR);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 222; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,23, this._ctx);
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
scsParser.T__19 = 20;
scsParser.T__20 = 21;
scsParser.T__21 = 22;
scsParser.T__22 = 23;
scsParser.T__23 = 24;
scsParser.T__24 = 25;
scsParser.T__25 = 26;
scsParser.T__26 = 27;
scsParser.T__27 = 28;
scsParser.T__28 = 29;
scsParser.T__29 = 30;
scsParser.T__30 = 31;
scsParser.T__31 = 32;
scsParser.T__32 = 33;
scsParser.T__33 = 34;
scsParser.T__34 = 35;
scsParser.T__35 = 36;
scsParser.T__36 = 37;
scsParser.T__37 = 38;
scsParser.T__38 = 39;
scsParser.T__39 = 40;
scsParser.T__40 = 41;
scsParser.T__41 = 42;
scsParser.T__42 = 43;
scsParser.T__43 = 44;
scsParser.T__44 = 45;
scsParser.T__45 = 46;
scsParser.T__46 = 47;
scsParser.T__47 = 48;
scsParser.T__48 = 49;
scsParser.T__49 = 50;
scsParser.T__50 = 51;
scsParser.T__51 = 52;
scsParser.T__52 = 53;
scsParser.T__53 = 54;
scsParser.T__54 = 55;
scsParser.T__55 = 56;
scsParser.T__56 = 57;
scsParser.T__57 = 58;
scsParser.T__58 = 59;
scsParser.T__59 = 60;
scsParser.T__60 = 61;
scsParser.T__61 = 62;
scsParser.T__62 = 63;
scsParser.T__63 = 64;
scsParser.T__64 = 65;
scsParser.T__65 = 66;
scsParser.T__66 = 67;
scsParser.T__67 = 68;
scsParser.T__68 = 69;
scsParser.T__69 = 70;
scsParser.T__70 = 71;
scsParser.ID_SYSTEM = 72;
scsParser.ALIAS_SYMBOLS = 73;
scsParser.CONTOUR_BEGIN = 74;
scsParser.CONTOUR_END = 75;
scsParser.CONTENT_BODY = 76;
scsParser.LINK = 77;
scsParser.EDGE_ATTR = 78;
scsParser.LINE_TERMINATOR = 79;
scsParser.LINE_COMMENT = 80;
scsParser.MULTINE_COMMENT = 81;
scsParser.WS = 82;

scsParser.RULE_content = 0;
scsParser.RULE_contour = 1;
scsParser.RULE_connector = 2;
scsParser.RULE_syntax = 3;
scsParser.RULE_sentence_wrap = 4;
scsParser.RULE_sentence = 5;
scsParser.RULE_idtf_alias = 6;
scsParser.RULE_idtf_system = 7;
scsParser.RULE_sentence_assign = 8;
scsParser.RULE_sentence_assign_contour = 9;
scsParser.RULE_idtf_lvl1_preffix = 10;
scsParser.RULE_idtf_lvl1_value = 11;
scsParser.RULE_idtf_lvl1 = 12;
scsParser.RULE_idtf_edge = 13;
scsParser.RULE_idtf_set = 14;
scsParser.RULE_idtf_set_elements = 15;
scsParser.RULE_idtf_atomic = 16;
scsParser.RULE_idtf_url = 17;
scsParser.RULE_idtf_common = 18;
scsParser.RULE_idtf_list = 19;
scsParser.RULE_internal_sentence = 20;
scsParser.RULE_internal_sentence_list = 21;
scsParser.RULE_sentence_lvl1 = 22;
scsParser.RULE_sentence_lvl_4_list_item = 23;
scsParser.RULE_sentence_lvl_common = 24;
scsParser.RULE_attr_list = 25;

export class ContentContext extends antlr4.ParserRuleContext {

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
        this.c = null;
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class ContourContext extends antlr4.ParserRuleContext {

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

	sentence_lvl_4_list_item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sentence_lvl_4_list_itemContext);
	    } else {
	        return this.getTypedRuleContext(Sentence_lvl_4_list_itemContext,i);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitContour(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class ConnectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_connector;
        this.c = null;
    }


	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterConnector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitConnector(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitConnector(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class SyntaxContext extends antlr4.ParserRuleContext {

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

	EOF() {
	    return this.getToken(scsParser.EOF, 0);
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
	        listener.enterSyntax(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSyntax(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitSyntax(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Sentence_wrapContext extends antlr4.ParserRuleContext {

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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitSentence_wrap(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class SentenceContext extends antlr4.ParserRuleContext {

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

	sentence_assign() {
	    return this.getTypedRuleContext(Sentence_assignContext,0);
	};

	sentence_assign_contour() {
	    return this.getTypedRuleContext(Sentence_assign_contourContext,0);
	};

	sentence_lvl_common() {
	    return this.getTypedRuleContext(Sentence_lvl_commonContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_alias;
    }

	ALIAS_SYMBOLS() {
	    return this.getToken(scsParser.ALIAS_SYMBOLS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_alias(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_alias(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_systemContext extends antlr4.ParserRuleContext {

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
        this.type = null;
    }

	ID_SYSTEM() {
	    return this.getToken(scsParser.ID_SYSTEM, 0);
	};

	idtf_lvl1_preffix() {
	    return this.getTypedRuleContext(Idtf_lvl1_preffixContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_system(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Sentence_assignContext extends antlr4.ParserRuleContext {

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
        this.i = null;
    }

	ALIAS_SYMBOLS() {
	    return this.getToken(scsParser.ALIAS_SYMBOLS, 0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitSentence_assign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Sentence_assign_contourContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_sentence_assign_contour;
        this.a = null;
    }

	contour() {
	    return this.getTypedRuleContext(ContourContext,0);
	};

	idtf_system() {
	    return this.getTypedRuleContext(Idtf_systemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterSentence_assign_contour(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSentence_assign_contour(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitSentence_assign_contour(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_lvl1_preffixContext extends antlr4.ParserRuleContext {

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
        this.type = null;
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_lvl1_preffix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_lvl1_valueContext extends antlr4.ParserRuleContext {

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
        this.type = null;
        this.i = null;
    }

	idtf_lvl1_preffix() {
	    return this.getTypedRuleContext(Idtf_lvl1_preffixContext,0);
	};

	ID_SYSTEM() {
	    return this.getToken(scsParser.ID_SYSTEM, 0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_lvl1_value(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_lvl1Context extends antlr4.ParserRuleContext {

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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_lvl1(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_edgeContext extends antlr4.ParserRuleContext {

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
        this.src = null;
        this.c = null;
        this.attrs = null;
        this.trg = null;
    }

	idtf_atomic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Idtf_atomicContext);
	    } else {
	        return this.getTypedRuleContext(Idtf_atomicContext,i);
	    }
	};

	connector() {
	    return this.getTypedRuleContext(ConnectorContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_edge(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_setContext extends antlr4.ParserRuleContext {

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
        this.ctx_s = null;
        this.ctx_v = null;
    }

	idtf_set_elements() {
	    return this.getTypedRuleContext(Idtf_set_elementsContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_set(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_set_elementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_set_elements;
        this.a1 = null;
        this.i1 = null;
        this.a2 = null;
        this.i2 = null;
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
	        listener.enterIdtf_set_elements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_set_elements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_set_elements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_atomicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_atomic;
        this.a = null;
        this.is = null;
    }

	idtf_alias() {
	    return this.getTypedRuleContext(Idtf_aliasContext,0);
	};

	idtf_system() {
	    return this.getTypedRuleContext(Idtf_systemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_atomic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_atomic(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_atomic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_urlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_idtf_url;
    }

	LINK() {
	    return this.getToken(scsParser.LINK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterIdtf_url(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitIdtf_url(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_url(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_commonContext extends antlr4.ParserRuleContext {

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
        this.a = null;
        this.ie = null;
        this.iset = null;
        this.ct = null;
        this.cn = null;
        this.u = null;
    }

	idtf_atomic() {
	    return this.getTypedRuleContext(Idtf_atomicContext,0);
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

	idtf_url() {
	    return this.getTypedRuleContext(Idtf_urlContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_common(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Idtf_listContext extends antlr4.ParserRuleContext {

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
        this.i1 = null;
        this.i2 = null;
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitIdtf_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Internal_sentenceContext extends antlr4.ParserRuleContext {

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
        this.c = null;
        this.attrs = null;
        this.targets = null;
    }

	connector() {
	    return this.getTypedRuleContext(ConnectorContext,0);
	};

	idtf_list() {
	    return this.getTypedRuleContext(Idtf_listContext,0);
	};

	attr_list() {
	    return this.getTypedRuleContext(Attr_listContext,0);
	};

	internal_sentence_list() {
	    return this.getTypedRuleContext(Internal_sentence_listContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitInternal_sentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Internal_sentence_listContext extends antlr4.ParserRuleContext {

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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitInternal_sentence_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Sentence_lvl1Context extends antlr4.ParserRuleContext {

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
        this.src = null;
        this.edge = null;
        this.trg = null;
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitSentence_lvl1(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Sentence_lvl_4_list_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scsParser.RULE_sentence_lvl_4_list_item;
        this.c = null;
        this.attrs = null;
        this.targets = null;
    }

	connector() {
	    return this.getTypedRuleContext(ConnectorContext,0);
	};

	idtf_list() {
	    return this.getTypedRuleContext(Idtf_listContext,0);
	};

	attr_list() {
	    return this.getTypedRuleContext(Attr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.enterSentence_lvl_4_list_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scsListener ) {
	        listener.exitSentence_lvl_4_list_item(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitSentence_lvl_4_list_item(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Sentence_lvl_commonContext extends antlr4.ParserRuleContext {

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
        this.src = null;
    }

	sentence_lvl_4_list_item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sentence_lvl_4_list_itemContext);
	    } else {
	        return this.getTypedRuleContext(Sentence_lvl_4_list_itemContext,i);
	    }
	};

	idtf_common() {
	    return this.getTypedRuleContext(Idtf_commonContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitSentence_lvl_common(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



export class Attr_listContext extends antlr4.ParserRuleContext {

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

	accept(visitor) {
	    if ( visitor instanceof scsVisitor ) {
	        return visitor.visitAttr_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




scsParser.ContentContext = ContentContext; 
scsParser.ContourContext = ContourContext; 
scsParser.ConnectorContext = ConnectorContext; 
scsParser.SyntaxContext = SyntaxContext; 
scsParser.Sentence_wrapContext = Sentence_wrapContext; 
scsParser.SentenceContext = SentenceContext; 
scsParser.Idtf_aliasContext = Idtf_aliasContext; 
scsParser.Idtf_systemContext = Idtf_systemContext; 
scsParser.Sentence_assignContext = Sentence_assignContext; 
scsParser.Sentence_assign_contourContext = Sentence_assign_contourContext; 
scsParser.Idtf_lvl1_preffixContext = Idtf_lvl1_preffixContext; 
scsParser.Idtf_lvl1_valueContext = Idtf_lvl1_valueContext; 
scsParser.Idtf_lvl1Context = Idtf_lvl1Context; 
scsParser.Idtf_edgeContext = Idtf_edgeContext; 
scsParser.Idtf_setContext = Idtf_setContext; 
scsParser.Idtf_set_elementsContext = Idtf_set_elementsContext; 
scsParser.Idtf_atomicContext = Idtf_atomicContext; 
scsParser.Idtf_urlContext = Idtf_urlContext; 
scsParser.Idtf_commonContext = Idtf_commonContext; 
scsParser.Idtf_listContext = Idtf_listContext; 
scsParser.Internal_sentenceContext = Internal_sentenceContext; 
scsParser.Internal_sentence_listContext = Internal_sentence_listContext; 
scsParser.Sentence_lvl1Context = Sentence_lvl1Context; 
scsParser.Sentence_lvl_4_list_itemContext = Sentence_lvl_4_list_itemContext; 
scsParser.Sentence_lvl_commonContext = Sentence_lvl_commonContext; 
scsParser.Attr_listContext = Attr_listContext; 
