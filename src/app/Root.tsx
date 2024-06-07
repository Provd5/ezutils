import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { WelcomeScreen } from "~/components/welcome-screen";

import CategoryLayout from "./pages/Layouts/CategoryLayout";
import RootLayout from "./pages/Layouts/RootLayout";
import SubCategoryLayout from "./pages/Layouts/SubCategoryLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ToolPage from "./pages/ToolPage";

export type ParamsType = {
  category: string;
  subCategory: string;
  tool: string;
};

export const Root: FC = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} errorElement={<NotFoundPage />}>
        <Route index element={<WelcomeScreen />} />
        <Route path="c">
          <Route path=":category" element={<CategoryLayout />}>
            <Route path=":subCategory" element={<SubCategoryLayout />}>
              <Route path=":tool" element={<ToolPage />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
