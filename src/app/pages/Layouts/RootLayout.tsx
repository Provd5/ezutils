import { Outlet } from "react-router-dom";

import { Navbar } from "~/components/Navbar/navbar";

export default function RootLayout() {
  return (
    <div className="flex h-screen flex-col-reverse md:flex-row">
      <main className="w-full grow md:pr-80 lg:pr-96">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
