import { TfiUppercase } from "react-icons/tfi";

import { CASE_CONVERTER_ROUTE_BASE } from "~/app/appStructure/routes";

import { type SubCategory } from "../../../structure-types";

export const CASE_CONVERTER_SUBCATEGORY: SubCategory = {
  href: CASE_CONVERTER_ROUTE_BASE,
  label: "Letter case",
  Icon: TfiUppercase,
  tools: {
    camel: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/camel`,
      label: "To camelCase",
    },
    pascal: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/pascal`,
      label: "To PascalCase",
    },
    snake: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/snake`,
      label: "To SNAKE_CASE",
    },
    upper: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/upper`,
      label: "To UPPERCASE",
    },
    lower: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/lower`,
      label: "To lowercase",
    },
    sentence: {
      href: `${CASE_CONVERTER_ROUTE_BASE}/sentence`,
      label: "To Sentence.",
    },
  },
} as const;
