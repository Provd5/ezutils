import { includeEmptyLines } from "../../settings/converter-include-empty-lines";

function insertLineNumbering(input: string): string {
  const splitterValue = (
    document.getElementById(
      "affixes-number-lines-helper",
    ) as HTMLInputElement | null
  )?.value;

  const shouldIncludeEmptyLines = includeEmptyLines();
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
      "affixes-prefixes-helper",
    ) as HTMLInputElement | null
  )?.value;

  const shouldIncludeEmptyLines = includeEmptyLines();

  if (prefixValue) {
    const lines = input.split("\n");
    return lines
      .map((line) =>
        shouldIncludeEmptyLines
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
      "affixes-suffixes-helper",
    ) as HTMLInputElement | null
  )?.value;

  const shouldIncludeEmptyLines = includeEmptyLines();

  if (suffixValue) {
    const lines = input.split("\n");
    return lines
      .map((line) =>
        shouldIncludeEmptyLines
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
