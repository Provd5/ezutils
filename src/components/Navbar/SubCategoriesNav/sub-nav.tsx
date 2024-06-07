import type { FC } from "react";
import { useParams } from "react-router-dom";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type SubCategory } from "~/app/appStructure/structure-types";
import { type ParamsType } from "~/app/routes/react-routes";

import { SubNavLink } from "./sub-nav-link";

export const SubNav: FC = ({}) => {
  const { category } = useParams<ParamsType>();

  if (!category || !Object.keys(APP_STRUCTURE.categories).includes(category))
    return;

  const subCategories: SubCategory[] = Object.values(
    APP_STRUCTURE.categories[category].subCategories,
  );

  return (
    <nav className="flex justify-center gap-1 overflow-x-auto px-3 pt-3">
      {subCategories.map((subCategory) => (
        <SubNavLink
          key={`SubNav-SubNavLink-${subCategory.href}`}
          variant={subCategory}
        />
      ))}
    </nav>
  );
};
