import { TbSortAscendingLetters } from "react-icons/tb";

import { SORT_WORDS_ROUTE_BASE } from "~/app/appStructure/routes";

export type SortWordsToolsKeys = keyof typeof SORT_WORDS_SUBCATEGORY.tools;

export const SORT_WORDS_SUBCATEGORY = {
  href: SORT_WORDS_ROUTE_BASE,
  label: "Sort words",
  Icon: TbSortAscendingLetters,
  tools: {
    sortWordsAsc: {
      href: `${SORT_WORDS_ROUTE_BASE}/sortWordsAsc`,
      label: "Sort ascending",
      description: `Sort words numerically and alphabetically in ascending order`,
      inputExample: `Lorem ipsum dolor sit amet`,
      outputExample: `amet dolor ipsum Lorem sit`,
    },
    reverseWords: {
      href: `${SORT_WORDS_ROUTE_BASE}/reverseWords`,
      label: "Reverse words",
      description: `Reverse the order of the letters in the words`,
      inputExample: `Lorem ipsum dolor sit amet`,
      outputExample: `meroL muspi rolod tis tema`,
    },
    reverseSentence: {
      href: `${SORT_WORDS_ROUTE_BASE}/reverseSentence`,
      label: "Reverse sentence",
      description: `Reverse the order of the text`,
      inputExample: `Lorem ipsum dolor sit amet`,
      outputExample: `tema tis rolod muspi meroL`,
    },
    shuffleWords: {
      href: `${SORT_WORDS_ROUTE_BASE}/shuffleWords`,
      label: "Shuffle words",
      description: `Arrange the words in a random order`,
      inputExample: `Lorem ipsum dolor sit amet`,
      outputExample: `dolor amet sit Lorem ipsum`,
    },
    shuffleLetters: {
      href: `${SORT_WORDS_ROUTE_BASE}/shuffleLetters`,
      label: "Shuffle letters",
      description: `Arrange the letters in the words in a random order`,
      inputExample: `Lorem ipsum dolor sit amet`,
      outputExample: `Lreom isupm doolr sit aemt`,
    },
  },
} as const;
