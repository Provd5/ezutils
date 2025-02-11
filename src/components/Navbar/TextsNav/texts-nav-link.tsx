import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type TextsSubCategory } from "~/types/texts";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

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
            variant: isActive ? "default" : "outline",
            size: "lg",
          }),
          "rounded-full",
        )
      }
    >
      {variant.label}
      <variant.Icon className="ml-1 size-4" />
    </NavLink>
  );
};
