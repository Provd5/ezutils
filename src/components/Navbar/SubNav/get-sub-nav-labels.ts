import { type IconType } from "react-icons";
import { BiSortAlt2 } from "react-icons/bi";
import { CgFormatSeparator } from "react-icons/cg";
import { FaRemoveFormat } from "react-icons/fa";
import { MdFindReplace, MdFormatListBulleted } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { TfiUppercase } from "react-icons/tfi";

import { type CategoryType, ROUTES, type ToolType } from "~/app/routes/routes";

export const getSubNavLabels = (variant: ToolType[CategoryType]) => {
  let labels: { to: string; label: string; Icon: IconType };

  switch (variant) {
    case "affixes":
      labels = {
        to: ROUTES.lines.affixes,
        label: "Affixes",
        Icon: MdFormatListBulleted,
      };
      break;
    case "case-converter":
      labels = {
        to: ROUTES.texts["case-converter"],
        label: "Letter case",
        Icon: TfiUppercase,
      };
      break;
    case "find-in-text":
      labels = {
        to: ROUTES.texts["find-in-text"],
        label: "Find in text",
        Icon: RiMenuSearchLine,
      };
      break;
    case "line-breaks":
      labels = {
        to: ROUTES.lines["line-breaks"],
        label: "Line breaks",
        Icon: CgFormatSeparator,
      };
      break;
    case "remove":
      labels = {
        to: ROUTES.texts.remove,
        label: "Remove",
        Icon: FaRemoveFormat,
      };
      break;
    case "replace":
      labels = {
        to: ROUTES.texts.replace,
        label: "Replace",
        Icon: MdFindReplace,
      };
      break;
    case "sort":
      labels = {
        to: ROUTES.lines.sort,
        label: "Sort lines",
        Icon: BiSortAlt2,
      };
      break;
  }

  return labels;
};
