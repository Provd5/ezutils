import { type ToolKeys } from "~/app/appStructure/structure-types";

import affixes from "./lines/converter-affixes";
import lineBreaks from "./lines/converter-line-breaks";
import sort from "./lines/converter-sort";
import caseConverter from "./texts/converter-case-converter";
import findInText from "./texts/converter-find-in-text";
import remove from "./texts/converter-remove";

export const converter = (tool: ToolKeys, value: string) => {
  let newValue: string;

  switch (tool) {
    case "numberLines":
      newValue = affixes.numberLines(value);
      break;
    case "prefixes":
      newValue = affixes.prefixes(value);
      break;
    case "suffixes":
      newValue = affixes.suffixes(value);
      break;
    case "add":
      newValue = lineBreaks.add(value);
      break;
    case "remove":
      newValue = lineBreaks.removeBreaks(value);
      break;
    case "removeDuplicated":
      newValue = lineBreaks.removeDuplicated(value);
      break;
    case "removeExcess":
      newValue = lineBreaks.removeExcessBreaks(value);
      break;
    case "reverse":
      newValue = sort.reverse(value);
      break;
    case "shuffle":
      newValue = sort.shuffle(value);
      break;
    case "sortAsc":
      newValue = sort.sortAsc(value);
      break;
    case "camel":
      newValue = caseConverter.camel(value);
      break;
    case "lower":
      newValue = caseConverter.lower(value);
      break;
    case "pascal":
      newValue = caseConverter.pascal(value);
      break;
    case "sentence":
      newValue = caseConverter.sentence(value);
      break;
    case "snake":
      newValue = caseConverter.snake(value);
      break;
    case "upper":
      newValue = caseConverter.upper(value);
      break;
    case "title":
      newValue = caseConverter.title(value);
      break;
    case "replace":
      newValue = findInText.replace(value);
      break;
    case "find":
      newValue = findInText.find(value);
      break;
    case "letters":
      newValue = findInText.letters(value);
      break;
    case "links":
      newValue = findInText.links(value);
      break;
    case "notLetters":
      newValue = findInText.notLetters(value);
      break;
    case "quote":
      newValue = findInText.quote(value);
      break;
    case "accents":
      newValue = remove.accents(value);
      break;
    case "excessSpaces":
      newValue = remove.excessSpaces(value);
      break;
    case "htmlTags":
      newValue = remove.htmlElements(value);
      break;
    case "spaces":
      newValue = remove.spaces(value);
      break;
    default:
      throw new Error("Invalid tool");
  }

  return newValue;
};
