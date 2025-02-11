import { type ColorTypes } from "~/types/colors";

import { type ParsedColor } from "./converter-colors-parser";
import { hslToRgb } from "./hsl-rgb";

export function toRgb(
  from: Exclude<keyof ColorTypes, "RGB">,
  { v1, v2, v3, a: alpha }: ParsedColor,
): ParsedColor {
  let newV1 = 0,
    newV2 = 0,
    newV3 = 0,
    newA = 0;

  if (from === "HSL") {
    const h = parseFloat(v1.v) / (v1.unit === "turn" ? 1 : 360);
    const s = parseFloat(v2.v) / (v2.unit === "percent" ? 100 : 1);
    const l = parseFloat(v3.v) / (v3.unit === "percent" ? 100 : 1);

    const { r, g, b } = hslToRgb(h, s, l);
    newV1 = r;
    newV2 = g;
    newV3 = b;
    newA = parseFloat(alpha.v) / (alpha.unit === "percent" ? 100 : 1);
  }

  if (from === "HEX") {
    newV1 = parseInt(v1.v, 16);
    newV2 = parseInt(v2.v, 16);
    newV3 = parseInt(v3.v, 16);
    newA = parseInt(alpha.v, 16) / 255;
  }

  return {
    v1: { v: newV1.toString(), unit: "number" },
    v2: { v: newV2.toString(), unit: "number" },
    v3: { v: newV3.toString(), unit: "number" },
    a: { v: newA.toString(), unit: "number" },
  };
}
