import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type SubCategory } from "~/app/appStructure/structure-types";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/utils";

interface SubNavLinkProps {
  variant: SubCategory;
}

export const SubNavLink: FC<SubNavLinkProps> = ({ variant }) => {
  return (
    <NavLink
      to={variant.href}
      className={({ isActive }) =>
        cn(
          buttonVariants({
            variant: isActive ? "default" : "secondary",
            size: "lg",
          }),
        )
      }
    >
      {variant.label}
      <variant.Icon className="ml-1 size-4 shrink-0" />
    </NavLink>
  );
};
