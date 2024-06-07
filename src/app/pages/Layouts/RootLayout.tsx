import { Outlet } from "react-router-dom";

import { Navbar } from "~/components/Navbar/navbar";

export default function RootLayout() {
  return (
    <div className="flex h-screen flex-row-reverse">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}
