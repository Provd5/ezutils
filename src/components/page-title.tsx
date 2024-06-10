import { type FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { type ParamsType } from "~/main";

import { APP_NAME } from "./logo";

export const PageTitle: FC = ({}) => {
  const params = useParams<ParamsType>();
  const location = useLocation();

  const titleTemplate = ` - ${APP_NAME}`;

  useEffect(() => {
    const newTitle = params.category
      ? params.subCategory
        ? params.tool
          ? `#${params.subCategory}/${params.tool}` + titleTemplate
          : `#${params.subCategory}` + titleTemplate
        : `#${params.category}` + titleTemplate
      : `Get started` + titleTemplate;

    document.title = newTitle;
  }, [
    location,
    params.category,
    params.subCategory,
    params.tool,
    titleTemplate,
  ]);

  return null;
};
