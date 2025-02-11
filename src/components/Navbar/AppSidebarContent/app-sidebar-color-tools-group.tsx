import type { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export const AppSidebarColorToolsGroup: FC = () => {
  const { pathname } = useLocation();
  const { Icon, href, label } = APP_STRUCTURE.colors;
  const isActive = pathname === href;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip={label}
          asChild
          isActive={isActive}
          variant={"outline"}
          className="bg-transparent"
        >
          <NavLink to={href}>
            {<Icon />}
            <span className="whitespace-nowrap">{label}</span>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
