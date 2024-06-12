import { type IconType } from "react-icons/lib";

import { type APP_STRUCTURE } from "~/app/appStructure/app-structure";

import { type TextsCategory } from "./texts";

export type AppCategoryKeys = keyof typeof APP_STRUCTURE;
export interface App {
  home: CategoryBase;
  texts: {
    paragraphs: TextsCategory;
    sentences: TextsCategory;
  };
  colors: CategoryBase;
}

export interface CategoryBase {
  href: string;
  label: string;
  Icon: IconType;
}

export interface SubCategoryBase {
  href: string;
  label: string;
  Icon: IconType;
}

export interface ToolBase {
  href: string;
  label: string;
  description: string;
}
