import { type ColorTypes } from "~/components/Tools/ColorsTool/colors-tool-wrapper";

const INPUT_ERROR = (type: keyof ColorTypes) => {
  return new Error(`Invalid ${type} input`);
};

type ParsedValue = {
  v: string;
  unit: "percent" | "number" | "turn" | "deg" | "hex";
};

export interface ParsedColor {
  v1: ParsedValue;
  v2: ParsedValue;
  v3: ParsedValue;
  a: ParsedValue;
}

export const parseColor = (
  inputKey: keyof ColorTypes,
  userInput: string,
): ParsedColor => {
  const { v1, v2, v3, a } = isolateColors(inputKey, userInput);

  const n1 = parseFloat(v1);
  const n2 = parseFloat(v2);
  const n3 = parseFloat(v3);
  const na = parseFloat(a);

  if (inputKey === "HEX") {
    return {
      v1: { v: v1, unit: "hex" },
      v2: { v: v2, unit: "hex" },
      v3: { v: v3, unit: "hex" },
      a: { v: a, unit: "hex" },
    };
  }

  if (inputKey === "HSL" || inputKey === "HWB") {
    const isTurn = v1.includes("turn");
    const isAlphaInPercent = a.includes("%");
    const upperLimit = isTurn ? 1 : 360;
    const alphaUpperLimit = isAlphaInPercent ? 100 : 1;
    if (n1 < 0 || n1 > upperLimit) {
      throw INPUT_ERROR(inputKey);
    }
    if (n2 < 0 || n2 > 100 || n3 < 0 || n3 > 100) {
      throw INPUT_ERROR(inputKey);
    }
    if (na < 0 || na > alphaUpperLimit) {
      throw INPUT_ERROR(inputKey);
    }

    return {
      v1: { v: v1.replace("turn" || "deg", ""), unit: isTurn ? "turn" : "deg" },
      v2: { v: v2, unit: "percent" },
      v3: { v: v3, unit: "percent" },
      a: { v: a, unit: isAlphaInPercent ? "percent" : "number" },
    };
  }

  if (inputKey === "RGB") {
    const isInPercent = (v1 || v2 || v3).includes("%");
    const isAlphaInPercent = a.includes("%");
    const upperLimit = isInPercent ? 100 : 255;
    const alphaUpperLimit = isAlphaInPercent ? 100 : 1;
    if (
      n1 < 0 ||
      n1 > upperLimit ||
      n2 < 0 ||
      n2 > upperLimit ||
      n3 < 0 ||
      n3 > upperLimit
    ) {
      throw INPUT_ERROR(inputKey);
    }
    if (na < 0 || na > alphaUpperLimit) {
      throw INPUT_ERROR(inputKey);
    }

    return {
      v1: { v: v1, unit: isInPercent ? "percent" : "number" },
      v2: { v: v2, unit: isInPercent ? "percent" : "number" },
      v3: { v: v3, unit: isInPercent ? "percent" : "number" },
      a: { v: a, unit: isAlphaInPercent ? "percent" : "number" },
    };
  }

  throw INPUT_ERROR(inputKey);
};

function isolateColors(
  key: keyof ColorTypes,
  input: string,
): {
  v1: string;
  v2: string;
  v3: string;
  a: string;
} {
  let regex: RegExp;
  let values: string[];

  switch (key) {
    case "HEX":
      regex = /[0-9a-fA-F]{3,8}/g;
      break;
    case "HSL":
    case "HWB":
      regex =
        /(\d{1,3}(\.\d+)?(deg|turn)?[\s,]+\d{1,3}(\.\d+)?\s*%?[\s,]+\d{1,3}(\.\d+)?\s*%?)([\s,]+\d{1,3}(\.\d+)?\s*%?)?/g;
      break;
    default:
    case "RGB":
      regex =
        /(\d{1,3}(\.\d+)?\s*%?[\s,]+\d{1,3}(\.\d+)?\s*%?[\s,]+\d{1,3}(\.\d+)?\s*%?)([\s,]+\d{1,3}(\.\d+)?\s*%?)?/g;
      break;
  }

  const result = regex.exec(input)?.[0];
  if (!result) {
    throw INPUT_ERROR(key);
  }
  let v1, v2, v3, a;

  if (key === "HEX") {
    switch (result.length) {
      case 3:
      case 4:
        v1 = `${result[0]}${result[0]}`;
        v2 = `${result[1]}${result[1]}`;
        v3 = `${result[2]}${result[2]}`;
        a = result.length === 4 ? `${result[3]}${result[3]}` : "FF";
        break;
      case 6:
      case 8:
        v1 = `${result[0]}${result[1]}`;
        v2 = `${result[2]}${result[3]}`;
        v3 = `${result[4]}${result[5]}`;
        a = result.length === 8 ? `${result[6]}${result[7]}` : "FF";
        break;
      default:
        throw INPUT_ERROR(key);
    }
  } else {
    values = result.split(/[\s,]/).filter((x) => x !== "");
    if (!values[0] || !values[1] || !values[2]) throw INPUT_ERROR(key);
    v1 = values[0];
    v2 = values[1];
    v3 = values[2];
    a = values[3] ? values[3] : "1";
  }

  return {
    v1,
    v2,
    v3,
    a,
  };
}
