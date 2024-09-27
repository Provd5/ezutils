import type { FC } from "react";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { Logo } from "~/components/logo";

import { RootNavLink } from "./root-nav-link";

export const RootNav: FC = ({}) => {
  return (
    <nav className="flex flex-col gap-3 max-md:mt-6">
      <div className="mb-3 ml-3">
        <Logo />
      </div>
      <RootNavLink variant={APP_STRUCTURE.home} />
      <h1 className="text-sm text-muted-foreground">Categories</h1>
      <div className="flex flex-col gap-1">
        <RootNavLink variant={APP_STRUCTURE.texts.sentences} />
        <RootNavLink variant={APP_STRUCTURE.texts.paragraphs} />
        <RootNavLink variant={APP_STRUCTURE.colors} />
      </div>
    </nav>
  );
};
