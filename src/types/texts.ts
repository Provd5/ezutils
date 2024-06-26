import { type APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type ParagraphsSubCategoriesKeys } from "~/app/appStructure/root/texts/paragraphs";
import { type SentencesSubCategoriesKeys } from "~/app/appStructure/root/texts/sentences";
import { type AffixesToolsKeys } from "~/app/appStructure/root/texts/textsSubCategory/paragraphs/affixes";
import { type LineBreaksToolsKeys } from "~/app/appStructure/root/texts/textsSubCategory/paragraphs/line-breaks";
import { type SortLinesToolsKeys } from "~/app/appStructure/root/texts/textsSubCategory/paragraphs/sort-lines";
import { type CaseConverterToolsKeys } from "~/app/appStructure/root/texts/textsSubCategory/sentences/case-converter";
import { type FindInTextToolsKeys } from "~/app/appStructure/root/texts/textsSubCategory/sentences/find-in-text";
import { type RemoveToolsKeys } from "~/app/appStructure/root/texts/textsSubCategory/sentences/remove";
import { type SortWordsToolsKeys } from "~/app/appStructure/root/texts/textsSubCategory/sentences/sort-words";

import { type CategoryBase, type SubCategoryBase, type ToolBase } from "./app";

export type TextsCategoryKeys = keyof typeof APP_STRUCTURE.texts;

export type TextsSubCategoryKeys =
  | ParagraphsSubCategoriesKeys
  | SentencesSubCategoriesKeys;

export type TextsToolKeys =
  | LineBreaksToolsKeys
  | SortLinesToolsKeys
  | AffixesToolsKeys
  | CaseConverterToolsKeys
  | RemoveToolsKeys
  | FindInTextToolsKeys
  | SortWordsToolsKeys;

export interface TextsCategory extends CategoryBase {
  subCategories: Record<TextsSubCategoryKeys, TextsSubCategory>;
}

export interface TextsSubCategory extends SubCategoryBase {
  tools: Record<TextsToolKeys, TextsTool>;
}

export interface TextsTool extends ToolBase {
  inputExample: string;
  outputExample: string;
}
