import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type OmittedCategory } from "~/app/appStructure/structure-types";
import { cn } from "~/utils/utils";

import { buttonVariants } from "../../ui/button";

interface CategoriesNavLinkProps {
  variant: OmittedCategory;
}

export const CategoriesNavLink: FC<CategoriesNavLinkProps> = ({ variant }) => {
  return (
    <NavLink
      to={variant.href}
      className={({ isActive }) =>
        cn(
          buttonVariants({
            variant: isActive ? "default" : "secondary",
            size: "lg",
          }),
          "w-full",
        )
      }
    >
      {variant.label}
      <variant.Icon className="ml-1 size-4 shrink-0" />
    </NavLink>
  );
};
