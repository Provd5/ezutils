import { ScrollArea } from "../ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "../ui/sidebar";
import { AppSidebarColorToolsGroup } from "./AppSidebarContent/app-sidebar-color-tools-group";
import { AppSidebarFooter } from "./AppSidebarContent/app-sidebar-footer";
import { AppSidebarHeader } from "./AppSidebarContent/app-sidebar-header";
import { AppSidebarTextToolsGroup } from "./AppSidebarContent/app-sidebar-text-tools-group";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <AppSidebarHeader />
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea>
          <SidebarGroup>
            <SidebarGroupLabel>Text tools</SidebarGroupLabel>
            <AppSidebarTextToolsGroup />
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Color tools</SidebarGroupLabel>
            <AppSidebarColorToolsGroup />
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter>
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
