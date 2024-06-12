import * as diacritics from "diacritics";

function removeSpaces(input: string): string {
  return input.replace(/ /g, "").trim();
}

function removeExcessSpaces(input: string): string {
  return input.replace(/ {2,}/g, " ").trim();
}

function removeAccents(input: string): string {
  return diacritics.remove(input);
}

function removeHtmlTags(input: string): string {
  return input.replace(/<[^>]+>/g, "");
}

export default {
  removeSpaces,
  removeExcessSpaces,
  removeHtmlTags,
  removeAccents,
};
