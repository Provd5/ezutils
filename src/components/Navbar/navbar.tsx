import type { FC } from "react";

import { Hamburger } from "./hamburger";
import { Nav } from "./Nav/nav";

export const Navbar: FC = ({}) => {
  return (
    <>
      <Hamburger />
      <div className="inset-y-0 right-0 h-full w-1/3 max-w-sm shrink-0 gap-4 border-l bg-background p-6 shadow-lg max-md:hidden">
        <Nav />
      </div>
    </>
  );
};
