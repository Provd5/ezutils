import {} from "~/utils/utils";

import { type ParsedColor } from "./converter-colors-parser";

// Converts HSL to RGB
export function hslToRgb({ v1, v2, v3, a: alpha }: ParsedColor): ParsedColor {
  const h = parseFloat(v1.v) / (v1.unit === "deg" ? 360 : 1);
  const s = parseFloat(v2.v) / 100;
  const l = parseFloat(v3.v) / 100;
  const a = parseFloat(alpha.v);

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;
  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = (r + m) * 255;
  g = (g + m) * 255;
  b = (b + m) * 255;

  return {
    v1: { v: r.toString(), unit: v1.unit },
    v2: { v: g.toString(), unit: v2.unit },
    v3: { v: b.toString(), unit: v3.unit },
    a: { v: a.toString(), unit: alpha.unit },
  };
}

// Converts RGB to HSL
export function rgbToHsl({ v1, v2, v3, a: alpha }: ParsedColor): ParsedColor {
  const r = parseFloat(v1.v) / (v1.unit === "percent" ? 100 : 255);
  const g = parseFloat(v2.v) / (v2.unit === "percent" ? 100 : 255);
  const b = parseFloat(v3.v) / (v3.unit === "percent" ? 100 : 255);
  const a = parseFloat(alpha.v);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0,
    s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }

  return {
    v1: { v: h.toString(), unit: v1.unit },
    v2: { v: (s * 100).toString(), unit: v2.unit },
    v3: { v: (l * 100).toString(), unit: v3.unit },
    a: { v: a.toString(), unit: alpha.unit },
  };
}

// Converts HWB to RGB
export function hwbToRgb({ v1, v2, v3, a: alpha }: ParsedColor): ParsedColor {
  const h = v1.unit === "deg" ? parseFloat(v1.v) % 360 : parseFloat(v1.v);
  const w = parseFloat(v2.v) / 100;
  const b = parseFloat(v3.v) / 100;
  const a = parseFloat(alpha.v);
  let red = 0,
    green = 0,
    blue = 0;

  if (w + b >= 1) {
    const gray = w / (w + b);
    red = gray;
    green = gray;
    blue = gray;
  }

  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    return Math.min(
      Math.max(0, 1 - Math.abs(k - 2) + (k - 4) * w - (1 - k) * b, 0),
      1,
    );
  };

  red = f(5) * (1 - w - b);
  green = f(3) * (1 - w - b);
  blue = f(1) * (1 - w - b);

  return {
    v1: { v: (red * 255).toString(), unit: v1.unit },
    v2: { v: (green * 255).toString(), unit: v2.unit },
    v3: { v: (blue * 255).toString(), unit: v3.unit },
    a: { v: a.toString(), unit: alpha.unit },
  };
}

// Converts RGB to HWB
export function rgbToHwb({ v1, v2, v3, a: alpha }: ParsedColor): ParsedColor {
  const r = parseFloat(v1.v) / (v1.unit === "number" ? 255 : 100);
  const g = parseFloat(v2.v) / (v2.unit === "number" ? 255 : 100);
  const b = parseFloat(v3.v) / (v3.unit === "number" ? 255 : 100);
  const a = parseFloat(alpha.v);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number;
  const w = min;
  const bl = 1 - max;

  const d = max - min;

  if (d === 0) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        h = ((b - r) / d + 2) * 60;
        break;
      case b:
        h = ((r - g) / d + 4) * 60;
        break;
      default:
        h = 0;
    }
  }

  return {
    v1: { v: h.toString(), unit: v1.unit },
    v2: { v: (w * 100).toString(), unit: v2.unit },
    v3: { v: (bl * 100).toString(), unit: v3.unit },
    a: { v: a.toString(), unit: alpha.unit },
  };
}

// Converts HEX to RGB
export function hexToRgb({ v1, v2, v3, a: alpha }: ParsedColor): ParsedColor {
  const r = parseInt(v1.v, 16);
  const g = parseInt(v2.v, 16);
  const b = parseInt(v3.v, 16);
  const a = parseInt(alpha.v, 16) / 255;

  return {
    v1: { v: r.toString(), unit: v1.unit },
    v2: { v: g.toString(), unit: v2.unit },
    v3: { v: b.toString(), unit: v3.unit },
    a: { v: a.toString(), unit: alpha.unit },
  };
}

// Converts RGB to HEX
export function rgbToHex({ v1, v2, v3, a: alpha }: ParsedColor): ParsedColor {
  const r = Math.round(
    parseFloat(v1.v) / (v1.unit === "percent" ? 100 * 255 : 1),
  );
  const g = Math.round(
    parseFloat(v2.v) / (v2.unit === "percent" ? 100 * 255 : 1),
  );
  const b = Math.round(
    parseFloat(v3.v) / (v3.unit === "percent" ? 100 * 255 : 1),
  );
  const a = Math.round(
    (parseFloat(alpha.v) / (alpha.unit === "percent" ? 100 : 1)) * 255,
  );
  const toHex = (c: number) => c.toString(16).padStart(2, "0");
  return {
    v1: { v: toHex(r), unit: v1.unit },
    v2: { v: toHex(g), unit: v2.unit },
    v3: { v: toHex(b), unit: v3.unit },
    a: { v: toHex(a), unit: alpha.unit },
  };
}
