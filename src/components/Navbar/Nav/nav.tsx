import type { FC } from "react";

import { type CategoryType, TOOLS } from "~/app/routes/routes";

import { StyledNavLink } from "./styled-nav-link";

export const Nav: FC = ({}) => {
  return (
    <>
      <nav className="flex flex-col gap-3">
        <h1 className="my-1 text-center text-3xl md:text-end">Logo</h1>
        <StyledNavLink variant="root" />
        <h1 className="text-sm text-muted-foreground">Categories</h1>
        <div className="flex flex-col gap-1">
          {(Object.keys(TOOLS) as CategoryType[]).map((key) => (
            <StyledNavLink key={`Nav-StyledNavLink-${key}`} variant={key} />
          ))}
        </div>
      </nav>
    </>
  );
};
