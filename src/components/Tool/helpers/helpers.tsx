import type { FC } from "react";

import { type ToolKeys } from "~/app/appStructure/structure-types";

import {
  AffixesNumberLinesHelper,
  AffixesPrefixesHelper,
  AffixesSuffixesHelper,
} from "./lines/helper-affixes";
import { LineBreaksAddHelper } from "./lines/helper-line-breaks";
import {
  FindInTextFindHelper,
  FindInTextReplaceHelper,
} from "./texts/helper-find-in-text";

interface HelpersProps {
  tool: ToolKeys;
}

export const Helpers: FC<HelpersProps> = ({ tool }) => {
  switch (tool) {
    case "add":
      return <LineBreaksAddHelper tool={tool} />;
    case "numberLines":
      return <AffixesNumberLinesHelper tool={tool} />;
    case "prefixes":
      return <AffixesPrefixesHelper tool={tool} />;
    case "suffixes":
      return <AffixesSuffixesHelper tool={tool} />;
    case "replace":
      return <FindInTextReplaceHelper tool={tool} />;
    case "find":
      return <FindInTextFindHelper tool={tool} />;

    default:
      return null;
  }
};
