import { type WhereToBreak } from "~/features/texts/paragraphs/line-breaks-slice";

import remove from "../sentences/converter-remove";

function addNewBreak(input: string): string {
  const needleValue = (
    document.getElementById(
      "HelperLineBreaksAddNewBreak-needle",
    ) as HTMLInputElement | null
  )?.value;
  const whereValue = (
    document.getElementById(
      "HelperLineBreaksAddNewBreak-where",
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
  return remove.removeExcessSpaces(newInput);
}

function removeExcessBreaks(input: string): string {
  return input.replace(/\n{2,}/g, "\n");
}

function removeDuplicatedLines(input: string): string {
  const lines = input.split("\n");
  const uniqueLines = [...new Set(lines)];
  return uniqueLines.join("\n");
}

export default {
  addNewBreak,
  removeBreaks,
  removeExcessBreaks,
  removeDuplicatedLines,
};
