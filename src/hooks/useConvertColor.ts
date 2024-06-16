import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type AppDispatch } from "~/app/store";
import { type ColorTypes } from "~/components/Tools/ColorsTool/colors-tool-wrapper";
import {
  hexToRgb,
  hslToRgb,
  hwbToRgb,
  rgbToHex,
  rgbToHsl,
  rgbToHwb,
} from "~/converters/colors/converter-colors";
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
import { DEBOUNCE_WAIT } from "~/utils/constants";
import { errorHandler } from "~/utils/utils";

import { useFormatColor } from "./useFormatColor";

export const useConvertColor = () => {
  const { formatter } = useFormatColor();
  const [errorState, setErrorState] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const changeInputValue = useDebouncedCallback(
    (from: keyof ColorTypes, userInput: string): void => {
      try {
        let parsedInput: ParsedColor;
        switch (from) {
          case "HEX":
            parsedInput = parseColor(from, userInput);
            parsedInput = hexToRgb(parsedInput);
            break;
          case "HSL":
            parsedInput = parseColor(from, userInput);
            parsedInput = hslToRgb(parsedInput);
            break;
          case "HWB":
            parsedInput = parseColor(from, userInput);
            parsedInput = hwbToRgb(parsedInput);
            break;
          case "RGB":
            parsedInput = parseColor(from, userInput);
            break;
        }

        if (from !== "HEX") {
          const hex = rgbToHex(parsedInput);
          formatter("HEX", hex);
        }
        if (from !== "HSL") {
          const hsl = rgbToHsl(parsedInput);
          formatter("HSL", hsl);
        }
        if (from !== "HWB") {
          const hwb = rgbToHwb(parsedInput);
          formatter("HWB", hwb);
        }
        if (from !== "RGB") {
          formatter("RGB", parsedInput);
        }
      } catch (error) {
        setErrorState(errorHandler(error));
      }
    },
    DEBOUNCE_WAIT,
  );

  const convertFrom = (from: keyof ColorTypes, userInput: string) => {
    setErrorState("");
    switch (from) {
      case "HEX":
        dispatch(setHex(userInput));
        break;
      case "HSL":
        dispatch(setHsl(userInput));
        break;
      case "HWB":
        dispatch(setHwb(userInput));
        break;
      case "RGB":
        dispatch(setRgb(userInput));
        break;
    }
    changeInputValue(from, userInput);
  };

  return { errorState, convertFrom };
};
