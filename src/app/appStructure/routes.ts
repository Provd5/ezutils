// /texts
export const TEXTS_CATEGORY_ROUTE = "/texts";

// /texts/paragraphs
export const PARAGRAPHS_ROUTE_BASE = TEXTS_CATEGORY_ROUTE + "/paragraphs";

// /texts/paragraphs/...
export const LINE_BREAKS_ROUTE_BASE = PARAGRAPHS_ROUTE_BASE + "/lineBreaks";
export const AFFIXES_ROUTE_BASE = PARAGRAPHS_ROUTE_BASE + "/affixes";
export const SORT_LINES_ROUTE_BASE = PARAGRAPHS_ROUTE_BASE + "/sortLines";

// /texts/sentences
export const SENTENCES_ROUTE_BASE = TEXTS_CATEGORY_ROUTE + "/sentences";

// /texts/sentences/...
export const CASE_CONVERTER_ROUTE_BASE =
  SENTENCES_ROUTE_BASE + "/caseConverter";
export const REMOVE_ROUTE_BASE = SENTENCES_ROUTE_BASE + "/remove";
export const FIND_IN_TEXT_ROUTE_BASE = SENTENCES_ROUTE_BASE + "/findInText";
export const SORT_WORDS_ROUTE_BASE = SENTENCES_ROUTE_BASE + "/sortWords";

// /colors
export const COLORS_ROUTE_BASE = "/colors";
