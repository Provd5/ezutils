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
    pathname: string,
  ): { textsCategory: TextsCategoryKeys };
  (
    variant: keyof Pick<ParamsType, "textsSubCategory">,
    pathname: string,
  ): {
    textsCategory: TextsCategoryKeys;
    textsSubCategory: TextsSubCategoryKeys;
  };
  (
    variant: keyof Pick<ParamsType, "textsTool">,
    pathname: string,
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
  pathname: string,
) => {
  const requiredFields = {
    textsCategory: ["textsCategory"],
    textsSubCategory: ["textsCategory", "textsSubCategory"],
    textsTool: ["textsCategory", "textsSubCategory", "textsTool"],
  }[variant];

  const pathnameSplits = pathname.split("/").filter((s) => s !== "");

  const category = pathnameSplits[1];
  const subcategory = pathnameSplits[2];
  const tool = pathnameSplits[3];

  if (
    variant === "textsCategory" ||
    variant === "textsSubCategory" ||
    variant === "textsTool"
  ) {
    if (category && !Object.keys(APP_STRUCTURE.texts).includes(category)) {
      throw new Error("Texts category not found");
    }
  }

  if (variant === "textsSubCategory" || variant === "textsTool") {
    if (
      subcategory &&
      !Object.keys(
        APP_STRUCTURE.texts[category as TextsCategoryKeys].subCategories,
      ).includes(subcategory)
    ) {
      throw new Error("Texts subcategory not found");
    }
  }

  if (variant === "textsTool") {
    if (
      tool &&
      !Object.keys(
        (APP_STRUCTURE.texts as App["texts"])[category as TextsCategoryKeys]
          .subCategories[subcategory as TextsSubCategoryKeys].tools,
      ).includes(tool)
    ) {
      throw new Error("Tool not found");
    }
  }

  const returnFields = requiredFields.reduce(
    (acc, field) => ({
      ...acc,
      [field]:
        field === "textsCategory"
          ? category
          : field === "textsSubCategory"
            ? subcategory
            : tool,
    }),
    {},
  ) as ReturnType<ValidateParams>;

  return returnFields;
};
