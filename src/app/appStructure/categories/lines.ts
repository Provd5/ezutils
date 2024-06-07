import { BsParagraph } from "react-icons/bs";

import { LINES_ROUTE_BASE } from "../routes";
import { type Category } from "../structure-types";
import { AFFIXES_SUBCATEGORY } from "./subCategories/lines/affixes";
import { LINE_BREAKS_SUBCATEGORY } from "./subCategories/lines/line-breaks";
import { SORT_SUBCATEGORY } from "./subCategories/lines/sort";

export type LinesSubCategoriesType =
  keyof (typeof LINES_CATEGORY)["subCategories"];

export const LINES_CATEGORY: Category = {
  href: LINES_ROUTE_BASE,
  label: "Edit paragraphs",
  Icon: BsParagraph,
  subCategories: {
    lineBreaks: LINE_BREAKS_SUBCATEGORY,
    sort: SORT_SUBCATEGORY,
    affixes: AFFIXES_SUBCATEGORY,
  },
} as const;
