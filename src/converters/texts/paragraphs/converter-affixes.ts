import { type HelpersRefsContextType } from "~/components/Tools/Helpers/helpers-refs-provider";

function insertLineNumbering(
  input: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
): string {
  const splitterValue = getRefValue("HelperAffixesInsertLineNumbering");
  const shouldIncludeEmptyLines = getRefValue(
    "HelperTooltipCheckbox-includeEmptyLines",
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
  const prefixValue = getRefValue("HelperAffixesAddPrefixes");
  const shouldIncludeEmptyLines = getRefValue(
    "HelperTooltipCheckbox-includeEmptyLines",
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
  const suffixValue = getRefValue("HelperAffixesAddSuffixes");
  const shouldIncludeEmptyLines = getRefValue(
    "HelperTooltipCheckbox-includeEmptyLines",
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
