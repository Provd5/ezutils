import type { FC } from "react";
import { RiMenuFoldLine } from "react-icons/ri";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CategoriesNav } from "./CategoriesNav/categories-nav";

export const Hamburger: FC = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="absolute right-0 top-3 rounded-r-none md:hidden"
        >
          <RiMenuFoldLine className="size-5 shrink-0" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <CategoriesNav />
      </SheetContent>
    </Sheet>
  );
};
