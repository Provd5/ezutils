import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "~/global.css";
import { APP_STRUCTURE } from "./app/appStructure/app-structure";
import ColorsToolPage from "./app/pages/ColorsToolPage";
import ErrorPage from "./app/pages/ErrorPage";
import RootLayout from "./app/pages/Layouts/RootLayout";
import TextsCategoryLayout from "./app/pages/Layouts/TextsCategoryLayout";
import TextsSubCategoryLayout from "./app/pages/Layouts/TextsSubCategoryLayout";
import TextsToolPage from "./app/pages/TextsToolPage";
import { store } from "./app/store";
import { HelpersRefsProvider } from "./components/Tools/Helpers/helpers-refs-provider";
import { ThemeProvider } from "./components/ui/theme-provider";
import { WelcomeScreen } from "./components/WelcomeScreen/welcome-screen";
import { type TextsTool } from "./types/texts";

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

      <Route path="/texts">
        <Route
          path={APP_STRUCTURE.texts.sentences.href}
          element={<TextsCategoryLayout />}
        >
          {Object.values(APP_STRUCTURE.texts.sentences.subCategories).map(
            (subCategory) => (
              <Route
                key={subCategory.href}
                path={subCategory.href}
                element={<TextsSubCategoryLayout />}
              >
                {Object.values(subCategory.tools).map((tool: TextsTool) => (
                  <Route
                    key={tool.href}
                    path={tool.href}
                    element={<TextsToolPage />}
                  ></Route>
                ))}
              </Route>
            ),
          )}
        </Route>
        <Route
          path={APP_STRUCTURE.texts.paragraphs.href}
          element={<TextsCategoryLayout />}
        >
          {Object.values(APP_STRUCTURE.texts.paragraphs.subCategories).map(
            (subCategory) => (
              <Route
                key={subCategory.href}
                path={subCategory.href}
                element={<TextsSubCategoryLayout />}
              >
                {Object.values(subCategory.tools).map((tool: TextsTool) => (
                  <Route
                    key={tool.href}
                    path={tool.href}
                    element={<TextsToolPage />}
                  ></Route>
                ))}
              </Route>
            ),
          )}
        </Route>
      </Route>

      <Route path="/colors" element={<ColorsToolPage />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <Provider store={store}>
        <HelpersRefsProvider>
          <RouterProvider router={router} />
        </HelpersRefsProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
