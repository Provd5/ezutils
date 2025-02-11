import { useContext } from "react";

import { type ColorTypes } from "~/types/colors";

import { HELPER_NAME } from "~/components/Tools/Helpers/helper-tooltip-checkbox";
import { HelpersRefsContext } from "~/context/helpers-refs-context";
import { type ParsedColor } from "~/converters/colors/converter-colors-parser";
import { decimalRound } from "~/utils/utils";

export const useFormatColor = () => {
  const { getRefValue } = useContext(HelpersRefsContext);

  function formatter(inputKey: keyof ColorTypes, colors: ParsedColor): string {
    const showHashtag = getRefValue(`${HELPER_NAME}-showHashtag`);
    const showFormat = getRefValue(`${HELPER_NAME}-showFormat`);
    const showCommas = getRefValue(`${HELPER_NAME}-showCommas`);
    const showUnits = getRefValue(`${HELPER_NAME}-showUnits`);

    const hideAlpha = getRefValue(`${HELPER_NAME}-alpha-hide`);
    const afterCommaAlpha = getRefValue(`${HELPER_NAME}-alpha-afterComma`);
    const afterSlashAlpha = getRefValue(`${HELPER_NAME}-alpha-afterSlash`);

    const { v1, v2, v3, a } = colors;

    if (inputKey === "HEX") {
      return `${showHashtag ? "#" : ""}${v1.v}${v2.v}${v3.v}${hideAlpha ? "" : a.v}`.toUpperCase();
    }

    v1.v = decimalRound(parseFloat(v1.v)).toString();
    v2.v = decimalRound(parseFloat(v2.v)).toString();
    v3.v = decimalRound(parseFloat(v3.v)).toString();
    a.v = decimalRound(parseFloat(a.v)).toString();

    const format = (v: string) =>
      showFormat ? `${inputKey.toLowerCase()}(${v})` : v;

    const units = (u: ParsedColor["v1"]["unit"]) =>
      showUnits
        ? u === "percent"
          ? "%"
          : u === "deg" || u === "turn"
            ? u
            : ""
        : "";
    const comma = showCommas ? ", " : " ";
    const alpha = hideAlpha
      ? ""
      : afterCommaAlpha
        ? comma + a.v
        : afterSlashAlpha
          ? " / " + a.v
          : "";

    return format(
      `${v1.v}${units(v1.unit)}${comma}${v2.v}${units(v2.unit)}${comma}${v3.v}${units(v3.unit)}${alpha}${units(a.unit)}`,
    );
  }

  return { formatter };
};
