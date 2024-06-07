import { PiCursorTextBold } from "react-icons/pi";

import { TEXTS_ROUTE_BASE } from "../routes";
import { CASE_CONVERTER_SUBCATEGORY } from "./subCategories/texts/case-converter";
import { FIND_IN_TEXT_SUBCATEGORY } from "./subCategories/texts/find-in-text";
import { REMOVE_SUBCATEGORY } from "./subCategories/texts/remove";

export type TextsSubCategoriesType =
  keyof (typeof TEXTS_CATEGORY)["subCategories"];

export const TEXTS_CATEGORY = {
  href: TEXTS_ROUTE_BASE,
  label: "Edit sentences",
  Icon: PiCursorTextBold,
  subCategories: {
    caseConverter: CASE_CONVERTER_SUBCATEGORY,
    remove: REMOVE_SUBCATEGORY,
    findInText: FIND_IN_TEXT_SUBCATEGORY,
  },
} as const;
