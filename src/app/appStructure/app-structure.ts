import { COLORS_CATEGORY } from "./root/colors";
import { HOME_CATEGORY } from "./root/home";
import { PARAGRAPHS_CATEGORY } from "./root/texts/paragraphs";
import { SENTENCES_CATEGORY } from "./root/texts/sentences";

export const APP_STRUCTURE = {
  home: HOME_CATEGORY,
  texts: {
    paragraphs: PARAGRAPHS_CATEGORY,
    sentences: SENTENCES_CATEGORY,
  },
  colors: COLORS_CATEGORY,
} as const;
