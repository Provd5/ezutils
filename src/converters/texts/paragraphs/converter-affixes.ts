import { elementIsChecked } from "~/utils/utils";

function insertLineNumbering(input: string): string {
  const splitterValue = (
    document.getElementById(
      "HelperAffixesInsertLineNumbering",
    ) as HTMLInputElement | null
  )?.value;

  const shouldIncludeEmptyLines = elementIsChecked(
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

function addPrefixes(input: string): string {
  const prefixValue = (
    document.getElementById(
      "HelperAffixesAddPrefixes",
    ) as HTMLInputElement | null
  )?.value;

  const shouldIncludeEmptyLines = elementIsChecked(
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

function addSuffixes(input: string): string {
  const suffixValue = (
    document.getElementById(
      "HelperAffixesAddSuffixes",
    ) as HTMLInputElement | null
  )?.value;

  const shouldIncludeEmptyLines = elementIsChecked(
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
