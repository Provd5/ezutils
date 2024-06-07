import { Outlet } from "react-router-dom";

import { ToolsNav } from "~/components/Navbar/ToolsNav/tools-nav";

export default function SubCategoryLayout() {
  return (
    <div>
      <ToolsNav />
      <Outlet />
    </div>
  );
}
