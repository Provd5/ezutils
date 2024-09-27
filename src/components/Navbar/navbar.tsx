import type { FC } from "react";

import { Logo } from "../logo";
import { Hamburger } from "./hamburger";
import { RootNav } from "./Nav/root-nav";

export const Navbar: FC = ({}) => {
  return (
    <>
      <div className="fixed inset-y-0 left-0 w-full max-w-80 shrink-0 gap-4 border-r border-input bg-background p-6 shadow-lg max-md:hidden lg:max-w-96">
        <RootNav />
      </div>
      <div className="ml-1 mt-1 flex justify-between md:hidden">
        <Logo size="sm" />
        <Hamburger />
      </div>
    </>
  );
};
