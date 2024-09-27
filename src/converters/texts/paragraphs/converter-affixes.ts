import { HELPER_NAME } from "~/components/Tools/Helpers/helper-tooltip-checkbox";
import { type HelpersRefsContextType } from "~/components/Tools/Helpers/helpers-refs-provider";

function insertLineNumbering(
  input: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
): string {
  const splitterValue = getRefValue(
    `${HELPER_NAME}-affixes-insertLineNumbering`,
  );
  const shouldIncludeEmptyLines = getRefValue(
    `${HELPER_NAME}-includeEmptyLines`,
  );

  const lines = input.split("\n");

  let skipCount = -1;
  return lines
    .map((line, index) => {
      const skip = !shouldIncludeEmptyLines && line.trim() === "";
      if (skip) {
        skipCount += 1;
      }
      return skip ? "" : `${index - skipCount}${splitterValue}${line}`;
    })
    .join("\n");
}

function addPrefixes(
  input: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
): string {
  const prefixValue = getRefValue(`${HELPER_NAME}-affixes-addPrefixes`);
  const shouldIncludeEmptyLines = getRefValue(
    `${HELPER_NAME}-includeEmptyLines`,
  );

  if (prefixValue) {
    const lines = input.split("\n");
    return lines
      .map((line) =>
        !shouldIncludeEmptyLines
          ? line.trim() !== ""
            ? prefixValue + line
            : line
          : prefixValue + line,
      )
      .join("\n");
  } else {
    return input;
  }
}

function addSuffixes(
  input: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
): string {
  const suffixValue = getRefValue(`${HELPER_NAME}-affixes-addSuffixes`);
  const shouldIncludeEmptyLines = getRefValue(
    `${HELPER_NAME}-includeEmptyLines`,
  );

  if (suffixValue) {
    const lines = input.split("\n");
    return lines
      .map((line) =>
        !shouldIncludeEmptyLines
          ? line.trim() !== ""
            ? line + suffixValue
            : line
          : line + suffixValue,
      )
      .join("\n");
  } else {
    return input;
  }
}

export default { insertLineNumbering, addPrefixes, addSuffixes };
