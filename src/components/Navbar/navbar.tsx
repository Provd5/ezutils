import type { FC } from "react";

import { CategoriesNav } from "./CategoriesNav/categories-nav";
import { Hamburger } from "./hamburger";

export const Navbar: FC = ({}) => {
  return (
    <>
      <div className="fixed inset-y-0 left-0 w-full max-w-80 shrink-0 gap-4 border-r bg-background p-6 shadow-lg max-md:hidden lg:max-w-96">
        <CategoriesNav />
      </div>
      <Hamburger />
    </>
  );
};
