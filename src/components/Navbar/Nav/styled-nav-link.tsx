import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type CategoryType } from "~/app/routes/routes";
import { cn } from "~/utils/utils";

import { buttonVariants } from "../../ui/button";
import { getNavLabels } from "./get-nav-labels";

interface StyledNavLinkProps {
  variant: CategoryType | "root";
}

export const StyledNavLink: FC<StyledNavLinkProps> = ({ variant }) => {
  const labels = getNavLabels(variant);

  return (
    <NavLink
      to={labels.to}
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
      {labels.label}
      <labels.Icon className="ml-1 size-4 shrink-0" />
    </NavLink>
  );
};
