import { HOME_CATEGORY } from "./categories/home";
import { LINES_CATEGORY } from "./categories/lines";
import { TEXTS_CATEGORY } from "./categories/texts";
import { type AppStructure } from "./structure-types";

export const APP_STRUCTURE: AppStructure = {
  home: HOME_CATEGORY,
  categories: {
    lines: LINES_CATEGORY,
    texts: TEXTS_CATEGORY,
  },
} as const;
