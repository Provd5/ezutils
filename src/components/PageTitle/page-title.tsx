import { type FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { type AppCategoryKeys } from "~/types/app";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type ParamsType } from "~/main";

import { APP_NAME } from "../logo";
import { textsPageTitle } from "./texts-page-title";

export const PageTitle: FC = ({}) => {
  const { textsCategory, textsSubCategory, textsTool } =
    useParams<ParamsType>();
  const location = useLocation();
  const pathnameParts = location.pathname.split("/");

  const root = (pathnameParts[1] || "home") as AppCategoryKeys;

  const defaultTitle = APP_NAME;
  const template = (title: string) => `${title} - ${APP_NAME}`;

  useEffect(() => {
    let newTitle: string;
    switch (root) {
      case "home":
        newTitle = template(APP_STRUCTURE.home.label);
        break;
      case "colors":
        newTitle = template(APP_STRUCTURE.colors.label);
        break;
      case "texts":
        newTitle = template(
          textsPageTitle(textsCategory, textsSubCategory, textsTool) ||
            defaultTitle,
        );
        break;

      default:
        newTitle = defaultTitle;
        break;
    }

    document.title = newTitle;
  }, [
    root,
    defaultTitle,
    location,
    textsCategory,
    textsSubCategory,
    textsTool,
  ]);

  return null;
};
