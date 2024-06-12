import { VscSymbolKey } from "react-icons/vsc";

import { SENTENCES_ROUTE_BASE } from "../../routes";
import { CASE_CONVERTER_SUBCATEGORY } from "./textsSubCategory/sentences/case-converter";
import { FIND_IN_TEXT_SUBCATEGORY } from "./textsSubCategory/sentences/find-in-text";
import { REMOVE_SUBCATEGORY } from "./textsSubCategory/sentences/remove";

export type SentencesSubCategoriesKeys =
  keyof (typeof SENTENCES_CATEGORY)["subCategories"];

export const SENTENCES_CATEGORY = {
  href: SENTENCES_ROUTE_BASE,
  label: "Edit sentences",
  Icon: VscSymbolKey,
  subCategories: {
    caseConverter: CASE_CONVERTER_SUBCATEGORY,
    remove: REMOVE_SUBCATEGORY,
    findInText: FIND_IN_TEXT_SUBCATEGORY,
  },
} as const;
