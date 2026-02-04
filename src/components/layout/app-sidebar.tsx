import * as React from "react";

import { SearchForm } from "@/components/layout/search-form";
import { VersionSwitcher } from "@/components/layout/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Route } from "@/type/route-types";
import { Roles } from "@/constant/userRole";
import { adminRoutes } from "@/routes/adminRoutes";
import { studentRoutes } from "@/routes/studentRoutes";
import { tutorRoutes } from "@/routes/tutorRoutes";
import Link from "next/link";


export function AppSidebar(
  { user, ...props }:{
    user: { role: string } &
  React.ComponentProps<typeof Sidebar>
  }) {
  
    let routes:Route[] = [];
    switch (user.role) {
      case Roles.admin:
        routes = adminRoutes
        break;
  
      case Roles.student:
        routes = studentRoutes
        break;
  
      case Roles.tutor:
        routes = tutorRoutes
        break;
  
      default:
        routes = [];
        break;
    }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {routes.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
