import { AppSidebar } from "@/components/layout/app-sidebar";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { DropdownMenuAvatar } from "@/components/layout/ProfileAvatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-3">
            <ModeToggle />
            <DropdownMenuAvatar />
          </div>
        </header>
        <div className="p-5">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
