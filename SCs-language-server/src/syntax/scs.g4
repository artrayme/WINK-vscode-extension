grammar scs;







content 


  : ('_' )?
      c=CONTENT_BODY

  ;

contour
  
  : CONTOUR_BEGIN

    ( (sentence_wrap
	| (sentence_lvl_4_list_item ';;'))* )
    CONTOUR_END

  ;

connector 
  : c=('<>' | '>' | '<' | '..>' | '<..'
    | '->' | '<-' | '<=>' | '=>' | '<='
    | '-|>' | '<|-' | '-/>' | '</-'
    | '~>' | '<~' | '~|>' | '<|~'
    | '~/>' | '</~' | '_<>' | '_>' | '_<'
    | '_..>' | '_<..' | '<.._' | '_->' | '_<-'| '<-_'
    | '_<=>' | '_=>' | '_<=' |'<=_' | '_-|>' | '_<|-' | '<|-_'
    | '_-/>' | '_</-' | '</-_' | '_~>' | '_<~' | '<~_'
    | '_~|>' | '_<|~' | '<|~_' | '_~/>' | '_</~' | '</~_')

  ;


// ------------- Rules --------------------

syntax 
  : sentence_wrap* EOF
  ;

sentence_wrap
  : (sentence ';;')
  ;

sentence
  : sentence_lvl1
  | sentence_assign
  | sentence_assign_contour
  | sentence_lvl_common
  ;

idtf_alias 
  : ALIAS_SYMBOLS
  ;

idtf_system 
  : ID_SYSTEM
  | '...'
  | type=idtf_lvl1_preffix
  ;


sentence_assign
  : ALIAS_SYMBOLS '=' i=idtf_common
  ;

sentence_assign_contour
  : a=idtf_system '=' contour
  ;
    
idtf_lvl1_preffix 
  : type=('sc_node'
  | 'sc_link'
  | 'sc_edge_dcommon'
  | 'sc_edge_ucommon'
  | 'sc_edge_main'
  | 'sc_edge_access'
  
  // backward compatibility
  | 'sc_arc_common'
  | 'sc_edge'
  | 'sc_arc_main'
  | 'sc_arc_access')

  ;
    
idtf_lvl1_value 
   : type=idtf_lvl1_preffix '#' i=ID_SYSTEM
  ;
    
idtf_lvl1 
  : idtf_lvl1_value
  // | LINK
  ;

idtf_edge 
  : '(' src=idtf_atomic
        c=connector attrs=attr_list?
        trg=idtf_atomic
    ')'
  ;
  
idtf_set 
  : '{' ctx_s=idtf_set_elements '}'
  | '<' ctx_v=idtf_set_elements  '>'
  ;

idtf_set_elements
  
  : 
  a1=attr_list? i1=idtf_common

    internal_sentence_list?

    (';'
    a2=attr_list? i2=idtf_common
      internal_sentence_list?
    )*
  ;

idtf_atomic 
  : a=idtf_alias 
  | is=idtf_system
  ;

idtf_url 
  : LINK
  ;

idtf_common 
  : a=idtf_atomic
  | ie=idtf_edge 
  | iset=idtf_set 
  | ct=contour
  | cn=content 
  | u=idtf_url
  ;

idtf_list 
  : i1=idtf_common
    internal_sentence_list? 
    (';' 
      i2=idtf_common
      internal_sentence_list?
    )*
  ;

internal_sentence
  : c=connector attrs=attr_list? targets=idtf_list
    | internal_sentence_list
  ;

internal_sentence_list
  : '(*' (internal_sentence ';;')+ '*)'
  ;

sentence_lvl1
   : src=idtf_lvl1 '|' edge=idtf_lvl1 '|' trg=idtf_lvl1
  ;

sentence_lvl_4_list_item
  : c=connector attrs=attr_list? targets=idtf_list
  ;

sentence_lvl_common
  : src=idtf_common sentence_lvl_4_list_item
    (';' sentence_lvl_4_list_item)*
  ;

attr_list 

  : (
      ID_SYSTEM
      EDGE_ATTR
    )+
  ;


// ----------------------------
ID_SYSTEM
  : ('a'..'z'|'A'..'Z'|'_'|'.'|'0'..'9')+
  ;

ALIAS_SYMBOLS
  : '@'('a'..'z'|'A'..'Z'|'_'|'0'..'9')+
  ;

fragment CONTENT_ESCAPED
  : '\\' ('[' | ']' | '\\')
  ;

fragment CONTENT_SYBMOL
  : (CONTENT_ESCAPED | ~('[' | ']' | '\\'))
  ;

fragment CONTENT_SYBMOL_FIRST_END
  : (CONTENT_ESCAPED | ~('[' | ']' | '\\' | '*'))
  ;

CONTOUR_BEGIN
  : '[*'
  ;

CONTOUR_END
  : '*]'
  ;

CONTENT_BODY
  : '[]'
  | '![]!'
  | '[' CONTENT_SYBMOL_FIRST_END CONTENT_SYBMOL* ']'
  | '![' CONTENT_SYBMOL_FIRST_END CONTENT_SYBMOL* ']!'
  ;

LINK
  : '"' (~('"') | '\\"' )* '"'
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