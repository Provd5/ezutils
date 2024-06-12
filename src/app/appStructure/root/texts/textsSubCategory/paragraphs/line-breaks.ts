import { VscListFlat } from "react-icons/vsc";

import { LINE_BREAKS_ROUTE_BASE } from "~/app/appStructure/routes";

export type LineBreaksToolsKeys = keyof typeof LINE_BREAKS_SUBCATEGORY.tools;

export const LINE_BREAKS_SUBCATEGORY = {
  href: LINE_BREAKS_ROUTE_BASE,
  label: "Line breaks",
  Icon: VscListFlat,
  tools: {
    addNewBreak: {
      href: `${LINE_BREAKS_ROUTE_BASE}/addNewBreak`,
      label: "New breaks",
      description: `Break the lines at a specific point`,
      inputExample: `Lorem ipsum, dolor, sit amet`,
      outputExample: `Lorem ipsum, \ndolor, \nsit amet`,
    },
    removeBreaks: {
      href: `${LINE_BREAKS_ROUTE_BASE}/removeBreaks`,
      label: "Remove breaks",
      description: `Remove all line breaks`,
      inputExample: `Lorem ipsum\ndolor\nsit amet`,
      outputExample: `Lorem ipsum dolor sit amet`,
    },
    removeExcessBreaks: {
      href: `${LINE_BREAKS_ROUTE_BASE}/removeExcessBreaks`,
      label: "Remove excess breaks",
      description: `Remove all unnecessary line breaks`,
      inputExample: `Lorem\nipsum\n\ndolor\n\n\nsit amet`,
      outputExample: `Lorem\nipsum\ndolor\nsit amet`,
    },
    removeDuplicatedLines: {
      href: `${LINE_BREAKS_ROUTE_BASE}/removeDuplicatedLines`,
      label: "Remove duplicated lines",
      description: `Remove additional lines with the same content`,
      inputExample: `Lorem\nLorem\nipsum\ndolor!\nsit amet\ndolor!`,
      outputExample: `Lorem\nipsum\ndolor!\nsit amet`,
    },
  },
} as const;
