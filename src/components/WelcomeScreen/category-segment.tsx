import type { FC } from "react";
import { Link } from "react-router-dom";

import { type ToolBase } from "~/types/app";
import { type ColorsCategory } from "~/types/colors";
import { type TextsCategory, type TextsSubCategory } from "~/types/texts";

interface CategorySegmentProps {
  categoryData: ColorsCategory | TextsCategory;
}

export const CategorySegment: FC<CategorySegmentProps> = ({ categoryData }) => {
  const isSubCategories = "subCategories" in categoryData;
  const isTools = "tools" in categoryData;

  const renderTools = (tools: object) => (
    <div className="mt-1 flex flex-col gap-2">
      {Object.values(tools).map((tool: ToolBase) => (
        <Link key={tool.href} to={tool.href} className="ml-2 hover:scale-105">
          <p>
            <span className="font-semibold italic">{tool.label}</span> -{" "}
            {tool.description}
          </p>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-3 text-justify xl:max-w-[47%] 2xl:max-w-[30%]">
      <h2 className="text-2xl font-bold">{categoryData.label}</h2>
      {isSubCategories ? (
        Object.values(categoryData.subCategories).map(
          (subCategory: TextsSubCategory) => (
            <div className="ml-2" key={subCategory.href}>
              <h3 className="text-xl font-semibold">{subCategory.label}:</h3>
              {renderTools(subCategory.tools)}
            </div>
          ),
        )
      ) : isTools ? (
        <div className="ml-2" key={categoryData.href}>
          <h3 className="text-xl font-semibold">{categoryData.label}:</h3>
          {renderTools(categoryData.tools)}
        </div>
      ) : null}
    </div>
  );
};
