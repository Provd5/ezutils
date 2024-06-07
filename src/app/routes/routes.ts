export const TOOLS = {
  lines: ["line-breaks", "sort", "affixes"],
  texts: ["case-converter", "replace", "remove", "find-in-text"],
} as const;

export type CategoryType = keyof typeof TOOLS;
export type ToolType = {
  [K in CategoryType]: (typeof TOOLS)[K][number];
};

type RoutesInterface = { root: string } & {
  [K in CategoryType]: { [key in ToolType[K] | "root"]: string };
};

export const ROUTES: RoutesInterface = {
  root: "/",
  lines: {
    root: `/lines/${TOOLS.lines[0]}`,
    ...TOOLS.lines.reduce(
      (acc, tool) => ({ ...acc, [tool]: `/lines/${tool}` }),
      {},
    ),
  } as RoutesInterface["lines"],
  texts: {
    root: `/texts/${TOOLS.texts[0]}`,
    ...TOOLS.texts.reduce(
      (acc, tool) => ({ ...acc, [tool]: `/texts/${tool}` }),
      {},
    ),
  } as RoutesInterface["texts"],
};
