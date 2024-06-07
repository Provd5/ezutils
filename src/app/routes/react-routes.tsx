import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { LinesTool } from "~/components/Tools/lines-tool";
import { TextsTool } from "~/components/Tools/texts-tool";

import LinesPage from "../pages/categories/Lines";
import TextPage from "../pages/categories/Text";
import HomePage from "../pages/Home";
import { type CategoryType, ROUTES, type ToolType } from "./routes";

export type ParamsType = { tool: ToolType[CategoryType] };

export const ReactRoutes: FC = ({}) => {
  return (
    <Routes>
      <Route index path={ROUTES.root} element={<HomePage />} />
      <Route element={<LinesPage />}>
        <Route path="lines/:tool" element={<LinesTool />} />
      </Route>
      <Route element={<TextPage />}>
        <Route path="texts/:tool" element={<TextsTool />} />
      </Route>
    </Routes>
  );
};
