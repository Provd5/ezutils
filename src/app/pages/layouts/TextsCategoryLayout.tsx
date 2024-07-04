import { Outlet } from "react-router-dom";

import { TextsNav } from "~/components/Navbar/TextsNav/texts-nav";

export default function TextsCategoryLayout() {
  return (
    <>
      <TextsNav />
      <Outlet />
    </>
  );
}
