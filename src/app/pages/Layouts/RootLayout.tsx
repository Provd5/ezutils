import { Outlet } from "react-router-dom";

import { AppSidebar } from "~/components/Navbar/app-sidebar";
import { ToggleAppSidebar } from "~/components/Navbar/toggle-app-sidebar";
import { PageTitle } from "~/components/PageTitle/page-title";
import { SidebarProvider } from "~/components/ui/sidebar";

export default function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex min-h-screen w-full">
        <PageTitle />

        <main className="flex w-full grow flex-col">
          <div className="mx-1 mt-1 flex">
            <ToggleAppSidebar />
          </div>

          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
