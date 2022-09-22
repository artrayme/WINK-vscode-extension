// Generated from c:\Users\ArtsemiVasileuski\Documents\WINK-vscode-extension\SCs-language-server\src\syntax\scs.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003!\u00ca\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0003\u0002\u0005\u0002*\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u00023",
    "\n\u0002\u0007\u00025\n\u0002\f\u0002\u000e\u00028\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0005\u0003=\n\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003A\n\u0003\f\u0003\u000e\u0003D\u000b\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0007\u0004J\n\u0004\f\u0004\u000e",
    "\u0004M\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006U\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0005",
    "\t`\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0005\nf\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000bk\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0005\fq\n\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\rx\n\r",
    "\u0003\r\u0003\r\u0003\r\u0005\r}\n\r\u0003\r\u0007\r\u0080\n\r\f\r",
    "\u000e\r\u0083\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u008d\n\u000e",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u0091\n\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u0096\n\u000f\u0007\u000f\u0098\n\u000f",
    "\f\u000f\u000e\u000f\u009b\u000b\u000f\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u009f\n\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0006\u0011\u00a7\n\u0011\r\u0011\u000e\u0011",
    "\u00a8\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u00b6\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u00bc\n\u0013\u0003\u0013\u0007\u0013\u00bf\n\u0013\f\u0013",
    "\u000e\u0013\u00c2\u000b\u0013\u0003\u0014\u0003\u0014\u0006\u0014\u00c6",
    "\n\u0014\r\u0014\u000e\u0014\u00c7\u0003\u0014\u0002\u0002\u0015\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&\u0002\u0004\u0003\u0002\u0004\u0005\u0003\u0002\n\u000f\u0002",
    "\u00d4\u0002)\u0003\u0002\u0002\u0002\u0004<\u0003\u0002\u0002\u0002",
    "\u0006K\u0003\u0002\u0002\u0002\bN\u0003\u0002\u0002\u0002\nT\u0003",
    "\u0002\u0002\u0002\fV\u0003\u0002\u0002\u0002\u000eZ\u0003\u0002\u0002",
    "\u0002\u0010_\u0003\u0002\u0002\u0002\u0012e\u0003\u0002\u0002\u0002",
    "\u0014j\u0003\u0002\u0002\u0002\u0016l\u0003\u0002\u0002\u0002\u0018",
    "u\u0003\u0002\u0002\u0002\u001a\u008c\u0003\u0002\u0002\u0002\u001c",
    "\u008e\u0003\u0002\u0002\u0002\u001e\u009c\u0003\u0002\u0002\u0002 ",
    "\u00a2\u0003\u0002\u0002\u0002\"\u00ac\u0003\u0002\u0002\u0002$\u00b2",
    "\u0003\u0002\u0002\u0002&\u00c5\u0003\u0002\u0002\u0002(*\u0007\u0003",
    "\u0002\u0002)(\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0003",
    "\u0002\u0002\u0002+6\u0007\u0004\u0002\u0002,2\u0006\u0002\u0002\u0002",
    "-3\n\u0002\u0002\u0002./\u0007\u0004\u0002\u0002/3\b\u0002\u0001\u0002",
    "01\u0007\u0005\u0002\u000213\b\u0002\u0001\u00022-\u0003\u0002\u0002",
    "\u00022.\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000235\u0003\u0002",
    "\u0002\u00024,\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u000264\u0003",
    "\u0002\u0002\u000267\u0003\u0002\u0002\u000279\u0003\u0002\u0002\u0002",
    "86\u0003\u0002\u0002\u00029:\b\u0002\u0001\u0002:\u0003\u0003\u0002",
    "\u0002\u0002;=\u0007\u0003\u0002\u0002<;\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>B\u0007\u0006\u0002\u0002",
    "?A\u0005\b\u0005\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002",
    "\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CE\u0003\u0002",
    "\u0002\u0002DB\u0003\u0002\u0002\u0002EF\u0007\u0007\u0002\u0002FG\b",
    "\u0003\u0001\u0002G\u0005\u0003\u0002\u0002\u0002HJ\u0005\b\u0005\u0002",
    "IH\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002",
    "\u0002KL\u0003\u0002\u0002\u0002L\u0007\u0003\u0002\u0002\u0002MK\u0003",
    "\u0002\u0002\u0002NO\u0005\n\u0006\u0002OP\u0007\b\u0002\u0002P\t\u0003",
    "\u0002\u0002\u0002QU\u0005\"\u0012\u0002RU\u0005$\u0013\u0002SU\u0005",
    "\f\u0007\u0002TQ\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002T",
    "S\u0003\u0002\u0002\u0002U\u000b\u0003\u0002\u0002\u0002VW\u0007\u001a",
    "\u0002\u0002WX\u0007\t\u0002\u0002XY\u0005\u001a\u000e\u0002Y\r\u0003",
    "\u0002\u0002\u0002Z[\t\u0003\u0002\u0002[\u000f\u0003\u0002\u0002\u0002",
    "\\]\u0005\u000e\b\u0002]^\u0007\u0010\u0002\u0002^`\u0003\u0002\u0002",
    "\u0002_\\\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`a\u0003",
    "\u0002\u0002\u0002ab\u0005\u0014\u000b\u0002b\u0011\u0003\u0002\u0002",
    "\u0002cf\u0005\u0010\t\u0002df\u0007\u001b\u0002\u0002ec\u0003\u0002",
    "\u0002\u0002ed\u0003\u0002\u0002\u0002f\u0013\u0003\u0002\u0002\u0002",
    "gh\u0007\u001a\u0002\u0002hk\b\u000b\u0001\u0002ik\u0007\u0011\u0002",
    "\u0002jg\u0003\u0002\u0002\u0002ji\u0003\u0002\u0002\u0002k\u0015\u0003",
    "\u0002\u0002\u0002lm\u0007\u0012\u0002\u0002mn\u0005\u0014\u000b\u0002",
    "np\u0007\u001c\u0002\u0002oq\u0005&\u0014\u0002po\u0003\u0002\u0002",
    "\u0002pq\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rs\u0005\u0014",
    "\u000b\u0002st\u0007\u0013\u0002\u0002t\u0017\u0003\u0002\u0002\u0002",
    "uw\u0007\u0014\u0002\u0002vx\u0005&\u0014\u0002wv\u0003\u0002\u0002",
    "\u0002wx\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y\u0081\u0005",
    "\u001a\u000e\u0002z|\u0007\u0015\u0002\u0002{}\u0005&\u0014\u0002|{",
    "\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002",
    "\u0002~\u0080\u0005\u001a\u000e\u0002\u007fz\u0003\u0002\u0002\u0002",
    "\u0080\u0083\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0084\u0003\u0002\u0002\u0002",
    "\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0016\u0002\u0002",
    "\u0085\u0019\u0003\u0002\u0002\u0002\u0086\u008d\u0005\u0014\u000b\u0002",
    "\u0087\u008d\u0005\u0016\f\u0002\u0088\u008d\u0005\u0018\r\u0002\u0089",
    "\u008d\u0005\u0004\u0003\u0002\u008a\u008d\u0005\u0002\u0002\u0002\u008b",
    "\u008d\u0007\u001b\u0002\u0002\u008c\u0086\u0003\u0002\u0002\u0002\u008c",
    "\u0087\u0003\u0002\u0002\u0002\u008c\u0088\u0003\u0002\u0002\u0002\u008c",
    "\u0089\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c",
    "\u008b\u0003\u0002\u0002\u0002\u008d\u001b\u0003\u0002\u0002\u0002\u008e",
    "\u0090\u0005\u001a\u000e\u0002\u008f\u0091\u0005 \u0011\u0002\u0090",
    "\u008f\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091",
    "\u0099\u0003\u0002\u0002\u0002\u0092\u0093\u0007\u0015\u0002\u0002\u0093",
    "\u0095\u0005\u001a\u000e\u0002\u0094\u0096\u0005 \u0011\u0002\u0095",
    "\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096",
    "\u0098\u0003\u0002\u0002\u0002\u0097\u0092\u0003\u0002\u0002\u0002\u0098",
    "\u009b\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0003\u0002\u0002\u0002\u009a\u001d\u0003\u0002\u0002\u0002\u009b",
    "\u0099\u0003\u0002\u0002\u0002\u009c\u009e\u0007\u001c\u0002\u0002\u009d",
    "\u009f\u0005&\u0014\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009e",
    "\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0",
    "\u00a1\u0005\u001c\u000f\u0002\u00a1\u001f\u0003\u0002\u0002\u0002\u00a2",
    "\u00a6\u0007\u0017\u0002\u0002\u00a3\u00a4\u0005\u001e\u0010\u0002\u00a4",
    "\u00a5\u0007\b\u0002\u0002\u00a5\u00a7\u0003\u0002\u0002\u0002\u00a6",
    "\u00a3\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8",
    "\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9",
    "\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007\u0018\u0002\u0002\u00ab",
    "!\u0003\u0002\u0002\u0002\u00ac\u00ad\u0005\u0012\n\u0002\u00ad\u00ae",
    "\u0007\u0019\u0002\u0002\u00ae\u00af\u0005\u0012\n\u0002\u00af\u00b0",
    "\u0007\u0019\u0002\u0002\u00b0\u00b1\u0005\u0012\n\u0002\u00b1#\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\u0005\u001a\u000e\u0002\u00b3\u00b5\u0007",
    "\u001c\u0002\u0002\u00b4\u00b6\u0005&\u0014\u0002\u00b5\u00b4\u0003",
    "\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003",
    "\u0002\u0002\u0002\u00b7\u00c0\u0005\u001c\u000f\u0002\u00b8\u00b9\u0007",
    "\u0015\u0002\u0002\u00b9\u00bb\u0007\u001c\u0002\u0002\u00ba\u00bc\u0005",
    "&\u0014\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00bf\u0005",
    "\u001c\u000f\u0002\u00be\u00b8\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003",
    "\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003",
    "\u0002\u0002\u0002\u00c1%\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0007\u001a\u0002\u0002\u00c4\u00c6\u0007",
    "\u001d\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003",
    "\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003",
    "\u0002\u0002\u0002\u00c8\'\u0003\u0002\u0002\u0002\u001a)26<BKT_ejp",
    "w|\u0081\u008c\u0090\u0095\u0099\u009e\u00a8\u00b5\u00bb\u00c0\u00c7"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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


        this.parsedData = null;
        this.docUri = '';

        var self = this;

        this.makeLocation = function(obj) {
          return location = {
            line: obj.line,
            offset: obj.pos,
            len: obj.text.length
          };
        };

        this.makeError = function(token, msg) {
          
          self.parsedData._onAppendError(self.docUri, {
            line: token.line - 1,
            offset: token.pos,
            len: token.text.length,
            msg: msg
          });
        };


    }

    get atn() {
        return atn;
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
	    count = 1; 
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===scsParser.T__0) {
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
	                    this.state = 43;
	                    _la = this._input.LA(1);
	                    if(_la<=0 || _la===scsParser.T__1 || _la===scsParser.T__2) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    break;
	                case scsParser.T__1:
	                    this.state = 44;
	                    this.match(scsParser.T__1);
	                     count++; 
	                    break;
	                case scsParser.T__2:
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

	         
	              var tok = { line: (localctx.r === null ? 0 : localctx.r.line), pos: (localctx.r === null ? 0 : localctx.r.column), text: (localctx.r===null ? null : localctx.r.text)};
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
	    count = 1;
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===scsParser.T__0) {
	            this.state = 57;
	            this.match(scsParser.T__0);
	        }

	        this.state = 60;
	        localctx.b = this.match(scsParser.T__3);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << scsParser.T__0) | (1 << scsParser.T__1) | (1 << scsParser.T__3) | (1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12) | (1 << scsParser.T__14) | (1 << scsParser.T__15) | (1 << scsParser.T__17) | (1 << scsParser.ID_SYSTEM) | (1 << scsParser.LINK))) !== 0)) {
	            this.state = 61;
	            this.sentence_wrap();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 67;
	        localctx.e = this.match(scsParser.T__4);

	              var tok = { line: (localctx.b === null ? 0 : localctx.b.line), pos: (localctx.b === null ? 0 : localctx.b.column), text: (localctx.b===null ? null : localctx.b.text) };
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << scsParser.T__0) | (1 << scsParser.T__1) | (1 << scsParser.T__3) | (1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12) | (1 << scsParser.T__14) | (1 << scsParser.T__15) | (1 << scsParser.T__17) | (1 << scsParser.ID_SYSTEM) | (1 << scsParser.LINK))) !== 0)) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << scsParser.T__7) | (1 << scsParser.T__8) | (1 << scsParser.T__9) | (1 << scsParser.T__10) | (1 << scsParser.T__11) | (1 << scsParser.T__12))) !== 0)) {
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
	        case scsParser.T__7:
	        case scsParser.T__8:
	        case scsParser.T__9:
	        case scsParser.T__10:
	        case scsParser.T__11:
	        case scsParser.T__12:
	        case scsParser.T__14:
	        case scsParser.ID_SYSTEM:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.idtf_lvl1_value();
	            break;
	        case scsParser.LINK:
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
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case scsParser.ID_SYSTEM:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            localctx._ID_SYSTEM = this.match(scsParser.ID_SYSTEM);

	                  const loc = this.makeLocation(localctx._ID_SYSTEM);
	                  this.parsedData._onAppendSymbol(this.docUri, (localctx._ID_SYSTEM===null ? null : localctx._ID_SYSTEM.text), loc);
	                
	            break;
	        case scsParser.T__14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.match(scsParser.T__14);
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



	idtf_edge() {
	    let localctx = new Idtf_edgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, scsParser.RULE_idtf_edge);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(scsParser.T__15);
	        this.state = 107;
	        this.idtf_system();
	        this.state = 108;
	        this.match(scsParser.CONNECTOR);
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 109;
	            this.attr_list();

	        }
	        this.state = 112;
	        this.idtf_system();
	        this.state = 113;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(scsParser.T__17);
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 116;
	            this.attr_list();

	        }
	        this.state = 119;
	        this.idtf_common();
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===scsParser.T__18) {
	            this.state = 120;
	            this.match(scsParser.T__18);
	            this.state = 122;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	            if(la_===1) {
	                this.state = 121;
	                this.attr_list();

	            }
	            this.state = 124;
	            this.idtf_common();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 130;
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
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.idtf_system();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.idtf_edge();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 134;
	            this.idtf_set();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 135;
	            this.contour();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 136;
	            this.content();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 137;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.idtf_common();
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===scsParser.T__20) {
	            this.state = 141;
	            this.internal_sentence_list();
	        }

	        this.state = 151;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 144;
	                this.match(scsParser.T__18);
	                this.state = 145;
	                this.idtf_common();
	                this.state = 147;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===scsParser.T__20) {
	                    this.state = 146;
	                    this.internal_sentence_list();
	                }
	         
	            }
	            this.state = 153;
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
	    this.enterRule(localctx, 28, scsParser.RULE_internal_sentence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(scsParser.CONNECTOR);
	        this.state = 156;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 155;
	            this.attr_list();

	        }
	        this.state = 158;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(scsParser.T__20);
	        this.state = 164; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 161;
	            this.internal_sentence();
	            this.state = 162;
	            this.match(scsParser.T__5);
	            this.state = 166; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===scsParser.CONNECTOR);
	        this.state = 168;
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
	        this.state = 170;
	        this.idtf_lvl1();
	        this.state = 171;
	        this.match(scsParser.T__22);
	        this.state = 172;
	        this.idtf_lvl1();
	        this.state = 173;
	        this.match(scsParser.T__22);
	        this.state = 174;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.idtf_common();
	        this.state = 177;
	        this.match(scsParser.CONNECTOR);
	        this.state = 179;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 178;
	            this.attr_list();

	        }
	        this.state = 181;
	        this.idtf_list();
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===scsParser.T__18) {
	            this.state = 182;
	            this.match(scsParser.T__18);
	            this.state = 183;
	            this.match(scsParser.CONNECTOR);
	            this.state = 185;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            if(la_===1) {
	                this.state = 184;
	                this.attr_list();

	            }
	            this.state = 187;
	            this.idtf_list();
	            this.state = 192;
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
	        this.state = 195; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 193;
	        		this.match(scsParser.ID_SYSTEM);
	        		this.state = 194;
	        		this.match(scsParser.EDGE_ATTR);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 197; 
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
        this.r = null; // Token
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
        this.b = null; // Token
        this.e = null; // Token
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
        this._ID_SYSTEM = null; // Token
    }

	ID_SYSTEM() {
	    return this.getToken(scsParser.ID_SYSTEM, 0);
	};


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
