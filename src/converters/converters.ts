import { type TextsToolKeys } from "~/types/texts";

import affixes from "./texts/paragraphs/converter-affixes";
import lineBreaks from "./texts/paragraphs/converter-line-breaks";
import sort from "./texts/paragraphs/converter-sort";
import caseConverter from "./texts/sentences/converter-case-converter";
import findInText from "./texts/sentences/converter-find-in-text";
import remove from "./texts/sentences/converter-remove";

export const converter = (tool: TextsToolKeys, value: string) => {
  let newValue: string;

  switch (tool) {
    case "insertLineNumbering":
      newValue = affixes.insertLineNumbering(value);
      break;
    case "addPrefixes":
      newValue = affixes.addPrefixes(value);
      break;
    case "addSuffixes":
      newValue = affixes.addSuffixes(value);
      break;
    case "addNewBreak":
      newValue = lineBreaks.addNewBreak(value);
      break;
    case "removeBreaks":
      newValue = lineBreaks.removeBreaks(value);
      break;
    case "removeDuplicatedLines":
      newValue = lineBreaks.removeDuplicatedLines(value);
      break;
    case "removeExcessBreaks":
      newValue = lineBreaks.removeExcessBreaks(value);
      break;
    case "reverseLines":
      newValue = sort.reverseLines(value);
      break;
    case "shuffleLines":
      newValue = sort.shuffleLines(value);
      break;
    case "sortAsc":
      newValue = sort.sortAsc(value);
      break;
    case "camelCase":
      newValue = caseConverter.camelCase(value);
      break;
    case "lowerCase":
      newValue = caseConverter.lowerCase(value);
      break;
    case "pascalCase":
      newValue = caseConverter.pascalCase(value);
      break;
    case "sentence":
      newValue = caseConverter.sentence(value);
      break;
    case "snakeCase":
      newValue = caseConverter.snakeCase(value);
      break;
    case "upperCase":
      newValue = caseConverter.upperCase(value);
      break;
    case "titleCase":
      newValue = caseConverter.titleCase(value);
      break;
    case "findAndReplace":
      newValue = findInText.findAndReplace(value);
      break;
    case "findAndCount":
      newValue = findInText.findAndCount(value);
      break;
    case "findLetters":
      newValue = findInText.findLetters(value);
      break;
    case "findLinks":
      newValue = findInText.findLinks(value);
      break;
    case "findNotLetters":
      newValue = findInText.findNotLetters(value);
      break;
    case "findQuotes":
      newValue = findInText.findQuotes(value);
      break;
    case "removeAccents":
      newValue = remove.removeAccents(value);
      break;
    case "removeExcessSpaces":
      newValue = remove.removeExcessSpaces(value);
      break;
    case "removeHtmlTags":
      newValue = remove.removeHtmlTags(value);
      break;
    case "removeSpaces":
      newValue = remove.removeSpaces(value);
      break;
    default:
      throw new Error("Invalid tool");
  }

  return newValue;
};
