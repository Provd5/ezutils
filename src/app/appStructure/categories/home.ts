import { FaRegPlayCircle } from "react-icons/fa";

import { type OmittedCategory } from "../structure-types";

export const HOME_CATEGORY: OmittedCategory = {
  href: "/",
  label: "Get started",
  Icon: FaRegPlayCircle,
} as const;
