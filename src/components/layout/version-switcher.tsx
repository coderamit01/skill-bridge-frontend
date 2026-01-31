"use client";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Image from "next/image";

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            height={100}
            width={100}
            className="w-4 h-auto"
            alt="Logo"
          />
          <span className="font-medium">Skill Bridge</span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
