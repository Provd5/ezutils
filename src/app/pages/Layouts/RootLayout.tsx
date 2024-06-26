import { Outlet } from "react-router-dom";

import { Navbar } from "~/components/Navbar/navbar";
import { PageTitle } from "~/components/PageTitle/page-title";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row">
      <PageTitle />
      <main className="mr-auto w-full grow md:pl-80 lg:pl-96">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
