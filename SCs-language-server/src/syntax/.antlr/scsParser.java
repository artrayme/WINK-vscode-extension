// Generated from c:\Users\ArtsemiVasileuski\Documents\WINK-vscode-extension\SCs-language-server\src\syntax\scs.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class scsParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, ID_SYSTEM=24, 
		LINK=25, CONNECTOR=26, EDGE_ATTR=27, LINE_TERMINATOR=28, LINE_COMMENT=29, 
		MULTINE_COMMENT=30, WS=31;
	public static final int
		RULE_content = 0, RULE_contour = 1, RULE_syntax = 2, RULE_sentence_wrap = 3, 
		RULE_sentence = 4, RULE_sentence_assign = 5, RULE_idtf_lvl1_preffix = 6, 
		RULE_idtf_lvl1_value = 7, RULE_idtf_lvl1 = 8, RULE_idtf_system = 9, RULE_idtf_edge = 10, 
		RULE_idtf_set = 11, RULE_idtf_common = 12, RULE_idtf_list = 13, RULE_internal_sentence = 14, 
		RULE_internal_sentence_list = 15, RULE_sentence_lvl1 = 16, RULE_sentence_lvl_common = 17, 
		RULE_attr_list = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"content", "contour", "syntax", "sentence_wrap", "sentence", "sentence_assign", 
			"idtf_lvl1_preffix", "idtf_lvl1_value", "idtf_lvl1", "idtf_system", "idtf_edge", 
			"idtf_set", "idtf_common", "idtf_list", "internal_sentence", "internal_sentence_list", 
			"sentence_lvl1", "sentence_lvl_common", "attr_list"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'_'", "'['", "']'", "'[*'", "'*]'", "';;'", "'='", "'sc_node'", 
			"'sc_link'", "'sc_edge_dcommon'", "'sc_edge_ucommon'", "'sc_edge_main'", 
			"'sc_edge_access'", "'#'", "'...'", "'('", "')'", "'{'", "';'", "'}'", 
			"'(*'", "'*)'", "'|'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"ID_SYSTEM", "LINK", "CONNECTOR", "EDGE_ATTR", "LINE_TERMINATOR", "LINE_COMMENT", 
			"MULTINE_COMMENT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "scs.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public scsParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ContentContext extends ParserRuleContext {
		public Token r;
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_content);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(38);
				match(T__0);
				}
			}

			setState(41);
			((ContentContext)_localctx).r = match(T__1);
			setState(49);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(45);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__0:
					case T__3:
					case T__4:
					case T__5:
					case T__6:
					case T__7:
					case T__8:
					case T__9:
					case T__10:
					case T__11:
					case T__12:
					case T__13:
					case T__14:
					case T__15:
					case T__16:
					case T__17:
					case T__18:
					case T__19:
					case T__20:
					case T__21:
					case T__22:
					case ID_SYSTEM:
					case LINK:
					case CONNECTOR:
					case EDGE_ATTR:
					case LINE_TERMINATOR:
					case LINE_COMMENT:
					case MULTINE_COMMENT:
					case WS:
						{
						setState(42);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==T__1 || _la==T__2) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					case T__1:
						{
						setState(43);
						match(T__1);
						}
						break;
					case T__2:
						{
						setState(44);
						match(T__2);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					} 
				}
				setState(51);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContourContext extends ParserRuleContext {
		public Token b;
		public Token e;
		public List<Sentence_wrapContext> sentence_wrap() {
			return getRuleContexts(Sentence_wrapContext.class);
		}
		public Sentence_wrapContext sentence_wrap(int i) {
			return getRuleContext(Sentence_wrapContext.class,i);
		}
		public ContourContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contour; }
	}

	public final ContourContext contour() throws RecognitionException {
		ContourContext _localctx = new ContourContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_contour);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(52);
				match(T__0);
				}
			}

			setState(55);
			((ContourContext)_localctx).b = match(T__3);
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__3) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__14) | (1L << T__15) | (1L << T__17) | (1L << ID_SYSTEM) | (1L << LINK))) != 0)) {
				{
				{
				setState(56);
				sentence_wrap();
				}
				}
				setState(61);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(62);
			((ContourContext)_localctx).e = match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyntaxContext extends ParserRuleContext {
		public List<Sentence_wrapContext> sentence_wrap() {
			return getRuleContexts(Sentence_wrapContext.class);
		}
		public Sentence_wrapContext sentence_wrap(int i) {
			return getRuleContext(Sentence_wrapContext.class,i);
		}
		public SyntaxContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syntax; }
	}

	public final SyntaxContext syntax() throws RecognitionException {
		SyntaxContext _localctx = new SyntaxContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_syntax);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__3) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__14) | (1L << T__15) | (1L << T__17) | (1L << ID_SYSTEM) | (1L << LINK))) != 0)) {
				{
				{
				setState(64);
				sentence_wrap();
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sentence_wrapContext extends ParserRuleContext {
		public SentenceContext sentence() {
			return getRuleContext(SentenceContext.class,0);
		}
		public Sentence_wrapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentence_wrap; }
	}

	public final Sentence_wrapContext sentence_wrap() throws RecognitionException {
		Sentence_wrapContext _localctx = new Sentence_wrapContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_sentence_wrap);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(70);
			sentence();
			setState(71);
			match(T__5);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SentenceContext extends ParserRuleContext {
		public Sentence_lvl1Context sentence_lvl1() {
			return getRuleContext(Sentence_lvl1Context.class,0);
		}
		public Sentence_lvl_commonContext sentence_lvl_common() {
			return getRuleContext(Sentence_lvl_commonContext.class,0);
		}
		public Sentence_assignContext sentence_assign() {
			return getRuleContext(Sentence_assignContext.class,0);
		}
		public SentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentence; }
	}

	public final SentenceContext sentence() throws RecognitionException {
		SentenceContext _localctx = new SentenceContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_sentence);
		try {
			setState(76);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(73);
				sentence_lvl1();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(74);
				sentence_lvl_common();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(75);
				sentence_assign();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sentence_assignContext extends ParserRuleContext {
		public TerminalNode ID_SYSTEM() { return getToken(scsParser.ID_SYSTEM, 0); }
		public Idtf_commonContext idtf_common() {
			return getRuleContext(Idtf_commonContext.class,0);
		}
		public Sentence_assignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentence_assign; }
	}

	public final Sentence_assignContext sentence_assign() throws RecognitionException {
		Sentence_assignContext _localctx = new Sentence_assignContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_sentence_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(ID_SYSTEM);
			setState(79);
			match(T__6);
			setState(80);
			idtf_common();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Idtf_lvl1_preffixContext extends ParserRuleContext {
		public Idtf_lvl1_preffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idtf_lvl1_preffix; }
	}

	public final Idtf_lvl1_preffixContext idtf_lvl1_preffix() throws RecognitionException {
		Idtf_lvl1_preffixContext _localctx = new Idtf_lvl1_preffixContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_idtf_lvl1_preffix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Idtf_lvl1_valueContext extends ParserRuleContext {
		public Idtf_systemContext idtf_system() {
			return getRuleContext(Idtf_systemContext.class,0);
		}
		public Idtf_lvl1_preffixContext idtf_lvl1_preffix() {
			return getRuleContext(Idtf_lvl1_preffixContext.class,0);
		}
		public Idtf_lvl1_valueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idtf_lvl1_value; }
	}

	public final Idtf_lvl1_valueContext idtf_lvl1_value() throws RecognitionException {
		Idtf_lvl1_valueContext _localctx = new Idtf_lvl1_valueContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_idtf_lvl1_value);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12))) != 0)) {
				{
				setState(84);
				idtf_lvl1_preffix();
				setState(85);
				match(T__13);
				}
			}

			setState(89);
			idtf_system();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Idtf_lvl1Context extends ParserRuleContext {
		public Idtf_lvl1_valueContext idtf_lvl1_value() {
			return getRuleContext(Idtf_lvl1_valueContext.class,0);
		}
		public TerminalNode LINK() { return getToken(scsParser.LINK, 0); }
		public Idtf_lvl1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idtf_lvl1; }
	}

	public final Idtf_lvl1Context idtf_lvl1() throws RecognitionException {
		Idtf_lvl1Context _localctx = new Idtf_lvl1Context(_ctx, getState());
		enterRule(_localctx, 16, RULE_idtf_lvl1);
		try {
			setState(93);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__14:
			case ID_SYSTEM:
				enterOuterAlt(_localctx, 1);
				{
				setState(91);
				idtf_lvl1_value();
				}
				break;
			case LINK:
				enterOuterAlt(_localctx, 2);
				{
				setState(92);
				match(LINK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Idtf_systemContext extends ParserRuleContext {
		public TerminalNode ID_SYSTEM() { return getToken(scsParser.ID_SYSTEM, 0); }
		public Idtf_systemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idtf_system; }
	}

	public final Idtf_systemContext idtf_system() throws RecognitionException {
		Idtf_systemContext _localctx = new Idtf_systemContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_idtf_system);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			_la = _input.LA(1);
			if ( !(_la==T__14 || _la==ID_SYSTEM) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Idtf_edgeContext extends ParserRuleContext {
		public List<Idtf_systemContext> idtf_system() {
			return getRuleContexts(Idtf_systemContext.class);
		}
		public Idtf_systemContext idtf_system(int i) {
			return getRuleContext(Idtf_systemContext.class,i);
		}
		public TerminalNode CONNECTOR() { return getToken(scsParser.CONNECTOR, 0); }
		public Attr_listContext attr_list() {
			return getRuleContext(Attr_listContext.class,0);
		}
		public Idtf_edgeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idtf_edge; }
	}

	public final Idtf_edgeContext idtf_edge() throws RecognitionException {
		Idtf_edgeContext _localctx = new Idtf_edgeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_idtf_edge);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(T__15);
			setState(98);
			idtf_system();
			setState(99);
			match(CONNECTOR);
			setState(101);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(100);
				attr_list();
				}
				break;
			}
			setState(103);
			idtf_system();
			setState(104);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Idtf_setContext extends ParserRuleContext {
		public List<Idtf_commonContext> idtf_common() {
			return getRuleContexts(Idtf_commonContext.class);
		}
		public Idtf_commonContext idtf_common(int i) {
			return getRuleContext(Idtf_commonContext.class,i);
		}
		public List<Attr_listContext> attr_list() {
			return getRuleContexts(Attr_listContext.class);
		}
		public Attr_listContext attr_list(int i) {
			return getRuleContext(Attr_listContext.class,i);
		}
		public Idtf_setContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idtf_set; }
	}

	public final Idtf_setContext idtf_set() throws RecognitionException {
		Idtf_setContext _localctx = new Idtf_setContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_idtf_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			match(T__17);
			setState(108);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(107);
				attr_list();
				}
				break;
			}
			setState(110);
			idtf_common();
			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__18) {
				{
				{
				setState(111);
				match(T__18);
				setState(113);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
				case 1:
					{
					setState(112);
					attr_list();
					}
					break;
				}
				setState(115);
				idtf_common();
				}
				}
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(121);
			match(T__19);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Idtf_commonContext extends ParserRuleContext {
		public Idtf_systemContext idtf_system() {
			return getRuleContext(Idtf_systemContext.class,0);
		}
		public Idtf_edgeContext idtf_edge() {
			return getRuleContext(Idtf_edgeContext.class,0);
		}
		public Idtf_setContext idtf_set() {
			return getRuleContext(Idtf_setContext.class,0);
		}
		public ContourContext contour() {
			return getRuleContext(ContourContext.class,0);
		}
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode LINK() { return getToken(scsParser.LINK, 0); }
		public Idtf_commonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idtf_common; }
	}

	public final Idtf_commonContext idtf_common() throws RecognitionException {
		Idtf_commonContext _localctx = new Idtf_commonContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_idtf_common);
		try {
			setState(129);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(123);
				idtf_system();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(124);
				idtf_edge();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(125);
				idtf_set();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(126);
				contour();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(127);
				content();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(128);
				match(LINK);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Idtf_listContext extends ParserRuleContext {
		public List<Idtf_commonContext> idtf_common() {
			return getRuleContexts(Idtf_commonContext.class);
		}
		public Idtf_commonContext idtf_common(int i) {
			return getRuleContext(Idtf_commonContext.class,i);
		}
		public List<Internal_sentence_listContext> internal_sentence_list() {
			return getRuleContexts(Internal_sentence_listContext.class);
		}
		public Internal_sentence_listContext internal_sentence_list(int i) {
			return getRuleContext(Internal_sentence_listContext.class,i);
		}
		public Idtf_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idtf_list; }
	}

	public final Idtf_listContext idtf_list() throws RecognitionException {
		Idtf_listContext _localctx = new Idtf_listContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_idtf_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			idtf_common();
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__20) {
				{
				setState(132);
				internal_sentence_list();
				}
			}

			setState(142);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(135);
					match(T__18);
					setState(136);
					idtf_common();
					setState(138);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__20) {
						{
						setState(137);
						internal_sentence_list();
						}
					}

					}
					} 
				}
				setState(144);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Internal_sentenceContext extends ParserRuleContext {
		public TerminalNode CONNECTOR() { return getToken(scsParser.CONNECTOR, 0); }
		public Idtf_listContext idtf_list() {
			return getRuleContext(Idtf_listContext.class,0);
		}
		public Attr_listContext attr_list() {
			return getRuleContext(Attr_listContext.class,0);
		}
		public Internal_sentenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_internal_sentence; }
	}

	public final Internal_sentenceContext internal_sentence() throws RecognitionException {
		Internal_sentenceContext _localctx = new Internal_sentenceContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_internal_sentence);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			match(CONNECTOR);
			setState(147);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(146);
				attr_list();
				}
				break;
			}
			setState(149);
			idtf_list();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Internal_sentence_listContext extends ParserRuleContext {
		public List<Internal_sentenceContext> internal_sentence() {
			return getRuleContexts(Internal_sentenceContext.class);
		}
		public Internal_sentenceContext internal_sentence(int i) {
			return getRuleContext(Internal_sentenceContext.class,i);
		}
		public Internal_sentence_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_internal_sentence_list; }
	}

	public final Internal_sentence_listContext internal_sentence_list() throws RecognitionException {
		Internal_sentence_listContext _localctx = new Internal_sentence_listContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_internal_sentence_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			match(T__20);
			setState(155); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(152);
				internal_sentence();
				setState(153);
				match(T__5);
				}
				}
				setState(157); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==CONNECTOR );
			setState(159);
			match(T__21);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sentence_lvl1Context extends ParserRuleContext {
		public List<Idtf_lvl1Context> idtf_lvl1() {
			return getRuleContexts(Idtf_lvl1Context.class);
		}
		public Idtf_lvl1Context idtf_lvl1(int i) {
			return getRuleContext(Idtf_lvl1Context.class,i);
		}
		public Sentence_lvl1Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentence_lvl1; }
	}

	public final Sentence_lvl1Context sentence_lvl1() throws RecognitionException {
		Sentence_lvl1Context _localctx = new Sentence_lvl1Context(_ctx, getState());
		enterRule(_localctx, 32, RULE_sentence_lvl1);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			idtf_lvl1();
			setState(162);
			match(T__22);
			setState(163);
			idtf_lvl1();
			setState(164);
			match(T__22);
			setState(165);
			idtf_lvl1();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sentence_lvl_commonContext extends ParserRuleContext {
		public Idtf_commonContext idtf_common() {
			return getRuleContext(Idtf_commonContext.class,0);
		}
		public List<TerminalNode> CONNECTOR() { return getTokens(scsParser.CONNECTOR); }
		public TerminalNode CONNECTOR(int i) {
			return getToken(scsParser.CONNECTOR, i);
		}
		public List<Idtf_listContext> idtf_list() {
			return getRuleContexts(Idtf_listContext.class);
		}
		public Idtf_listContext idtf_list(int i) {
			return getRuleContext(Idtf_listContext.class,i);
		}
		public List<Attr_listContext> attr_list() {
			return getRuleContexts(Attr_listContext.class);
		}
		public Attr_listContext attr_list(int i) {
			return getRuleContext(Attr_listContext.class,i);
		}
		public Sentence_lvl_commonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentence_lvl_common; }
	}

	public final Sentence_lvl_commonContext sentence_lvl_common() throws RecognitionException {
		Sentence_lvl_commonContext _localctx = new Sentence_lvl_commonContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_sentence_lvl_common);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			idtf_common();
			setState(168);
			match(CONNECTOR);
			setState(170);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(169);
				attr_list();
				}
				break;
			}
			setState(172);
			idtf_list();
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__18) {
				{
				{
				setState(173);
				match(T__18);
				setState(174);
				match(CONNECTOR);
				setState(176);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
				case 1:
					{
					setState(175);
					attr_list();
					}
					break;
				}
				setState(178);
				idtf_list();
				}
				}
				setState(183);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Attr_listContext extends ParserRuleContext {
		public List<TerminalNode> ID_SYSTEM() { return getTokens(scsParser.ID_SYSTEM); }
		public TerminalNode ID_SYSTEM(int i) {
			return getToken(scsParser.ID_SYSTEM, i);
		}
		public List<TerminalNode> EDGE_ATTR() { return getTokens(scsParser.EDGE_ATTR); }
		public TerminalNode EDGE_ATTR(int i) {
			return getToken(scsParser.EDGE_ATTR, i);
		}
		public Attr_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attr_list; }
	}

	public final Attr_listContext attr_list() throws RecognitionException {
		Attr_listContext _localctx = new Attr_listContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_attr_list);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(186); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(184);
					match(ID_SYSTEM);
					setState(185);
					match(EDGE_ATTR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(188); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3!\u00c1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\3\2\5\2*\n\2\3\2\3\2\3\2\3\2\5\2\60\n\2\7\2\62\n"+
		"\2\f\2\16\2\65\13\2\3\3\5\38\n\3\3\3\3\3\7\3<\n\3\f\3\16\3?\13\3\3\3\3"+
		"\3\3\4\7\4D\n\4\f\4\16\4G\13\4\3\5\3\5\3\5\3\6\3\6\3\6\5\6O\n\6\3\7\3"+
		"\7\3\7\3\7\3\b\3\b\3\t\3\t\3\t\5\tZ\n\t\3\t\3\t\3\n\3\n\5\n`\n\n\3\13"+
		"\3\13\3\f\3\f\3\f\3\f\5\fh\n\f\3\f\3\f\3\f\3\r\3\r\5\ro\n\r\3\r\3\r\3"+
		"\r\5\rt\n\r\3\r\7\rw\n\r\f\r\16\rz\13\r\3\r\3\r\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\5\16\u0084\n\16\3\17\3\17\5\17\u0088\n\17\3\17\3\17\3\17\5\17"+
		"\u008d\n\17\7\17\u008f\n\17\f\17\16\17\u0092\13\17\3\20\3\20\5\20\u0096"+
		"\n\20\3\20\3\20\3\21\3\21\3\21\3\21\6\21\u009e\n\21\r\21\16\21\u009f\3"+
		"\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\5\23\u00ad\n\23"+
		"\3\23\3\23\3\23\3\23\5\23\u00b3\n\23\3\23\7\23\u00b6\n\23\f\23\16\23\u00b9"+
		"\13\23\3\24\3\24\6\24\u00bd\n\24\r\24\16\24\u00be\3\24\2\2\25\2\4\6\b"+
		"\n\f\16\20\22\24\26\30\32\34\36 \"$&\2\5\3\2\4\5\3\2\n\17\4\2\21\21\32"+
		"\32\2\u00ca\2)\3\2\2\2\4\67\3\2\2\2\6E\3\2\2\2\bH\3\2\2\2\nN\3\2\2\2\f"+
		"P\3\2\2\2\16T\3\2\2\2\20Y\3\2\2\2\22_\3\2\2\2\24a\3\2\2\2\26c\3\2\2\2"+
		"\30l\3\2\2\2\32\u0083\3\2\2\2\34\u0085\3\2\2\2\36\u0093\3\2\2\2 \u0099"+
		"\3\2\2\2\"\u00a3\3\2\2\2$\u00a9\3\2\2\2&\u00bc\3\2\2\2(*\7\3\2\2)(\3\2"+
		"\2\2)*\3\2\2\2*+\3\2\2\2+\63\7\4\2\2,\60\n\2\2\2-\60\7\4\2\2.\60\7\5\2"+
		"\2/,\3\2\2\2/-\3\2\2\2/.\3\2\2\2\60\62\3\2\2\2\61/\3\2\2\2\62\65\3\2\2"+
		"\2\63\61\3\2\2\2\63\64\3\2\2\2\64\3\3\2\2\2\65\63\3\2\2\2\668\7\3\2\2"+
		"\67\66\3\2\2\2\678\3\2\2\289\3\2\2\29=\7\6\2\2:<\5\b\5\2;:\3\2\2\2<?\3"+
		"\2\2\2=;\3\2\2\2=>\3\2\2\2>@\3\2\2\2?=\3\2\2\2@A\7\7\2\2A\5\3\2\2\2BD"+
		"\5\b\5\2CB\3\2\2\2DG\3\2\2\2EC\3\2\2\2EF\3\2\2\2F\7\3\2\2\2GE\3\2\2\2"+
		"HI\5\n\6\2IJ\7\b\2\2J\t\3\2\2\2KO\5\"\22\2LO\5$\23\2MO\5\f\7\2NK\3\2\2"+
		"\2NL\3\2\2\2NM\3\2\2\2O\13\3\2\2\2PQ\7\32\2\2QR\7\t\2\2RS\5\32\16\2S\r"+
		"\3\2\2\2TU\t\3\2\2U\17\3\2\2\2VW\5\16\b\2WX\7\20\2\2XZ\3\2\2\2YV\3\2\2"+
		"\2YZ\3\2\2\2Z[\3\2\2\2[\\\5\24\13\2\\\21\3\2\2\2]`\5\20\t\2^`\7\33\2\2"+
		"_]\3\2\2\2_^\3\2\2\2`\23\3\2\2\2ab\t\4\2\2b\25\3\2\2\2cd\7\22\2\2de\5"+
		"\24\13\2eg\7\34\2\2fh\5&\24\2gf\3\2\2\2gh\3\2\2\2hi\3\2\2\2ij\5\24\13"+
		"\2jk\7\23\2\2k\27\3\2\2\2ln\7\24\2\2mo\5&\24\2nm\3\2\2\2no\3\2\2\2op\3"+
		"\2\2\2px\5\32\16\2qs\7\25\2\2rt\5&\24\2sr\3\2\2\2st\3\2\2\2tu\3\2\2\2"+
		"uw\5\32\16\2vq\3\2\2\2wz\3\2\2\2xv\3\2\2\2xy\3\2\2\2y{\3\2\2\2zx\3\2\2"+
		"\2{|\7\26\2\2|\31\3\2\2\2}\u0084\5\24\13\2~\u0084\5\26\f\2\177\u0084\5"+
		"\30\r\2\u0080\u0084\5\4\3\2\u0081\u0084\5\2\2\2\u0082\u0084\7\33\2\2\u0083"+
		"}\3\2\2\2\u0083~\3\2\2\2\u0083\177\3\2\2\2\u0083\u0080\3\2\2\2\u0083\u0081"+
		"\3\2\2\2\u0083\u0082\3\2\2\2\u0084\33\3\2\2\2\u0085\u0087\5\32\16\2\u0086"+
		"\u0088\5 \21\2\u0087\u0086\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u0090\3\2"+
		"\2\2\u0089\u008a\7\25\2\2\u008a\u008c\5\32\16\2\u008b\u008d\5 \21\2\u008c"+
		"\u008b\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008f\3\2\2\2\u008e\u0089\3\2"+
		"\2\2\u008f\u0092\3\2\2\2\u0090\u008e\3\2\2\2\u0090\u0091\3\2\2\2\u0091"+
		"\35\3\2\2\2\u0092\u0090\3\2\2\2\u0093\u0095\7\34\2\2\u0094\u0096\5&\24"+
		"\2\u0095\u0094\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u0098"+
		"\5\34\17\2\u0098\37\3\2\2\2\u0099\u009d\7\27\2\2\u009a\u009b\5\36\20\2"+
		"\u009b\u009c\7\b\2\2\u009c\u009e\3\2\2\2\u009d\u009a\3\2\2\2\u009e\u009f"+
		"\3\2\2\2\u009f\u009d\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1"+
		"\u00a2\7\30\2\2\u00a2!\3\2\2\2\u00a3\u00a4\5\22\n\2\u00a4\u00a5\7\31\2"+
		"\2\u00a5\u00a6\5\22\n\2\u00a6\u00a7\7\31\2\2\u00a7\u00a8\5\22\n\2\u00a8"+
		"#\3\2\2\2\u00a9\u00aa\5\32\16\2\u00aa\u00ac\7\34\2\2\u00ab\u00ad\5&\24"+
		"\2\u00ac\u00ab\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00b7"+
		"\5\34\17\2\u00af\u00b0\7\25\2\2\u00b0\u00b2\7\34\2\2\u00b1\u00b3\5&\24"+
		"\2\u00b2\u00b1\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00b6"+
		"\5\34\17\2\u00b5\u00af\3\2\2\2\u00b6\u00b9\3\2\2\2\u00b7\u00b5\3\2\2\2"+
		"\u00b7\u00b8\3\2\2\2\u00b8%\3\2\2\2\u00b9\u00b7\3\2\2\2\u00ba\u00bb\7"+
		"\32\2\2\u00bb\u00bd\7\35\2\2\u00bc\u00ba\3\2\2\2\u00bd\u00be\3\2\2\2\u00be"+
		"\u00bc\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf\'\3\2\2\2\31)/\63\67=ENY_gns"+
		"x\u0083\u0087\u008c\u0090\u0095\u009f\u00ac\u00b2\u00b7\u00be";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}