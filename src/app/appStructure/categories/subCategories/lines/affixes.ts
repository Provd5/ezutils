import { MdFormatListBulleted } from "react-icons/md";

import { AFFIXES_ROUTE_BASE } from "~/app/appStructure/routes";

import { type SubCategory } from "../../../structure-types";

export const AFFIXES_SUBCATEGORY: SubCategory = {
  href: AFFIXES_ROUTE_BASE,
  label: "Affixes",
  Icon: MdFormatListBulleted,
  tools: {
    numberLines: {
      href: `${AFFIXES_ROUTE_BASE}/numberLines`,
      label: "Insert numbering",
    },
    prefixes: {
      href: `${AFFIXES_ROUTE_BASE}/prefixes`,
      label: "Edit prefixes",
    },
    suffixes: {
      href: `${AFFIXES_ROUTE_BASE}/suffixes`,
      label: "Edit Suffixes",
    },
  },
} as const;
