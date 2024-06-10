import { HOME_CATEGORY } from "./categories/home";
import { LINES_CATEGORY } from "./categories/lines";
import { TEXTS_CATEGORY } from "./categories/texts";

export type AppCategoriesType = keyof typeof APP_STRUCTURE.categories;

export const APP_STRUCTURE = {
  home: HOME_CATEGORY,
  categories: {
    lines: LINES_CATEGORY,
    texts: TEXTS_CATEGORY,
  },
} as const;
