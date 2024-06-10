import { MdFormatListBulleted } from "react-icons/md";

import { AFFIXES_ROUTE_BASE } from "~/app/appStructure/routes";

export type AffixesToolsType = keyof typeof AFFIXES_SUBCATEGORY.tools;

export const AFFIXES_SUBCATEGORY = {
  href: AFFIXES_ROUTE_BASE,
  label: "Affixes",
  Icon: MdFormatListBulleted,
  tools: {
    numberLines: {
      href: `${AFFIXES_ROUTE_BASE}/numberLines`,
      label: "Insert numbering",
      description: `Add numbering at the beginning of each new line`,
      inputExample: `Lorem ipsum\ndolor\nsit amet`,
      outputExample: `1. Lorem ipsum\n2. dolor\n3. sit amet`,
    },
    prefixes: {
      href: `${AFFIXES_ROUTE_BASE}/prefixes`,
      label: "Edit prefixes",
      description: `Add a prefix at the beginning of each line`,
      inputExample: `Lorem ipsum\ndolor\nsit amet`,
      outputExample: `- Lorem ipsum\n- dolor\n- sit amet`,
    },
    suffixes: {
      href: `${AFFIXES_ROUTE_BASE}/suffixes`,
      label: "Edit Suffixes",
      description: `Add a suffix at the beginning of each line`,
      inputExample: `Lorem ipsum\ndolor\nsit amet`,
      outputExample: `Lorem ipsum:\ndolor:\nsit amet:`,
    },
  },
} as const;
