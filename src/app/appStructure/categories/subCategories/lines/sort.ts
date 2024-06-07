import { FaSortAmountDown } from "react-icons/fa";

import { SORT_ROUTE_BASE } from "~/app/appStructure/routes";

import { type SubCategory } from "../../../structure-types";

export const SORT_SUBCATEGORY: SubCategory = {
  href: SORT_ROUTE_BASE,
  label: "Sort lines",
  Icon: FaSortAmountDown,
  tools: {
    sortAsc: {
      href: `${SORT_ROUTE_BASE}/sortAsc`,
      label: "Sort ascending",
    },
    reverse: {
      href: `${SORT_ROUTE_BASE}/reverse`,
      label: "Reverse lines",
    },
    shuffle: {
      href: `${SORT_ROUTE_BASE}/shuffle`,
      label: "Shuffle lines",
    },
  },
} as const;
