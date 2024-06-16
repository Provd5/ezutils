import { type App } from "~/types/app";
import {
  type TextsCategoryKeys,
  type TextsSubCategoryKeys,
  type TextsToolKeys,
} from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type ParamsType } from "~/main";

type ValidateParams = {
  (
    variant: keyof Pick<ParamsType, "textsCategory">,
    params: Readonly<Partial<ParamsType>>,
  ): { textsCategory: TextsCategoryKeys };
  (
    variant: keyof Pick<ParamsType, "textsSubCategory">,
    params: Readonly<Partial<ParamsType>>,
  ): {
    textsCategory: TextsCategoryKeys;
    textsSubCategory: TextsSubCategoryKeys;
  };
  (
    variant: keyof Pick<ParamsType, "textsTool">,
    params: Readonly<Partial<ParamsType>>,
  ): {
    textsCategory: TextsCategoryKeys;
    textsSubCategory: TextsSubCategoryKeys;
    textsTool: TextsToolKeys;
  };
};

export const validateTextsParams: ValidateParams = (
  variant: keyof Pick<
    ParamsType,
    "textsCategory" | "textsSubCategory" | "textsTool"
  >,
  params: Readonly<Partial<ParamsType>>,
) => {
  const requiredFields = {
    textsCategory: ["textsCategory"],
    textsSubCategory: ["textsCategory", "textsSubCategory"],
    textsTool: ["textsCategory", "textsSubCategory", "textsTool"],
  }[variant];

  requiredFields.forEach((field) => {
    if (!params[field]) {
      throw new Error("Missing required field");
    }
  });

  const categoryParam = params.textsCategory;
  const subCategoryParam = params.textsSubCategory;
  const toolParam = params.textsTool;

  if (
    variant === "textsCategory" ||
    variant === "textsSubCategory" ||
    variant === "textsTool"
  ) {
    if (
      categoryParam &&
      !Object.keys(APP_STRUCTURE.texts).includes(categoryParam)
    ) {
      throw new Error("Texts category not found");
    }
  }

  if (variant === "textsSubCategory" || variant === "textsTool") {
    if (
      subCategoryParam &&
      !Object.keys(
        APP_STRUCTURE.texts[categoryParam as TextsCategoryKeys].subCategories,
      ).includes(subCategoryParam)
    ) {
      throw new Error("Texts subcategory not found");
    }
  }

  if (variant === "textsTool") {
    if (
      toolParam &&
      !Object.keys(
        (APP_STRUCTURE.texts as App["texts"])[
          categoryParam as TextsCategoryKeys
        ].subCategories[subCategoryParam as TextsSubCategoryKeys].tools,
      ).includes(toolParam)
    ) {
      throw new Error("Tool not found");
    }
  }

  return requiredFields.reduce(
    (acc, field) => ({ ...acc, [field]: params[field] }),
    {},
  ) as ReturnType<ValidateParams>;
};
