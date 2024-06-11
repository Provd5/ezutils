import { errorHandler } from "~/utils/utils";

import { wordMatch } from "../settings/converter-word-match";

function replace(input: string): string {
  const toBeReplaced =
    (
      document.getElementById(
        "find-in-text-replace-helper-to-be-replaced",
      ) as HTMLInputElement | null
    )?.value || "";

  if (toBeReplaced === "") return input;

  let regex: RegExp;
  try {
    regex = wordMatch(toBeReplaced);
  } catch (e) {
    return errorHandler(e);
  }

  const replaceWithValue =
    (
      document.getElementById(
        "find-in-text-replace-helper-replace-with",
      ) as HTMLInputElement | null
    )?.value || "";

  return input.replace(regex, replaceWithValue);
}

function find(input: string): string {
  const findValue =
    (
      document.getElementById(
        "find-in-text-find-helper",
      ) as HTMLInputElement | null
    )?.value || "";

  let regex: RegExp;
  try {
    regex = wordMatch(findValue);
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

function links(input: string): string {
  const regex =
    /\b(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g;
  const matches = input.match(regex);
  return matches ? matches.join("\n") : "";
}

function quote(input: string): string {
  const regex =
    /«([^«»]+)»|“([^“”]+)”|“([^“”]+)”|"([^"]+)"|'([^']+)'|`([^`]+)`/g;
  const matches = input.match(regex);
  return matches
    ? matches.map((match) => match.replace(/«|»|“|”|"|'|`/g, "")).join("\n")
    : "";
}

function letters(input: string): string {
  return input.replace(/[^a-zA-ZÀ-ÿ\u0100-\u017F\s]/g, "");
}

function notLetters(input: string): string {
  return input.replace(/[a-zA-ZÀ-ÿ\u0100-\u017F]/g, "");
}

export default { replace, find, links, quote, letters, notLetters };
