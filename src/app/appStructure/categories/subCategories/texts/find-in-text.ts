import { RiMenuSearchLine } from "react-icons/ri";

import { FIND_IN_TEXT_ROUTE_BASE } from "~/app/appStructure/routes";

import { type SubCategory } from "../../../structure-types";

export const FIND_IN_TEXT_SUBCATEGORY: SubCategory = {
  href: FIND_IN_TEXT_ROUTE_BASE,
  label: "Find in text",
  Icon: RiMenuSearchLine,
  tools: {
    link: {
      href: `${FIND_IN_TEXT_ROUTE_BASE}/href`,
      label: "Find links",
    },
    quote: {
      href: `${FIND_IN_TEXT_ROUTE_BASE}/quote`,
      label: "Find quotes",
    },
    letters: {
      href: `${FIND_IN_TEXT_ROUTE_BASE}/letters`,
      label: "Only letters",
    },
    numbers: {
      href: `${FIND_IN_TEXT_ROUTE_BASE}/numbers`,
      label: "Only numbers",
    },
  },
} as const;
