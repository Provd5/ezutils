function numberLines(input: string): string {
  const lines = input.split("\n").filter((line) => line.trim() !== "");
  return lines.map((line, index) => `${index + 1}. ${line}`).join("\n");
}

function prefixes(input: string): string {
  return input.normalize("NFD").toLowerCase(); //===========
}

function suffixes(input: string): string {
  return input.normalize("NFD").toLowerCase(); //===========
}

export default { numberLines, prefixes, suffixes };
