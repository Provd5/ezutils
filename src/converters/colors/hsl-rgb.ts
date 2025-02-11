/**
 * @param h - Hue (0 to 1)
 * @param s - Saturation (0 to 1)
 * @param l - Lightness (0 to 1)
 * @returns - RGB (0 to 255).
 */
export function hslToRgb(h: number, s: number, l: number) {
  let r: number, g: number, b: number;

  // If there is no saturation, the color is a shade of gray
  if (s === 0) {
    r = g = b = l; // Achromatic
  } else {
    // Helper function that converts hue to rgb
    const hueToRgb = (p: number, q: number, t: number): number => {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    };

    // Calculate temporary variables for the conversion
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    // Convert hue to RGB values
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  // Return the final RGB values, scaled to [0, 255]
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}
