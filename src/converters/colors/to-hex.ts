import { type ColorTypes } from "~/types/colors";

import { type ParsedColor } from "./converter-colors-parser";
import { hslToRgb } from "./hsl-rgb";

export function toHex(
  from: Exclude<keyof ColorTypes, "HEX">,
  { v1, v2, v3, a: alpha }: ParsedColor,
): ParsedColor {
  let newV1 = 0,
    newV2 = 0,
    newV3 = 0;

  if (from === "HSL") {
    const h = parseFloat(v1.v) * (v1.unit === "turn" ? 360 : 1);
    const s = parseFloat(v2.v) / (v2.unit === "percent" ? 100 : 1);
    const l = parseFloat(v3.v) / (v3.unit === "percent" ? 100 : 1);

    const { r, g, b } = hslToRgb(h, s, l);
    newV1 = r;
    newV2 = g;
    newV3 = b;
  }

  if (from === "RGB") {
    newV1 = Math.round(
      parseFloat(v1.v) / (v1.unit === "percent" ? 100 * 255 : 1),
    );
    newV2 = Math.round(
      parseFloat(v2.v) / (v2.unit === "percent" ? 100 * 255 : 1),
    );
    newV3 = Math.round(
      parseFloat(v3.v) / (v3.unit === "percent" ? 100 * 255 : 1),
    );
  }

  const newA = Math.round(
    (parseFloat(alpha.v) / (alpha.unit === "percent" ? 100 : 1)) * 255,
  );
  const convert = (c: number) => c.toString(16).padStart(2, "0");
  return {
    v1: { v: convert(newV1), unit: "hex" },
    v2: { v: convert(newV2), unit: "hex" },
    v3: { v: convert(newV3), unit: "hex" },
    a: { v: convert(newA), unit: "hex" },
  };
}
