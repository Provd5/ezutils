import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import ErrorPage from "./app/pages/ErrorPage";
import CategoryLayout from "./app/pages/Layouts/CategoryLayout";
import RootLayout from "./app/pages/Layouts/RootLayout";
import SubCategoryLayout from "./app/pages/Layouts/SubCategoryLayout";
import ToolPage from "./app/pages/ToolPage";
import { ThemeProvider } from "./components/ui/theme-provider";
import { WelcomeScreen } from "./components/welcome-screen";

export type ParamsType = {
  category: string;
  subCategory: string;
  tool: string;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomeScreen />} />
      <Route path="c">
        <Route path=":category" element={<CategoryLayout />}>
          <Route path=":subCategory" element={<SubCategoryLayout />}>
            <Route path=":tool" element={<ToolPage />} />
          </Route>
        </Route>
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
