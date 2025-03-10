import { HELPER_NAME } from "~/components/Tools/Helpers/helper-tooltip-checkbox";
import { type HelpersRefsContextType } from "~/context/helpers-refs-context";

import remove from "../sentences/converter-remove";

function addNewBreak(
  input: string,
  getRefValue: HelpersRefsContextType["getRefValue"],
): string {
  const needleValue = getRefValue(
    `${HELPER_NAME}-lineBreaks-addNewBreak-needle`,
  );
  const whereValue = getRefValue(`${HELPER_NAME}-lineBreaks-addNewBreak-where`);

  if (typeof needleValue === "string" && typeof whereValue === "string") {
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
