import type { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { type TextsSubCategory, type TextsTool } from "~/types/texts";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar";

export const AppSidebarTextToolsGroup: FC = () => {
  const { pathname } = useLocation();
  const isActive = (href: string) => pathname === href;

  return (
    <SidebarMenu>
      {Object.values(APP_STRUCTURE.texts).map((category) => (
        <Collapsible key={category.href} asChild className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                tooltip={category.label}
                asChild
                isActive={isActive(category.href)}
                variant={"outline"}
                className="bg-transparent"
              >
                <NavLink to={category.href}>
                  {<category.Icon />}
                  <span className="whitespace-nowrap">{category.label}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </NavLink>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {Object.values(category.subCategories).map(
                (subCategory: TextsSubCategory) => (
                  <Collapsible
                    key={subCategory.href}
                    asChild
                    className="group/collapsibleSub gap-0"
                  >
                    <SidebarMenu>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={subCategory.label}
                          asChild
                          isActive={isActive(subCategory.href)}
                        >
                          <NavLink to={subCategory.href}>
                            {<subCategory.Icon />}
                            <span className="whitespace-nowrap">
                              {subCategory.label}
                            </span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsibleSub:rotate-90" />
                          </NavLink>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {Object.values(subCategory.tools).map(
                            (tool: TextsTool) => (
                              <SidebarMenuSubItem key={tool.href}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isActive(tool.href)}
                                >
                                  <NavLink to={tool.href}>
                                    <span className="whitespace-nowrap">
                                      {tool.label}
                                    </span>
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ),
                          )}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenu>
                  </Collapsible>
                ),
              )}
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  );
};
