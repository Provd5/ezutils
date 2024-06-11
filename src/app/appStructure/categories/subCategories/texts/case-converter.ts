import { RiFontSize2 } from "react-icons/ri";

import { CASE_CONVERTER_ROUTE_BASE } from "~/app/appStructure/routes";

export type CaseConverterToolsType =
  keyof typeof CASE_CONVERTER_SUBCATEGORY.tools;

export const CASE_CONVERTER_SUBCATEGORY = {
  href: CASE_CONVERTER_ROUTE_BASE,
  label: "Letter case",
  Icon: RiFontSize2,
  tools: {
    upper: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/upper`,
      label: "UPPERCASE",
      description: `Change letters in words to UPPERCASE`,
      inputExample: `Lorem ipsum dolor sit amet`,
      outputExample: `LOREM IPSUM DOLOR SIT AMET`,
    },
    lower: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/lower`,
      label: "lowercase",
      description: `Change letters in words to lowercase`,
      inputExample: `Lorem IPSUM doLor SIT AMET`,
      outputExample: `Lorem ipsum dolor sit amet`,
    },
    title: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/title`,
      label: "Titlecase",
      description: `Change first letter to uppercase and the rest to lowercase`,
      inputExample: `Lorem IPSUM doLor SIT AMET`,
      outputExample: `Lorem Ipsum Dolor Sit Amet`,
    },
    camel: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/camel`,
      label: "camelCase",
      description: `Change the words connected " ", "-" or "_" to camelCase`,
      inputExample: `Lorem-ipsum dolor sit_amet`,
      outputExample: `loremIpsumDolorSitAmet`,
    },
    pascal: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/pascal`,
      label: "PascalCase",
      description: `Change the words connected " ", "-" or "_" to PascalCase`,
      inputExample: `lorem-ipsum dolor sit_amet`,
      outputExample: `LoremIpsumDolorSitAmet`,
    },
    snake: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/snake`,
      label: "SNAKE_CASE",
      description: `Change the words connected " ", "-", "_" or capitalLetter to SNAKE_CASE`,
      inputExample: `Lorem-ipsum dolor sitAmet`,
      outputExample: `LOREM_IPSUM_DOLOR_SIT_AMET`,
    },
    sentence: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/sentence`,
      label: "Sentence.",
      description: `Change the given text to a stylistically correct one`,
      inputExample: `lorem ipsum . dolor,SIT   amet`,
      outputExample: `Lorem ipsum. Dolor, SIT amet`,
    },
  },
} as const;
