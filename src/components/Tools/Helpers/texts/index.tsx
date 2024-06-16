import { type FC } from "react";

import { type TextsToolKeys } from "~/types/texts";

import {
  HelperAffixesAddPrefixes,
  HelperAffixesAddSuffixes,
  HelperAffixesInsertLineNumbering,
} from "./paragraphs/helper-affixes";
import { HelperLineBreaksAddNewBreak } from "./paragraphs/helper-line-breaks";
import {
  HelperFindInTextFindAndCount,
  HelperFindInTextFindAndReplace,
} from "./sentences/helper-find-in-text";

interface TextsHelpersProps {
  tool: TextsToolKeys;
}

const TextsHelpers: FC<TextsHelpersProps> = ({ tool }) => {
  switch (tool) {
    case "addNewBreak":
      return <HelperLineBreaksAddNewBreak tool={tool} />;
    case "insertLineNumbering":
      return <HelperAffixesInsertLineNumbering tool={tool} />;
    case "addPrefixes":
      return <HelperAffixesAddPrefixes tool={tool} />;
    case "addSuffixes":
      return <HelperAffixesAddSuffixes tool={tool} />;
    case "findAndReplace":
      return <HelperFindInTextFindAndReplace tool={tool} />;
    case "findAndCount":
      return <HelperFindInTextFindAndCount tool={tool} />;

    default:
      return null;
  }
};

export default TextsHelpers;
