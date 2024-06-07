import { CgFormatSeparator } from "react-icons/cg";

import { LINE_BREAKS_ROUTE_BASE } from "~/app/appStructure/routes";

import { type SubCategory } from "../../../structure-types";

export const LINE_BREAKS_SUBCATEGORY: SubCategory = {
  href: LINE_BREAKS_ROUTE_BASE,
  label: "Line breaks",
  Icon: CgFormatSeparator,
  tools: {
    add: {
      href: `${LINE_BREAKS_ROUTE_BASE}/add`,
      label: "Add new lines",
    },
    remove: {
      href: `${LINE_BREAKS_ROUTE_BASE}/remove`,
      label: "Remove empty lines",
    },
    removeExcess: {
      href: `${LINE_BREAKS_ROUTE_BASE}/removeExcess`,
      label: "Remove excess lines",
    },
    removeDuplicated: {
      href: `${LINE_BREAKS_ROUTE_BASE}/removeDuplicated`,
      label: "Remove duplicated lines",
    },
  },
} as const;
