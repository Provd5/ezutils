import { VscWordWrap } from "react-icons/vsc";

import { PARAGRAPHS_ROUTE_BASE } from "../../routes";
import { AFFIXES_SUBCATEGORY } from "./textsSubCategory/paragraphs/affixes";
import { LINE_BREAKS_SUBCATEGORY } from "./textsSubCategory/paragraphs/line-breaks";
import { SORT_LINES_SUBCATEGORY } from "./textsSubCategory/paragraphs/sort-lines";

export type ParagraphsSubCategoriesKeys =
  keyof (typeof PARAGRAPHS_CATEGORY)["subCategories"];

export const PARAGRAPHS_CATEGORY = {
  href: PARAGRAPHS_ROUTE_BASE,
  label: "Edit paragraphs",
  Icon: VscWordWrap,
  subCategories: {
    lineBreaks: LINE_BREAKS_SUBCATEGORY,
    affixes: AFFIXES_SUBCATEGORY,
    sortLines: SORT_LINES_SUBCATEGORY,
  },
} as const;
