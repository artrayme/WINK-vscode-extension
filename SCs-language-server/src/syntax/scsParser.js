// Generated from ./src/syntax/scs.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import scsListener from './scsListener.js';
const serializedATN = [4,1,31,197,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,3,0,40,8,
0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,49,8,0,5,0,51,8,0,10,0,12,0,54,9,0,1,0,
1,0,1,1,3,1,59,8,1,1,1,1,1,5,1,63,8,1,10,1,12,1,66,9,1,1,1,1,1,1,1,1,2,5,
2,72,8,2,10,2,12,2,75,9,2,1,3,1,3,1,3,1,4,1,4,1,4,3,4,83,8,4,1,5,1,5,1,5,
1,5,1,6,1,6,1,7,1,7,1,7,3,7,94,8,7,1,7,1,7,1,8,1,8,3,8,100,8,8,1,9,1,9,1,
10,1,10,1,10,1,10,3,10,108,8,10,1,10,1,10,1,10,1,11,1,11,3,11,115,8,11,1,
11,1,11,1,11,3,11,120,8,11,1,11,5,11,123,8,11,10,11,12,11,126,9,11,1,11,
1,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,136,8,12,1,13,1,13,3,13,140,8,13,
1,13,1,13,1,13,3,13,145,8,13,5,13,147,8,13,10,13,12,13,150,9,13,1,14,1,14,
3,14,154,8,14,1,14,1,14,1,15,1,15,1,15,1,15,4,15,162,8,15,11,15,12,15,163,
1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,3,17,177,8,17,1,17,
1,17,1,17,1,17,3,17,183,8,17,1,17,5,17,186,8,17,10,17,12,17,189,9,17,1,18,
1,18,4,18,193,8,18,11,18,12,18,194,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,0,3,1,0,2,3,1,0,8,13,2,0,15,15,24,24,206,0,39,
1,0,0,0,2,58,1,0,0,0,4,73,1,0,0,0,6,76,1,0,0,0,8,82,1,0,0,0,10,84,1,0,0,
0,12,88,1,0,0,0,14,93,1,0,0,0,16,99,1,0,0,0,18,101,1,0,0,0,20,103,1,0,0,
0,22,112,1,0,0,0,24,135,1,0,0,0,26,137,1,0,0,0,28,151,1,0,0,0,30,157,1,0,
0,0,32,167,1,0,0,0,34,173,1,0,0,0,36,192,1,0,0,0,38,40,5,1,0,0,39,38,1,0,
0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,52,5,2,0,0,42,48,4,0,0,0,43,49,8,0,0,
0,44,45,5,2,0,0,45,49,6,0,-1,0,46,47,5,3,0,0,47,49,6,0,-1,0,48,43,1,0,0,
0,48,44,1,0,0,0,48,46,1,0,0,0,49,51,1,0,0,0,50,42,1,0,0,0,51,54,1,0,0,0,
52,50,1,0,0,0,52,53,1,0,0,0,53,55,1,0,0,0,54,52,1,0,0,0,55,56,6,0,-1,0,56,
1,1,0,0,0,57,59,5,1,0,0,58,57,1,0,0,0,58,59,1,0,0,0,59,60,1,0,0,0,60,64,
5,4,0,0,61,63,3,6,3,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,
0,0,0,65,67,1,0,0,0,66,64,1,0,0,0,67,68,5,5,0,0,68,69,6,1,-1,0,69,3,1,0,
0,0,70,72,3,6,3,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,
0,74,5,1,0,0,0,75,73,1,0,0,0,76,77,3,8,4,0,77,78,5,6,0,0,78,7,1,0,0,0,79,
83,3,32,16,0,80,83,3,34,17,0,81,83,3,10,5,0,82,79,1,0,0,0,82,80,1,0,0,0,
82,81,1,0,0,0,83,9,1,0,0,0,84,85,5,24,0,0,85,86,5,7,0,0,86,87,3,24,12,0,
87,11,1,0,0,0,88,89,7,1,0,0,89,13,1,0,0,0,90,91,3,12,6,0,91,92,5,14,0,0,
92,94,1,0,0,0,93,90,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,3,18,9,0,96,
15,1,0,0,0,97,100,3,14,7,0,98,100,5,25,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,
17,1,0,0,0,101,102,7,2,0,0,102,19,1,0,0,0,103,104,5,16,0,0,104,105,3,18,
9,0,105,107,5,26,0,0,106,108,3,36,18,0,107,106,1,0,0,0,107,108,1,0,0,0,108,
109,1,0,0,0,109,110,3,18,9,0,110,111,5,17,0,0,111,21,1,0,0,0,112,114,5,18,
0,0,113,115,3,36,18,0,114,113,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,
124,3,24,12,0,117,119,5,19,0,0,118,120,3,36,18,0,119,118,1,0,0,0,119,120,
1,0,0,0,120,121,1,0,0,0,121,123,3,24,12,0,122,117,1,0,0,0,123,126,1,0,0,
0,124,122,1,0,0,0,124,125,1,0,0,0,125,127,1,0,0,0,126,124,1,0,0,0,127,128,
5,20,0,0,128,23,1,0,0,0,129,136,3,18,9,0,130,136,3,20,10,0,131,136,3,22,
11,0,132,136,3,2,1,0,133,136,3,0,0,0,134,136,5,25,0,0,135,129,1,0,0,0,135,
130,1,0,0,0,135,131,1,0,0,0,135,132,1,0,0,0,135,133,1,0,0,0,135,134,1,0,
0,0,136,25,1,0,0,0,137,139,3,24,12,0,138,140,3,30,15,0,139,138,1,0,0,0,139,
140,1,0,0,0,140,148,1,0,0,0,141,142,5,19,0,0,142,144,3,24,12,0,143,145,3,
30,15,0,144,143,1,0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,141,1,0,0,0,
147,150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,27,1,0,0,0,150,148,1,
0,0,0,151,153,5,26,0,0,152,154,3,36,18,0,153,152,1,0,0,0,153,154,1,0,0,0,
154,155,1,0,0,0,155,156,3,26,13,0,156,29,1,0,0,0,157,161,5,21,0,0,158,159,
3,28,14,0,159,160,5,6,0,0,160,162,1,0,0,0,161,158,1,0,0,0,162,163,1,0,0,
0,163,161,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,166,5,22,0,0,166,31,
1,0,0,0,167,168,3,16,8,0,168,169,5,23,0,0,169,170,3,16,8,0,170,171,5,23,
0,0,171,172,3,16,8,0,172,33,1,0,0,0,173,174,3,24,12,0,174,176,5,26,0,0,175,
177,3,36,18,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,187,3,
26,13,0,179,180,5,19,0,0,180,182,5,26,0,0,181,183,3,36,18,0,182,181,1,0,
0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,186,3,26,13,0,185,179,1,0,0,0,186,
189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,35,1,0,0,0,189,187,1,0,0,
0,190,191,5,24,0,0,191,193,5,27,0,0,192,190,1,0,0,0,193,194,1,0,0,0,194,
192,1,0,0,0,194,195,1,0,0,0,195,37,1,0,0,0,23,39,48,52,58,64,73,82,93,99,
107,114,119,124,135,139,144,148,153,163,176,182,187,194];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class scsParser extends antlr4.Parser {

    static grammarFileName = "scs.g4";
    static literalNames = [ null, "'_'", "'['", "']'", "'[*'", "'*]'", "';;'", 
                            "'='", "'sc_node'", "'sc_link'", "'sc_edge_dcommon'", 
                            "'sc_edge_ucommon'", "'sc_edge_main'", "'sc_edge_access'", 
                            "'#'", "'...'", "'('", "')'", "'{'", "';'", 
                            "'}'", "'(*'", "'*)'", "'|'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "ID_SYSTEM", "LINK", "CONNECTOR", "EDGE_ATTR", 
                             "LINE_TERMINATOR", "LINE_COMMENT", "MULTINE_COMMENT", 
                             "WS" ];
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

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.content_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    content_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return  count > 0 ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, scsParser.RULE_content);
	     let count = 1; 
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
	        localctx.r = this.match(scsParser.T__1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 42;
	                if (!(  count > 0 )) {
	                    throw new antlr4.error.FailedPredicateException(this, " count > 0 ");
	                }
	                this.state = 48;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
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
	                    this.state = 43;
	                    _la = this._input.LA(1);
	                    if(_la<=0 || _la===2 || _la===3) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    break;
	                case 2:
	                    this.state = 44;
	                    this.match(scsParser.T__1);
	                     count++; 
	                    break;
	                case 3:
	                    this.state = 46;
	                    this.match(scsParser.T__2);
	                     count--; 
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 54;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	         
	               var tok = { line: (localctx.r == null ? 0 : localctx.r.line), pos: (localctx.r == null ? 0 : localctx.r.column), text: (localctx.r == null ? null : localctx.r.text)};
	               if (count > 0) { this.makeError(tok, "Expected ']' symbol"); }
	             
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
	    let count = 1;
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 57;
	            this.match(scsParser.T__0);
	        }

	        this.state = 60;
	        localctx.b = this.match(scsParser.T__3);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 50708246) !== 0)) {
	            this.state = 61;
	            this.sentence_wrap();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 67;
	        localctx.e = this.match(scsParser.T__4);

	               var tok = { line: (localctx.b == null ? 0 : localctx.b.line), pos: (localctx.b == null ? 0 : localctx.b.column), text: (localctx.b == null ? null : localctx.b.text) };
	               if (!localctx.e) { this.makeError(tok, "Expected '*]' symbol"); }
	             
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
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 50708246) !== 0)) {
	            this.state = 70;
	            this.sentence_wrap();
	            this.state = 75;
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
	        this.state = 76;
	        this.sentence();
	        this.state = 77;
	        this.match(scsParser.T__5);
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
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.sentence_lvl1();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
	            this.sentence_lvl_common();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
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
	        this.state = 84;
	        this.match(scsParser.ID_SYSTEM);
	        this.state = 85;
	        this.match(scsParser.T__6);
	        this.state = 86;
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
	        this.state = 88;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16128) !== 0))) {
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
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 16128) !== 0)) {
	            this.state = 90;
	            this.idtf_lvl1_preffix();
	            this.state = 91;
	            this.match(scsParser.T__13);
	        }

	        this.state = 95;
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 15:
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.idtf_lvl1_value();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
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
	        this.state = 101;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===24)) {
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
	        this.state = 103;
	        this.match(scsParser.T__15);
	        this.state = 104;
	        this.idtf_system();
	        this.state = 105;
	        this.match(scsParser.CONNECTOR);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 106;
	            this.attr_list();

	        }
	        this.state = 109;
	        this.idtf_system();
	        this.state = 110;
	        this.match(scsParser.T__16);
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
	        this.state = 112;
	        this.match(scsParser.T__17);
	        this.state = 114;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 113;
	            this.attr_list();

	        }
	        this.state = 116;
	        this.idtf_common();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 117;
	            this.match(scsParser.T__18);
	            this.state = 119;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	            if(la_===1) {
	                this.state = 118;
	                this.attr_list();

	            }
	            this.state = 121;
	            this.idtf_common();
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 127;
	        this.match(scsParser.T__19);
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
	        this.state = 135;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.idtf_system();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.idtf_edge();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.idtf_set();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 132;
	            this.contour();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 133;
	            this.content();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 134;
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
	        this.state = 137;
	        this.idtf_common();
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 138;
	            this.internal_sentence_list();
	        }

	        this.state = 148;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 141;
	                this.match(scsParser.T__18);
	                this.state = 142;
	                this.idtf_common();
	                this.state = 144;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===21) {
	                    this.state = 143;
	                    this.internal_sentence_list();
	                }
	         
	            }
	            this.state = 150;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	        this.state = 151;
	        this.match(scsParser.CONNECTOR);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 152;
	            this.attr_list();

	        }
	        this.state = 155;
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
	        this.state = 157;
	        this.match(scsParser.T__20);
	        this.state = 161; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 158;
	            this.internal_sentence();
	            this.state = 159;
	            this.match(scsParser.T__5);
	            this.state = 163; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===26);
	        this.state = 165;
	        this.match(scsParser.T__21);
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
	        this.state = 167;
	        this.idtf_lvl1();
	        this.state = 168;
	        this.match(scsParser.T__22);
	        this.state = 169;
	        this.idtf_lvl1();
	        this.state = 170;
	        this.match(scsParser.T__22);
	        this.state = 171;
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
	        this.state = 173;
	        this.idtf_common();
	        this.state = 174;
	        this.match(scsParser.CONNECTOR);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 175;
	            this.attr_list();

	        }
	        this.state = 178;
	        this.idtf_list();
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 179;
	            this.match(scsParser.T__18);
	            this.state = 180;
	            this.match(scsParser.CONNECTOR);
	            this.state = 182;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	            if(la_===1) {
	                this.state = 181;
	                this.attr_list();

	            }
	            this.state = 184;
	            this.idtf_list();
	            this.state = 189;
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
	        this.state = 192; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 190;
	        		this.match(scsParser.ID_SYSTEM);
	        		this.state = 191;
	        		this.match(scsParser.EDGE_ATTR);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 194; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
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
scsParser.ID_SYSTEM = 24;
scsParser.LINK = 25;
scsParser.CONNECTOR = 26;
scsParser.EDGE_ATTR = 27;
scsParser.LINE_TERMINATOR = 28;
scsParser.LINE_COMMENT = 29;
scsParser.MULTINE_COMMENT = 30;
scsParser.WS = 31;

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
        this.r = null;
    }


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
        this.b = null;
        this.e = null;
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
