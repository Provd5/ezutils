import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import ColorsToolPage from "./app/pages/ColorsToolPage";
import ErrorPage from "./app/pages/ErrorPage";
import TextsCategoryLayout from "./app/pages/layouts/CategoryLayout";
import RootLayout from "./app/pages/layouts/RootLayout";
import TextsSubCategoryLayout from "./app/pages/layouts/SubCategoryLayout";
import TextsToolPage from "./app/pages/TextsToolPage";
import { store } from "./app/store";
import { ThemeProvider } from "./components/ui/theme-provider";
import { WelcomeScreen } from "./components/welcome-screen";

export interface ParamsType {
  textsCategory?: string;
  textsSubCategory?: string;
  textsTool?: string;
  [key: string]: string | undefined;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomeScreen />} />
      <Route path="texts">
        <Route path=":textsCategory" element={<TextsCategoryLayout />}>
          <Route path=":textsSubCategory" element={<TextsSubCategoryLayout />}>
            <Route path=":textsTool" element={<TextsToolPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="colors" element={<ColorsToolPage />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
