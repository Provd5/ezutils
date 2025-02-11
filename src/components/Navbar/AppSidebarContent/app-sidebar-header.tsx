import type { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export const AppSidebarHeader: FC = () => {
  const { pathname } = useLocation();
  const isActive = pathname === APP_STRUCTURE.home.href;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip={APP_STRUCTURE.home.label}
          asChild
          isActive={isActive}
          variant={"outline"}
          className="bg-transparent"
        >
          <NavLink to={APP_STRUCTURE.home.href}>
            <APP_STRUCTURE.home.Icon />
            <span>{APP_STRUCTURE.home.label}</span>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
