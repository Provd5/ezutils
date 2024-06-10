import remove from "../texts/remove";

function add(input: string): string {
  return input.normalize("NFD").toLowerCase(); // =============;
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
