import { type FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { RiMenuFoldLine } from "react-icons/ri";

import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { RootNav } from "./Nav/root-nav";

export const Hamburger: FC = () => {
  const location = useLocation();
  const closeSheetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      closeSheetRef.current &&
      closeSheetRef.current.ariaExpanded === "true"
    ) {
      closeSheetRef.current.click();
    }
  }, [location]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button ref={closeSheetRef} size={"icon"} className="rounded-r-none">
          <RiMenuFoldLine className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <RootNav />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
