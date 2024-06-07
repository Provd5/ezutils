import { type IconType } from "react-icons";
import { BsParagraph } from "react-icons/bs";
import { FaRegPlayCircle } from "react-icons/fa";
import { PiCursorTextBold } from "react-icons/pi";

import { type CategoryType, ROUTES } from "~/app/routes/routes";

export const getNavLabels = (variant: CategoryType | "root") => {
  let labels: { to: string; label: string; Icon: IconType };

  switch (variant) {
    case "lines":
      labels = {
        to: ROUTES.lines.root,
        label: "Edit paragraphs",
        Icon: BsParagraph,
      };
      break;
    case "texts":
      labels = {
        to: ROUTES.texts.root,
        label: "Edit sentences",
        Icon: PiCursorTextBold,
      };
      break;
    default:
      labels = {
        to: ROUTES.root,
        label: "Get started",
        Icon: FaRegPlayCircle,
      };
      break;
  }

  return labels;
};
