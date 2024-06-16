import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type TextsSubCategory } from "~/types/texts";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/utils";

interface TextsNavLinkProps {
  variant: TextsSubCategory;
}

export const TextsNavLink: FC<TextsNavLinkProps> = ({ variant }) => {
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
      <variant.Icon className="ml-1 size-4" />
    </NavLink>
  );
};
