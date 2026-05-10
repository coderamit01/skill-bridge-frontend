import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Route } from "@/types/route-types";
import { adminRoutes } from "@/routes/adminRoutes";
import { studentRoutes } from "@/routes/studentRoutes";
import { tutorRoutes } from "@/routes/tutorRoutes";
import Link from "next/link";
import { Role } from "@/types/user.types";

export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>;
}) {
  let routes: Route[] = [];
  switch (user.role) {
    case Role.ADMIN:
      routes = adminRoutes;
      break;

    case Role.STUDENT:
      routes = studentRoutes;
      break;

    case Role.TUTOR:
      routes = tutorRoutes;
      break;

    default:
      routes = [];
      break;
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 flex items-center justify-center border-b p-1">
        <span className="font-2xl font-semibold ">Skill Bridge</span>
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
