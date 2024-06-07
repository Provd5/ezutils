import type { FC } from "react";

import { type CategoryType, TOOLS } from "~/app/routes/routes";

import { SubNavLink } from "./sub-nav-link";

interface SubNavProps {
  category: CategoryType;
}

export const SubNav: FC<SubNavProps> = ({ category }) => {
  return (
    <>
      <div>
        {TOOLS[category].map((tool) => (
          <SubNavLink key={`SubNav-SubNavLink-${tool}`} variant={tool} />
        ))}
      </div>
    </>
  );
};
