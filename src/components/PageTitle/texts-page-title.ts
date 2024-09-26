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
  const categoryLabel = APP_STRUCTURE.texts[validCategory].label;
  let title = categoryLabel;

  if (!subCategory) return title;

  const validSubCategory = subCategory as TextsSubCategoryKeys;
  const subCategoryLabel = (APP_STRUCTURE.texts as App["texts"])[validCategory]
    .subCategories[validSubCategory].label;
  title = subCategoryLabel + ` < ${categoryLabel}`;

  if (!tool) return title;

  const validTool = tool as TextsToolKeys;
  const toolLabel = (APP_STRUCTURE.texts as App["texts"])[validCategory]
    .subCategories[validSubCategory].tools[validTool].label;
  title = toolLabel + ` < ${subCategoryLabel}`;

  return title;
}
