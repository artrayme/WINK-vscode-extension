grammar scs;

// options
// {
//   language = JavaScript;
// }

// tokens
// {
// }

// @parser::members {

// this.parsedData = null;
// this.docUri = '';

// var self = this;

// this.makeLocation = function(obj) {
//   return location = {
//     line: obj.line,
//     offset: obj.pos,
//     len: obj.text.length
//   };
// };

// this.makeError = function(token, msg) {
  
//   self.parsedData._onAppendError(self.docUri, {
//     line: token.line - 1,
//     offset: token.pos,
//     len: token.text.length,
//     msg: msg
//   });
// };

// }

// ----------------------------
ID_SYSTEM 
  : ('a'..'z'|'A'..'Z'|'_'|'.'|'0'..'9'|'#')+
  ;


LINK
  : '"' (~('"') | '\\"' )* '"'
  ;
  
CONNECTOR
  : ( '<>' | '>' | '<' | '..>' | '<..'
    | '->' | '<-' | '<=>' | '=>' | '<='
    | '-|>' | '<|-' | '-/>' | '</-'
    | '~>' | '<~' | '~|>' | '<|~'
    | '~/>' | '</~' | '_<>' | '_>' | '_<'
    | '_..>' | '_<..' | '_->' | '_<-'
    | '_<=>' | '_=>' | '_<=' | '_-|>' | '_<|-'
    | '_-/>' | '_</-' | '_~>' | '_<~'
    | '_~|>' | '_<|~' | '_~/>' | '_</~' )
  ;

EDGE_ATTR
  : ':'
  | '::';

LINE_TERMINATOR
  : [\r\n\u2028\u2029] -> channel(HIDDEN)
  ;
  
LINE_COMMENT
  : '//' ~('\n'|'\r')* '\r'? '\n' -> channel(HIDDEN)
  ;

MULTINE_COMMENT
  : '/*' .*? '*/' -> channel(HIDDEN)
  ;

WS :
  ( ' '
  | '\t'
  | '\r'
  | '\n'
  ) -> channel(HIDDEN)
  ;

content
  // @init{count = 1; }
  : ('_')? r='[' 
    (
        // { count > 0 }?
        (
          ~ ('[' | ']')
          | '[' 
          // { count++; }
          | ']' 
          // { count--; }
        )
    )*
    // { 
    //   var tok = { line: $r.line, pos: $r.pos, text: $r.text};
    //   if (count > 0) { this.makeError(tok, "Expected ']' symbol"); }
    // }
  ;

contour
  // @init{count = 1;}
  : '_'? b='[*' 
    sentence_wrap*
    e='*]'
    // {
    //   var tok = { line: $b.line, pos: $b.pos, text: $b.text };
    //   if (!$e) { this.makeError(tok, "Expected '*]' symbol"); }
    // }
  ;

// ------------- Rules --------------------

syntax 
  : sentence_wrap*
  ;

sentence_wrap
 	: (sentence ';;')
  ;

sentence
  : sentence_lvl1
	| sentence_lvl_common
  | sentence_assign
  ;

sentence_assign
  : ID_SYSTEM '=' idtf_common
  ;
    
idtf_lvl1_preffix
	: 'sc_node'
  | 'sc_link'
  | 'sc_edge_dcommon'
  | 'sc_edge_ucommon'
  | 'sc_edge_main'
  | 'sc_edge_access'
  ;
    
idtf_lvl1_value
 	: (idtf_lvl1_preffix '#')? idtf_system
  ;
    
idtf_lvl1
	: idtf_lvl1_value
  | LINK
  ;

idtf_system
	: ID_SYSTEM 
    // {
    //   const loc = this.makeLocation($ID_SYSTEM);
    //   this.parsedData._onAppendSymbol(this.docUri, $ID_SYSTEM.text, loc);
    // }
  | '...'
  ;

idtf_edge
	: '(' idtf_system
	      CONNECTOR attr_list?
	      idtf_system
	  ')'
  ;
	
idtf_set
	: '{' attr_list? idtf_common 
        (';' attr_list? idtf_common)*
    '}'
  ;

idtf_common
	: idtf_system
	| idtf_edge
	| idtf_set
  | contour
	| content
	| LINK
  ;

idtf_list
	: idtf_common internal_sentence_list? 
    (';' idtf_common internal_sentence_list?)*
  ;

internal_sentence
	: CONNECTOR attr_list? idtf_list
  ;

internal_sentence_list
	: '(*' (internal_sentence ';;')+ '*)'
  ;

sentence_lvl1
 	: idtf_lvl1 '|' idtf_lvl1 '|' idtf_lvl1
  ;

sentence_lvl_common
  : idtf_common CONNECTOR attr_list? idtf_list
    (';' CONNECTOR attr_list? idtf_list)*
  ;

attr_list
  : (ID_SYSTEM EDGE_ATTR)+
  ;