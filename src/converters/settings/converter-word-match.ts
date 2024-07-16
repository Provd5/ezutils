import escapeRegExp from "lodash.escaperegexp";

import { type HelpersRefsContextType } from "~/components/Tools/Helpers/helpers-refs-provider";

export function wordMatch(
  helperValue: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
): RegExp {
  const wordMatchValues = {
    case: getRefValue("HelperTooltipCheckbox-case"),
    sentence: getRefValue("HelperTooltipCheckbox-sentence"),
    regex: getRefValue("HelperTooltipCheckbox-regex"),
  };

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
