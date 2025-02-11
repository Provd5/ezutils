import type { FC } from "react";
import { Link } from "react-router-dom";

import { APP_NAME, LogoImg, LogoLabel } from "~/components/logo";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export const AppSidebarFooter: FC = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip={APP_NAME}
          size="lg"
          className="select-none gap-0.5"
        >
          <Link to={"/"} className="contents">
            <LogoImg size="sm" />
            <LogoLabel size="sm" />
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
