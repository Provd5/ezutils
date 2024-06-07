import type { FC } from "react";

import { Navbar } from "~/components/Navbar/navbar";

import { ReactRoutes } from "./routes/react-routes";

export const Root: FC = ({}) => {
  return (
    <>
      <div className="flex h-screen flex-row-reverse">
        <Navbar />
        <main className="grow">
          <ReactRoutes />
        </main>
      </div>
    </>
  );
};
