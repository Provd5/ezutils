import type { FC } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

export const ToggleAppSidebar: FC = () => {
  const { toggleSidebar, open, isMobile } = useSidebar();

  return (
    <Button
      variant={"outline"}
      size={"sm"}
      onClick={toggleSidebar}
      className="gap-1"
    >
      {open && !isMobile ? <PanelLeftClose /> : <PanelLeftOpen />}
      <span>{open && !isMobile ? "Hide menu" : "Show menu"}</span>
    </Button>
  );
};
