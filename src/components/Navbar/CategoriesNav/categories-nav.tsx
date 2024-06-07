import type { FC } from "react";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type Category } from "~/app/appStructure/structure-types";

import { CategoriesNavLink } from "./categories-nav-link";

export const CategoriesNav: FC = ({}) => {
  const categories: Category[] = Object.values(APP_STRUCTURE.categories);

  return (
    <nav className="flex flex-col gap-3">
      <h1 className="my-1 text-center text-3xl md:text-end">Logo</h1>
      <CategoriesNavLink variant={APP_STRUCTURE.home} />
      <h1 className="text-sm text-muted-foreground">Categories</h1>
      <div className="flex flex-col gap-1">
        {categories.map((category) => (
          <CategoriesNavLink
            key={`Nav-StyledNavLink-${category.href}`}
            variant={category}
          />
        ))}
      </div>
    </nav>
  );
};
