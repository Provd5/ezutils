import { type TextsToolKeys } from "~/types/texts";

import { type HelpersRefsContextType } from "~/components/Tools/Helpers/helpers-refs-provider";

import affixes from "./paragraphs/converter-affixes";
import lineBreaks from "./paragraphs/converter-line-breaks";
import sortLines from "./paragraphs/converter-sort-lines";
import caseConverter from "./sentences/converter-case-converter";
import findInText from "./sentences/converter-find-in-text";
import remove from "./sentences/converter-remove";
import sortWords from "./sentences/converter-sort-words";

const textsConverter = (
  tool: TextsToolKeys,
  value: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
) => {
  let newValue: string;

  switch (tool) {
    case "insertLineNumbering":
      newValue = affixes.insertLineNumbering(value, getRefValue);
      break;
    case "addPrefixes":
      newValue = affixes.addPrefixes(value, getRefValue);
      break;
    case "addSuffixes":
      newValue = affixes.addSuffixes(value, getRefValue);
      break;
    case "addNewBreak":
      newValue = lineBreaks.addNewBreak(value, getRefValue);
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
      newValue = sortLines.reverseLines(value);
      break;
    case "shuffleLines":
      newValue = sortLines.shuffleLines(value);
      break;
    case "sortLinesAsc":
      newValue = sortLines.sortLinesAsc(value);
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
    case "randomCase":
      newValue = caseConverter.randomCase(value);
      break;
    case "findAndReplace":
      newValue = findInText.findAndReplace(value, getRefValue);
      break;
    case "findAndCount":
      newValue = findInText.findAndCount(value, getRefValue);
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
    case "reverseSentence":
      newValue = sortWords.reverseSentence(value);
      break;
    case "reverseWords":
      newValue = sortWords.reverseWords(value);
      break;
    case "shuffleLetters":
      newValue = sortWords.shuffleLetters(value);
      break;
    case "shuffleWords":
      newValue = sortWords.shuffleWords(value);
      break;
    case "sortWordsAsc":
      newValue = sortWords.sortWordsAsc(value);
      break;
    default:
      throw new Error("Invalid tool");
  }

  return newValue;
};

export default textsConverter;
