import { type WhereToBreak } from "~/features/lines/line-breaks-slice";

import remove from "../texts/converter-remove";

function add(input: string): string {
  const needleValue = (
    document.getElementById(
      "line-breaks-add-helper-needle",
    ) as HTMLInputElement | null
  )?.value;
  const whereValue = (
    document.getElementById(
      "line-breaks-add-helper-where",
    ) as HTMLInputElement | null
  )?.value as WhereToBreak;

  if (needleValue && whereValue) {
    const regex = new RegExp(needleValue, "g");

    let newInput = input;
    switch (whereValue) {
      case "after":
        newInput = input.replace(regex, `${needleValue}\n`);
        break;
      case "before":
        newInput = input.replace(regex, `\n${needleValue}`);
        break;
      case "instead":
        newInput = input.replace(regex, `\n`);
        break;
    }

    return newInput;
  } else {
    return input;
  }
}

function removeBreaks(input: string): string {
  let newInput = input.replace(/\n/g, " ");
  newInput = newInput.replace(/\t/g, "");
  return remove.excessSpaces(newInput);
}

function removeExcessBreaks(input: string): string {
  return input.replace(/\n{2,}/g, "\n");
}

function removeDuplicated(input: string): string {
  const lines = input.split("\n");
  const uniqueLines = [...new Set(lines)];
  return uniqueLines.join("\n");
}

export default { add, removeBreaks, removeExcessBreaks, removeDuplicated };
