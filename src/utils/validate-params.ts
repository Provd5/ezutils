import {
  APP_STRUCTURE,
  type AppCategoriesType,
} from "~/app/appStructure/app-structure";
import {
  type AppStructure,
  type SubCategoryKeys,
  type ToolKeys,
} from "~/app/appStructure/structure-types";
import { type ParamsType } from "~/main";

type ValidateParams = {
  (
    variant: keyof Pick<ParamsType, "category">,
    params: Readonly<Partial<ParamsType>>,
  ): { category: AppCategoriesType };
  (
    variant: keyof Pick<ParamsType, "subCategory">,
    params: Readonly<Partial<ParamsType>>,
  ): { category: AppCategoriesType; subCategory: SubCategoryKeys };
  (
    variant: keyof Pick<ParamsType, "tool">,
    params: Readonly<Partial<ParamsType>>,
  ): {
    category: AppCategoriesType;
    subCategory: SubCategoryKeys;
    tool: ToolKeys;
  };
};

export const validateParams: ValidateParams = (
  variant: keyof Pick<ParamsType, "category" | "subCategory" | "tool">,
  params: Readonly<Partial<ParamsType>>,
) => {
  const requiredFields = {
    category: ["category"],
    subCategory: ["category", "subCategory"],
    tool: ["category", "subCategory", "tool"],
  }[variant];

  requiredFields.forEach((field) => {
    if (!params[field]) {
      throw new Error("Missing required field");
    }
  });

  const categoryParam = params.category as AppCategoriesType;
  const subCategoryParam = params.subCategory as SubCategoryKeys;
  const toolParam = params.tool as ToolKeys;

  if (variant === "subCategory" || variant === "tool") {
    if (
      !Object.keys(APP_STRUCTURE.categories).includes(categoryParam) ||
      !Object.keys(
        APP_STRUCTURE.categories[categoryParam].subCategories,
      ).includes(subCategoryParam)
    ) {
      throw new Error("Invalid category or subCategory");
    }
  }

  if (variant === "tool") {
    if (
      !Object.keys(
        (APP_STRUCTURE as AppStructure).categories[categoryParam].subCategories[
          subCategoryParam
        ].tools,
      ).includes(toolParam)
    ) {
      throw new Error("Invalid tool");
    }
  }

  return requiredFields.reduce(
    (acc, field) => ({ ...acc, [field]: params[field] }),
    {},
  ) as ReturnType<ValidateParams>;
};
