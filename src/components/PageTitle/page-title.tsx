import { type FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { type AppCategoryKeys } from "~/types/app";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";

import { APP_NAME } from "../logo";
import { textsPageTitle } from "./texts-page-title";

export const PageTitle: FC = ({}) => {
  const location = useLocation();
  const pathnameSplits = location.pathname.split("/").filter((s) => s !== "");

  const root = (pathnameSplits[0] || "home") as AppCategoryKeys;
  const category = pathnameSplits[1];
  const subcategory = pathnameSplits[2];
  const tool = pathnameSplits[3];

  const defaultTitle = APP_NAME;

  useEffect(() => {
    let newTitle: string;
    const template = (title?: string) =>
      title ? `${title} - ${APP_NAME}` : defaultTitle;

    switch (root) {
      case "home":
        newTitle = template(APP_STRUCTURE.home.label);
        break;
      case "colors":
        newTitle = template(APP_STRUCTURE.colors.label);
        break;
      case "texts":
        newTitle = template(textsPageTitle(category, subcategory, tool));
        break;

      default:
        newTitle = defaultTitle;
        break;
    }

    document.title = newTitle;
  }, [category, defaultTitle, root, subcategory, tool]);

  return null;
};
