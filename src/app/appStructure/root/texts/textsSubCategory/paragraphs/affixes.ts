import { VscListUnordered } from "react-icons/vsc";

import { AFFIXES_ROUTE_BASE } from "~/app/appStructure/routes";

export type AffixesToolsKeys = keyof typeof AFFIXES_SUBCATEGORY.tools;

export const AFFIXES_SUBCATEGORY = {
  href: AFFIXES_ROUTE_BASE,
  label: "Affixes",
  Icon: VscListUnordered,
  tools: {
    insertLineNumbering: {
      href: `${AFFIXES_ROUTE_BASE}/insertLineNumbering`,
      label: "Insert numbering",
      description: `Add numbering at the beginning of each new line`,
      inputExample: `Lorem ipsum\ndolor\nsit amet`,
      outputExample: `1. Lorem ipsum\n2. dolor\n3. sit amet`,
    },
    addPrefixes: {
      href: `${AFFIXES_ROUTE_BASE}/addPrefixes`,
      label: "Add prefixes",
      description: `Add a prefix at the beginning of each line`,
      inputExample: `Lorem ipsum\ndolor\nsit amet`,
      outputExample: `- Lorem ipsum\n- dolor\n- sit amet`,
    },
    addSuffixes: {
      href: `${AFFIXES_ROUTE_BASE}/addSuffixes`,
      label: "Add suffixes",
      description: `Add a suffix at the end of each line`,
      inputExample: `Lorem ipsum\ndolor\nsit amet`,
      outputExample: `Lorem ipsum.\ndolor.\nsit amet.`,
    },
  },
} as const;
