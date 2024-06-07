import type { FC } from "react";
import { useParams } from "react-router-dom";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type Tool } from "~/app/appStructure/structure-types";
import { type ParamsType } from "~/app/routes/react-routes";

import { ToolsNavLink } from "./tools-nav-link";

export const ToolsNav: FC = ({}) => {
  const { subCategory, category } = useParams<ParamsType>();

  if (
    !subCategory ||
    !category ||
    !Object.keys(APP_STRUCTURE.categories[category].subCategories).includes(
      subCategory,
    ) ||
    !Object.keys(APP_STRUCTURE.categories).includes(category)
  )
    return;

  const tools: Tool[] = Object.values(
    APP_STRUCTURE.categories[category].subCategories[subCategory].tools,
  );

  return (
    <nav className="flex justify-center gap-1 overflow-x-auto px-3 pt-3">
      {tools.map((tool) => (
        <ToolsNavLink key={`SubNav-SubNavLink-${tool.href}`} variant={tool} />
      ))}
    </nav>
  );
};
