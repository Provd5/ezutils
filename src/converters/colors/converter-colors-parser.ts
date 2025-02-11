import { type ColorTypes } from "~/types/colors";

const INPUT_ERROR = (type: keyof ColorTypes, msg?: string) => {
  return new Error(`Invalid ${type} input!${msg ? ` ${msg}` : ""}`);
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
  if (userInput === "") {
    if (inputKey === "HEX")
      return {
        v1: { v: "00", unit: "hex" },
        v2: { v: "00", unit: "hex" },
        v3: { v: "00", unit: "hex" },
        a: { v: "FF", unit: "hex" },
      };

    if (inputKey === "HSL")
      return {
        v1: { v: "0", unit: "deg" },
        v2: { v: "0", unit: "percent" },
        v3: { v: "0", unit: "percent" },
        a: { v: "1", unit: "number" },
      };

    if (inputKey === "RGB")
      return {
        v1: { v: "0", unit: "number" },
        v2: { v: "0", unit: "number" },
        v3: { v: "0", unit: "number" },
        a: { v: "1", unit: "number" },
      };
  }

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

  if (inputKey === "HSL") {
    const hUpperLimit = v1.includes("turn") ? 1 : 360;
    const sUpperLimit = v2.includes("%") ? 100 : 1;
    const lUpperLimit = v3.includes("%") ? 100 : 1;
    const aUpperLimit = a.includes("%") ? 100 : 1;

    if (n1 < 0 || n1 > hUpperLimit) {
      throw INPUT_ERROR(inputKey, "Invalid hue scope.");
    }
    if (n2 < 0 || n2 > sUpperLimit || n3 < 0 || n3 > lUpperLimit) {
      throw INPUT_ERROR(inputKey, "Invalid saturation or lightness scope.");
    }
    if (na < 0 || na > aUpperLimit) {
      throw INPUT_ERROR(inputKey, "Invalid alpha channel scope.");
    }

    return {
      v1: {
        v: v1.replace("turn", "").replace("deg", ""),
        unit: v1.includes("turn") ? "turn" : "deg",
      },
      v2: { v: v2, unit: v2.includes("%") ? "percent" : "number" },
      v3: { v: v3, unit: v3.includes("%") ? "percent" : "number" },
      a: { v: a, unit: a.includes("%") ? "percent" : "number" },
    };
  }

  if (inputKey === "RGB") {
    const rUpperLimit = v1.includes("%") ? 100 : 255;
    const gUpperLimit = v2.includes("%") ? 100 : 255;
    const bUpperLimit = v3.includes("%") ? 100 : 255;
    const aUpperLimit = a.includes("%") ? 100 : 1;

    if (
      n1 < 0 ||
      n1 > rUpperLimit ||
      n2 < 0 ||
      n2 > gUpperLimit ||
      n3 < 0 ||
      n3 > bUpperLimit
    ) {
      throw INPUT_ERROR(inputKey, "Invalid color scope.");
    }
    if (na < 0 || na > aUpperLimit) {
      throw INPUT_ERROR(inputKey, "Invalid alpha channel scope.");
    }

    return {
      v1: { v: v1, unit: v1.includes("%") ? "percent" : "number" },
      v2: { v: v2, unit: v2.includes("%") ? "percent" : "number" },
      v3: { v: v3, unit: v3.includes("%") ? "percent" : "number" },
      a: { v: a, unit: a.includes("%") ? "percent" : "number" },
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
      regex =
        /(\d{1,3}(\.\d+)?(deg|turn)?[\s,]+\d{1,3}(\.\d+)?\s*%?[\s,]+\d{1,3}(\.\d+)?\s*%?)([\s,/]?\d{1,3}(\.\d+)?\s*%?)?/g;
      break;
    default:
    case "RGB":
      regex =
        /(\d{1,3}(\.\d+)?\s*%?[\s,]+\d{1,3}(\.\d+)?\s*%?[\s,]+\d{1,3}(\.\d+)?\s*%?)([\s,/]?\d{1,3}(\.\d+)?\s*%?)?/g;
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
    values = result.split(/[\s,/]/).filter((x) => x !== "");

    if (
      !values[0] ||
      !values[1] ||
      !values[2] ||
      (values[3]?.length === 1 && values[3] === "%")
    )
      throw INPUT_ERROR(key);
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
