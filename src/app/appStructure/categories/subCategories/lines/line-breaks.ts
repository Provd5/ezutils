import { CgFormatSeparator } from "react-icons/cg";

import { LINE_BREAKS_ROUTE_BASE } from "~/app/appStructure/routes";

export type LineBreaksToolsType = keyof typeof LINE_BREAKS_SUBCATEGORY.tools;

export const LINE_BREAKS_SUBCATEGORY = {
  href: LINE_BREAKS_ROUTE_BASE,
  label: "Line breaks",
  Icon: CgFormatSeparator,
  tools: {
    add: {
      href: `${LINE_BREAKS_ROUTE_BASE}/add`,
      label: "Add new lines",
      description: `Break the lines at a specific point (fe. after ", ")`,
      inputExample: `Lorem ipsum, dolor, sit amet`,
      outputExample: `Lorem ipsum, \ndolor, \nsit amet`,
    },
    remove: {
      href: `${LINE_BREAKS_ROUTE_BASE}/remove`,
      label: "Remove breaks",
      description: `Remove all line breaks`,
      inputExample: `Lorem ipsum\ndolor\nsit amet`,
      outputExample: `Lorem ipsum dolor sit amet`,
    },
    removeExcess: {
      href: `${LINE_BREAKS_ROUTE_BASE}/removeExcess`,
      label: "Remove excess breaks",
      description: `Remove all unnecessary line breaks`,
      inputExample: `Lorem\nipsum\n\ndolor\n\n\nsit amet`,
      outputExample: `Lorem\nipsum\ndolor\nsit amet`,
    },
    removeDuplicated: {
      href: `${LINE_BREAKS_ROUTE_BASE}/removeDuplicated`,
      label: "Remove duplicated lines",
      description: `Remove additional lines with the same content`,
      inputExample: `Lorem\nLorem\nipsum\ndolor!\nsit amet\ndolor!`,
      outputExample: `Lorem\nipsum\ndolor!\nsit amet`,
    },
  },
} as const;
