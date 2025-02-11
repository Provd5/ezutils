import { type ColorTypes } from "~/types/colors";

import { type ParsedColor } from "./converter-colors-parser";
import { rgbToHsl } from "./rgb-hsl";

export function toHsl(
  from: Exclude<keyof ColorTypes, "HSL">,
  { v1, v2, v3, a: alpha }: ParsedColor,
): ParsedColor {
  let newV1 = 0,
    newV2 = 0,
    newV3 = 0,
    newA = 0;

  if (from === "RGB") {
    newV1 = parseFloat(v1.v) / (v1.unit === "percent" ? 100 : 255);
    newV2 = parseFloat(v2.v) / (v2.unit === "percent" ? 100 : 255);
    newV3 = parseFloat(v3.v) / (v3.unit === "percent" ? 100 : 255);
    newA = parseFloat(alpha.v) / (alpha.unit === "percent" ? 100 : 1);
  }

  if (from === "HEX") {
    newV1 = parseInt(v1.v, 16) / 255;
    newV2 = parseInt(v2.v, 16) / 255;
    newV3 = parseInt(v3.v, 16) / 255;
    newA = parseInt(alpha.v, 16) / 255;
  }

  const { h, s, l } = rgbToHsl(newV1, newV2, newV3);
  return {
    v1: { v: Math.round(h * 360).toString(), unit: "deg" },
    v2: { v: Math.round(s * 100).toString(), unit: "percent" },
    v3: { v: Math.round(l * 100).toString(), unit: "percent" },
    a: { v: newA.toString(), unit: "number" },
  };
}
