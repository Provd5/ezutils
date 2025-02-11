/**
 * @param r - Red (0 to 1)
 * @param g - Green (0 to 1)
 * @param b - Blue (0 to 1)
 * @returns HSL (0 to 1).
 */
export function rgbToHsl(r: number, g: number, b: number) {
  // Find the maximum and minimum values among r, g, and b
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calculate lightness
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max === min) {
    // When max and min are equal, the color is achromatic
    h = 0;
    s = 0;
  } else {
    const d = max - min;
    // Calculate saturation
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    // Calculate hue based on which color component is the max
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
  }

  // Normalize hue to be between 0 and 1
  h /= 6;

  return { h, s, l };
}
