import { RiFormatClear } from "react-icons/ri";

import { REMOVE_ROUTE_BASE } from "~/app/appStructure/routes";

export type RemoveToolsKeys = keyof typeof REMOVE_SUBCATEGORY.tools;

export const REMOVE_SUBCATEGORY = {
  href: REMOVE_ROUTE_BASE,
  label: "Remove",
  Icon: RiFormatClear,
  tools: {
    removeSpaces: {
      href: `${REMOVE_ROUTE_BASE}/removeSpaces`,
      label: "Remove spaces",
      description: `Remove all spacing in the text`,
      inputExample: `Lorem ipsum !\n dolor sit amet, \nconsectetur adipiscing elit.`,
      outputExample: `Loremipsum!\ndolorsitamet,\nconsecteturadipiscingelit.`,
    },
    removeExcessSpaces: {
      href: `${REMOVE_ROUTE_BASE}/removeExcessSpaces`,
      label: "Remove excess spaces",
      description: `Remove all unnecessary spacing in the text`,
      inputExample: `Lorem   ipsum !\n    dolor sit amet, \nconsectetur    adipiscing elit.`,
      outputExample: `Lorem ipsum !\ndolor sit amet,\nconsectetur adipiscing elit.`,
    },
    removeHtmlTags: {
      href: `${REMOVE_ROUTE_BASE}/removeHtmlTags`,
      label: "Remove HTML tags",
      description: `Remove all html tags from the text`,
      inputExample: `<h1>Lorem ipsum</h1>\n<p>dolor <a href="https://google.com">sit</a> amet</p>`,
      outputExample: `Lorem ipsum\ndolor sit amet`,
    },
    removeAccents: {
      href: `${REMOVE_ROUTE_BASE}/removeAccents`,
      label: "Remove accents",
      description: `Replace accented letters with regular letters`,
      inputExample: `café, coração, Übermut, łódź, Iлｔèｒｎåｔïｏԉ`,
      outputExample: `cafe, coracao, Ubermut, lodz, Internation`,
    },
  },
} as const;
