import { Outlet } from "react-router-dom";

import { SubNav } from "~/components/Navbar/SubNav/sub-nav";

export default function TextPage() {
  return (
    <>
      <div>
        <SubNav category="texts" />
        <Outlet />
      </div>
    </>
  );
}
