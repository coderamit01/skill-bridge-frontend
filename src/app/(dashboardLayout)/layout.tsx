import { AppSidebar } from "@/components/layout/app-sidebar";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { DropdownMenuAvatar } from "@/components/layout/ProfileAvatar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Roles } from "@/constant/userRole";
import { userService } from "@/service/session.service";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { data, error } = await userService.getSession();
  if (error || !data) {
    redirect("/login");
  }
  const userInfo = data!.user;
  return (
    <SidebarProvider>
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-3">
            <ModeToggle />
            <DropdownMenuAvatar profile={userInfo} />
          </div>
        </header>
        <div className="p-5">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
