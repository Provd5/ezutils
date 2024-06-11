import * as diacritics from "diacritics";

function spaces(input: string): string {
  return input.replace(/ /g, "").trim();
}

function excessSpaces(input: string): string {
  return input.replace(/ {2,}/g, " ").trim();
}

function accents(input: string): string {
  return diacritics.remove(input);
}

function htmlElements(input: string): string {
  return input.replace(/<[^>]+>/g, "");
}

export default { spaces, excessSpaces, accents, htmlElements };
