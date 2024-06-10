import { type IconType } from "react-icons";

import { type LinesSubCategoriesType } from "./categories/lines";
import { type AffixesToolsType } from "./categories/subCategories/lines/affixes";
import { type LineBreaksToolsType } from "./categories/subCategories/lines/line-breaks";
import { type SortToolsType } from "./categories/subCategories/lines/sort";
import { type CaseConverterToolsType } from "./categories/subCategories/texts/case-converter";
import { type FindInTextToolsType } from "./categories/subCategories/texts/find-in-text";
import { type RemoveToolsType } from "./categories/subCategories/texts/remove";
import { type TextsSubCategoriesType } from "./categories/texts";

// app
export interface AppStructure {
  home: OmittedCategory;
  categories: CategoryMap;
}

// categories
type CategoryMap = {
  [key: string]: Category;
};

export interface Category {
  href: string;
  label: string;
  Icon: IconType;
  subCategories: SubCategoryMap;
}

export type OmittedCategory = Omit<Category, "subCategories">;

// subcategories
export type SubCategoryKeys = LinesSubCategoriesType | TextsSubCategoriesType;

type SubCategoryMap = {
  [key: string]: SubCategory;
};

export interface SubCategory extends OmittedCategory {
  tools: ToolMap;
}

// tools
export type ToolKeys =
  | LineBreaksToolsType
  | SortToolsType
  | AffixesToolsType
  | CaseConverterToolsType
  | RemoveToolsType
  | FindInTextToolsType;

type ToolMap = {
  [key: string]: Tool;
};

export interface Tool {
  href: string;
  label: string;
  description: string;
  inputExample: string;
  outputExample: string;
}
