import { AppSidebar } from "@/components/layout/app-sidebar";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { DropdownMenuAvatar } from "@/components/layout/ProfileAvatar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { userService } from "@/services/session.service";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const h = await headers();

  const userInfo = {
    id: h.get("x-user-id") ?? "",
    role: h.get("x-user-role") ?? ""
  }

  return (
    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-3">
            <ModeToggle />
            {/* <DropdownMenuAvatar profile={userInfo} /> */}
          </div>
        </header>
        <div className="p-5">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
