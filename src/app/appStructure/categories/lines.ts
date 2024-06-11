import { VscWordWrap } from "react-icons/vsc";

import { LINES_ROUTE_BASE } from "../routes";
import { AFFIXES_SUBCATEGORY } from "./subCategories/lines/affixes";
import { LINE_BREAKS_SUBCATEGORY } from "./subCategories/lines/line-breaks";
import { SORT_SUBCATEGORY } from "./subCategories/lines/sort";

export type LinesSubCategoriesType =
  keyof (typeof LINES_CATEGORY)["subCategories"];

export const LINES_CATEGORY = {
  href: LINES_ROUTE_BASE,
  label: "Edit paragraphs",
  Icon: VscWordWrap,
  subCategories: {
    lineBreaks: LINE_BREAKS_SUBCATEGORY,
    sort: SORT_SUBCATEGORY,
    affixes: AFFIXES_SUBCATEGORY,
  },
} as const;
