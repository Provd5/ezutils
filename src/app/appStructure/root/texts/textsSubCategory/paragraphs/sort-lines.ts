import { BsSortDown } from "react-icons/bs";

import { SORT_LINES_ROUTE_BASE } from "~/app/appStructure/routes";

export type SortLinesToolsKeys = keyof typeof SORT_LINES_SUBCATEGORY.tools;

export const SORT_LINES_SUBCATEGORY = {
  href: SORT_LINES_ROUTE_BASE,
  label: "Sort lines",
  Icon: BsSortDown,
  tools: {
    sortLinesAsc: {
      href: `${SORT_LINES_ROUTE_BASE}/sortLinesAsc`,
      label: "Sort ascending",
      description: `Sort lines numerically and alphabetically in ascending order`,
      inputExample: `Lorem\n1. ipsum\ndolor\nsit\n2. amet`,
      outputExample: `1. ipsum\n2. amet\ndolor\nLorem\nsit`,
    },
    reverseLines: {
      href: `${SORT_LINES_ROUTE_BASE}/reverseLines`,
      label: "Reverse lines",
      description: `Reverse the order of the lines`,
      inputExample: `1. ipsum\n2. amet\ndolor\nLorem\nsit`,
      outputExample: `sit\nLorem\ndolor\n2. amet\n1. ipsum`,
    },
    shuffleLines: {
      href: `${SORT_LINES_ROUTE_BASE}/shuffleLines`,
      label: "Shuffle lines",
      description: `Arrange the lines in a random order`,
      inputExample: `1. Lorem\n2. ipsum\n3. dolor\n4. sit\n5. amet`,
      outputExample: `3. dolor\n5. amet\n4. sit\n1. Lorem\n2. ipsum`,
    },
  },
} as const;
