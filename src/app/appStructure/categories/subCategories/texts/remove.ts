import { FaRemoveFormat } from "react-icons/fa";

import { REMOVE_ROUTE_BASE } from "~/app/appStructure/routes";

import { type SubCategory } from "../../../structure-types";

export const REMOVE_SUBCATEGORY: SubCategory = {
  href: REMOVE_ROUTE_BASE,
  label: "Remove",
  Icon: FaRemoveFormat,
  tools: {
    spaces: {
      href: `${REMOVE_ROUTE_BASE}/spaces`,
      label: "Remove spaces",
    },
    excessSpaces: {
      href: `${REMOVE_ROUTE_BASE}/excessSpaces`,
      label: "Remove excess spaces",
    },
    accents: {
      href: `${REMOVE_ROUTE_BASE}/accents`,
      label: "Remove accents",
    },
    replace: {
      href: `${REMOVE_ROUTE_BASE}/replace`,
      label: "Replace",
    },
  },
} as const;
