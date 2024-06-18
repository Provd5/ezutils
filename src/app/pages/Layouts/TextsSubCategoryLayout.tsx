import { Outlet } from "react-router-dom";

import { TextsSubNav } from "~/components/Navbar/TextsSubNav/texts-sub-nav";

export default function TextsSubCategoryLayout() {
  return (
    <>
      <TextsSubNav />
      <Outlet />
    </>
  );
}
