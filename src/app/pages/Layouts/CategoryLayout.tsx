import { Outlet } from "react-router-dom";

import { SubNav } from "~/components/Navbar/SubCategoriesNav/sub-nav";

export default function CategoryLayout() {
  return (
    <>
      <SubNav />
      <Outlet />
    </>
  );
}
