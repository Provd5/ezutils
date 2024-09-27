import { VscSymbolColor } from "react-icons/vsc";

import { COLORS_ROUTE_BASE } from "../routes";

export const COLORS_CATEGORY = {
  href: COLORS_ROUTE_BASE,
  label: "Colors converter",
  Icon: VscSymbolColor,
  tools: {
    colorsConverter: {
      href: COLORS_ROUTE_BASE,
      label: "Convert colors",
      description:
        "Paste color and convert it between RGB, HSL, and hexadecimal",
    },
  },
} as const;
