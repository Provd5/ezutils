import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { type AppDispatch, type AppState } from "~/app/store";
import { type ColorTypes } from "~/components/Tools/ColorsTool/colors-tool-wrapper";
import { HelpersRefsContext } from "~/components/Tools/Helpers/helpers-refs-provider";
import {
  parseColor,
  type ParsedColor,
} from "~/converters/colors/converter-colors-parser";
import {
  setHex,
  setHsl,
  setHwb,
  setRgb,
} from "~/features/colors/colors-converter-slice";
import { decimalRound, errorHandler } from "~/utils/utils";

export const useFormatColor = () => {
  const { getRefValue } = useContext(HelpersRefsContext);
  const [errorState, setErrorState] = useState("");

  const { HEX, HSL, HWB, RGB } = useSelector(
    (state: AppState) => state.colorsConverter,
  );
  const dispatch = useDispatch<AppDispatch>();

  function formatter(inputKey: keyof ColorTypes, colors: ParsedColor): void {
    const showHashtag = getRefValue("HelperTooltipCheckbox-showHashtag");
    const showFormat = getRefValue("HelperTooltipCheckbox-showFormat");
    const showCommas = getRefValue("HelperTooltipCheckbox-showCommas");
    const hideAlpha = getRefValue("HelperTooltipCheckbox-alpha-hide");
    const afterCommaAlpha = getRefValue(
      "HelperTooltipCheckbox-alpha-afterComma",
    );
    const afterSlashAlpha = getRefValue(
      "HelperTooltipCheckbox-alpha-afterSlash",
    );

    const { v1, v2, v3, a } = colors;

    if (inputKey !== "HEX") {
      v1.v = decimalRound(parseFloat(v1.v)).toString();
      v2.v = decimalRound(parseFloat(v2.v)).toString();
      v3.v = decimalRound(parseFloat(v3.v)).toString();
      a.v = decimalRound(parseFloat(a.v)).toString();
    }

    if (inputKey === "HEX") {
      dispatch(
        setHex(
          `${showHashtag ? "#" : ""}${v1.v}${v2.v}${v3.v}${hideAlpha ? "" : a.v}`.toUpperCase(),
        ),
      );
    }

    const format = (v: string) =>
      showFormat ? `${inputKey.toLowerCase()}(${v})` : v;
    const comma = showCommas ? ", " : " ";
    const alpha = hideAlpha
      ? ""
      : afterCommaAlpha
        ? comma + a.v
        : afterSlashAlpha
          ? " / " + a.v
          : "";

    const output = format(`${v1.v}${comma}${v2.v}${comma}${v3.v}${alpha}`);

    switch (inputKey) {
      case "HSL":
        dispatch(setHsl(output));
        break;
      case "HWB":
        dispatch(setHwb(output));
        break;
      case "RGB":
        dispatch(setRgb(output));
        break;
    }
  }

  function formatAll(): void {
    try {
      setErrorState("");
      const parsedHex = parseColor("HEX", HEX);
      const parsedHsl = parseColor("HSL", HSL);
      const parsedHwb = parseColor("HWB", HWB);
      const parsedRgb = parseColor("RGB", RGB);

      formatter("HEX", parsedHex);
      formatter("HSL", parsedHsl);
      formatter("HWB", parsedHwb);
      formatter("RGB", parsedRgb);
    } catch (error) {
      setErrorState(errorHandler(error));
    }
  }

  return { errorState, formatter, formatAll };
};
