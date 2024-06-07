import { type IconType } from "react-icons";

import { type APP_STRUCTURE } from "./app-structure";

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

export type CategoryKeys = keyof typeof APP_STRUCTURE.categories;
export type OmittedCategory = Omit<Category, "subCategories">;

// subcategories
type SubCategoryMap = {
  [key: string]: SubCategory;
};

export interface SubCategory extends OmittedCategory {
  tools: ToolMap;
}

// tools
type ToolMap = {
  [key: string]: Tool;
};

export interface Tool {
  href: string;
  label: string;
}
