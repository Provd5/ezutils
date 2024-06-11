import escapeRegExp from "lodash.escaperegexp";

import { wordMatchKeys } from "~/features/settings-slice";

export function wordMatch(helperValue: string): RegExp {
  const wordMatchValues = {
    case: false,
    sentence: false,
    regex: false,
  };

  wordMatchKeys.map((key) => {
    wordMatchValues[key] =
      (
        document.getElementById(
          `settings-word-match-${key}`,
        ) as HTMLInputElement | null
      )?.checked || false;
  });

  let regex: RegExp;
  let flags = "g";
  if (!wordMatchValues.case) {
    flags += "i";
  }

  if (wordMatchValues.regex) {
    try {
      regex = new RegExp(helperValue, flags);
    } catch (e) {
      throw new Error(
        `${e}\nIf you need help: https://learn.microsoft.com/en-us/visualstudio/ide/using-regular-expressions-in-visual-studio`,
      );
    }
  } else {
    const safeFindValue = escapeRegExp(helperValue);

    if (wordMatchValues.sentence) {
      regex = new RegExp(`(\\b|^)${safeFindValue}(\\b|$)`, flags);
    } else {
      regex = new RegExp(safeFindValue, flags);
    }
  }

  return regex;
}
