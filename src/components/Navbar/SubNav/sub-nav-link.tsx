import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type CategoryType, type ToolType } from "~/app/routes/routes";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/utils";

import { getSubNavLabels } from "./get-sub-nav-labels";

interface SubNavLinkProps {
  variant: ToolType[CategoryType];
}

export const SubNavLink: FC<SubNavLinkProps> = ({ variant }) => {
  const labels = getSubNavLabels(variant);

  return (
    <NavLink
      to={labels.to}
      className={({ isActive }) =>
        cn(
          buttonVariants({
            variant: isActive ? "default" : "secondary",
          }),
        )
      }
    >
      {labels.label}
      <labels.Icon className="ml-1 size-4 shrink-0" />
    </NavLink>
  );
};
