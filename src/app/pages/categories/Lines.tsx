import { Outlet } from "react-router-dom";

import { SubNav } from "~/components/Navbar/SubNav/sub-nav";

export default function LinesPage() {
  return (
    <>
      <div>
        <SubNav category="lines" />
        <Outlet />
      </div>
    </>
  );
}
