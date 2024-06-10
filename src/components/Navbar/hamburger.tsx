import type { FC } from "react";
import { RiMenuFoldLine } from "react-icons/ri";

import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { CategoriesNav } from "./CategoriesNav/categories-nav";

export const Hamburger: FC = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="ml-auto mt-1.5 rounded-r-none md:hidden"
        >
          <RiMenuFoldLine className="size-5 shrink-0" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <CategoriesNav />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
