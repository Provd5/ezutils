import { type CategoryBase, type ToolBase } from "./app";

export interface ColorsCategory extends CategoryBase {
  tools: Record<ColorsToolKeys, ToolBase>;
}

export type ColorsToolKeys = "colorsConverter";
