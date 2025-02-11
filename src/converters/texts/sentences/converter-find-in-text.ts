import { HELPER_NAME } from "~/components/Tools/Helpers/helper-tooltip-checkbox";
import { type HelpersRefsContextType } from "~/context/helpers-refs-context";
import { wordMatch } from "~/converters/settings/converter-word-match";
import { errorHandler } from "~/utils/utils";

function findAndReplace(
  input: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
): string {
  const toBeReplaced = getRefValue(
    `${HELPER_NAME}-findInText-findAndReplace-to`,
  );
  const replaceWithValue = getRefValue(
    `${HELPER_NAME}-findInText-findAndReplace-with`,
  );

  if (typeof toBeReplaced !== "string" || typeof replaceWithValue !== "string")
    return input;

  let regex: RegExp;
  try {
    regex = wordMatch(toBeReplaced, getRefValue);
  } catch (e) {
    return errorHandler(e);
  }

  return input.replace(regex, replaceWithValue);
}

function findAndCount(
  input: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
): string {
  if (input === "") return input;

  const findValue = getRefValue(`${HELPER_NAME}-findInText-findAndCount`);

  if (typeof findValue !== "string") return input;

  let regex: RegExp;
  try {
    regex = wordMatch(findValue, getRefValue);
  } catch (e) {
    return errorHandler(e);
  }

  const newInput =
    findValue === "" ? input.replace(/\n/g, "") : input.replace(/\n/g, " ");
  const foundWords = newInput.match(regex);

  if (foundWords) {
    return foundWords[0] === ""
      ? `Character count: ` + (foundWords.length - 1)
      : `${foundWords[0]}\nOccurs: ` + foundWords.length;
  } else {
    return `No results`;
  }
}

function findLinks(input: string): string {
  if (input === "") return input;

  const regex =
    /\b(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g;
  const matches = input.match(regex);
  return matches ? matches.join("\n") : "Nothing found";
}

function findQuotes(input: string): string {
  if (input === "") return input;

  const regex =
    /«([^«»]+)»|“([^“”]+)”|“([^“”]+)”|"([^"]+)"|'([^']+)'|`([^`]+)`/g;
  const matches = input.match(regex);
  return matches
    ? matches.map((match) => match.replace(/«|»|“|”|"|'|`/g, "")).join("\n")
    : "Nothing found";
}

function findLetters(input: string): string {
  return input.replace(/[^a-zA-ZÀ-ÿ\u0100-\u017F\s]/g, "");
}

function findNotLetters(input: string): string {
  return input.replace(/[a-zA-ZÀ-ÿ\u0100-\u017F]/g, "");
}

export default {
  findAndReplace,
  findAndCount,
  findLinks,
  findQuotes,
  findLetters,
  findNotLetters,
};
