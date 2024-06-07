import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type Tool } from "~/app/appStructure/structure-types";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/utils";

interface ToolsNavLinkProps {
  variant: Tool;
}

export const ToolsNavLink: FC<ToolsNavLinkProps> = ({ variant }) => {
  return (
    <NavLink
      to={variant.href}
      className={({ isActive }) =>
        cn(
          buttonVariants({
            variant: isActive ? "default" : "secondary",
          }),
        )
      }
    >
      {variant.label}
    </NavLink>
  );
};
