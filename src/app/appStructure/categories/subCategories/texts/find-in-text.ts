import { RiMenuSearchLine } from "react-icons/ri";

import { FIND_IN_TEXT_ROUTE_BASE } from "~/app/appStructure/routes";

export type FindInTextToolsType = keyof typeof FIND_IN_TEXT_SUBCATEGORY.tools;

export const FIND_IN_TEXT_SUBCATEGORY = {
  href: FIND_IN_TEXT_ROUTE_BASE,
  label: "Find in text",
  Icon: RiMenuSearchLine,
  tools: {
    links: {
      href: `${FIND_IN_TEXT_ROUTE_BASE}/links`,
      label: "Find links",
      description: `Find words that look like websites links or emails`,
      inputExample: `Lorem ipsum dolor, www.google.com sit amet, consectetur john@doe.com adipiscing elit https://mail.google.com.`,
      outputExample: `www.google.com\njohn@doe.com\nhttps://mail.google.com`,
    },
    quote: {
      href: `${FIND_IN_TEXT_ROUTE_BASE}/quote`,
      label: "Find quotes",
      description: `Find words that are in quotes`,
      inputExample: `Lorem «ipsum» “dolor sit amet”, consectetur "adipiscing" elit.`,
      outputExample: `ipsum\ndolor sit amet\nadipiscing`,
    },
    letters: {
      href: `${FIND_IN_TEXT_ROUTE_BASE}/letters`,
      label: "Only letters",
      description: `Remove everything from the text that is not letters`,
      inputExample: `Lorem ipsum!\n1. Dolor sit amet,\n2. Consectetur-adipiscing elit...`,
      outputExample: `Lorem ipsum\nDolor sit amet\nConsecteturadipiscing elit`,
    },
    notLetters: {
      href: `${FIND_IN_TEXT_ROUTE_BASE}/notLetters`,
      label: "Not letters",
      description: `Remove from the text everything that is letters`,
      inputExample: `Lorem ipsum!\n1. Dolor sit amet,\n2. Consectetur-adipiscing elit...`,
      outputExample: `!\n1.,\n2.-...`,
    },
  },
} as const;
