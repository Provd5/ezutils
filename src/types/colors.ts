import { type CategoryBase, type ToolBase } from "./app";

export interface ColorsCategory extends CategoryBase {
  tools: Record<ColorsToolKeys, ToolBase>;
}

export type ColorsToolKeys = "colorsConverter";

export interface ColorTypes {
  RGB: { r: string; g: string; b: string; a: string };
  HSL: { h: string; s: string; l: string; a: string };
  HEX: string;
}

export const COLORS_ARRAY: (keyof ColorTypes)[] = [
  "HEX",
  "RGB",
  "HSL",
] as const;
