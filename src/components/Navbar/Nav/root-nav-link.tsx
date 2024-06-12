import type { FC } from "react";
import { NavLink } from "react-router-dom";

import { type CategoryBase } from "~/types/app";

import { cn } from "~/utils/utils";

import { buttonVariants } from "../../ui/button";

interface RootNavLinkProps {
  variant: CategoryBase;
}

export const RootNavLink: FC<RootNavLinkProps> = ({ variant }) => {
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
      <variant.Icon className="ml-1 size-5 shrink-0" />
    </NavLink>
  );
};
