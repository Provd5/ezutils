import { type App } from "~/types/app";
import {
  type TextsCategoryKeys,
  type TextsSubCategoryKeys,
  type TextsToolKeys,
} from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";

export function textsPageTitle(
  category: string | undefined,
  subCategory: string | undefined,
  tool: string | undefined,
) {
  if (!category) return;

  const validCategory = category as TextsCategoryKeys;
  let title = APP_STRUCTURE.texts[validCategory].label as string;

  if (subCategory) {
    const validSubCategory = subCategory as TextsSubCategoryKeys;
    title = (APP_STRUCTURE.texts as App["texts"])[validCategory].subCategories[
      validSubCategory
    ].label;
    if (tool) {
      const validTool = tool as TextsToolKeys;
      title =
        (APP_STRUCTURE.texts as App["texts"])[validCategory].subCategories[
          validSubCategory
        ].tools[validTool].label + ` < ${title}`;
    }
  }

  return title;
}
