import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type TextsTool } from "~/types/texts";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface TextsSubNavLinkProps {
  variant: TextsTool;
}

export const TextsSubNavLink: FC<TextsSubNavLinkProps> = ({ variant }) => {
  return (
    <NavLink
      to={variant.href}
      className={({ isActive }) =>
        cn(
          buttonVariants({
            variant: isActive ? "default" : "outline",
          }),
          "rounded-full",
        )
      }
    >
      {variant.label}
    </NavLink>
  );
};
