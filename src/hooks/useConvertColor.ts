import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type ColorTypes } from "~/types/colors";

import { type AppDispatch } from "~/app/store";
import { parseColor } from "~/converters/colors/converter-colors-parser";
import { toHex } from "~/converters/colors/to-hex";
import { toHsl } from "~/converters/colors/to-hsl";
import { toRgb } from "~/converters/colors/to-rgb";
import {
  setColorsOutput,
  setConvertError,
} from "~/features/colors/colors-converter-slice";
import { DEBOUNCE_WAIT } from "~/utils/constants";
import { errorHandler } from "~/utils/utils";

import { useFormatColor } from "./useFormatColor";

export const useConvertColor = () => {
  const { formatter } = useFormatColor();

  const dispatch = useDispatch<AppDispatch>();

  const convertFrom = useDebouncedCallback(
    (from: keyof ColorTypes, userInput: string): void => {
      try {
        const parsedInput = parseColor(from, userInput);

        let hex = parsedInput;
        let rgb = parsedInput;
        let hsl = parsedInput;

        if (from !== "HEX") {
          hex = toHex(from, parsedInput);
        }
        if (from !== "RGB") {
          rgb = toRgb(from, parsedInput);
        }
        if (from !== "HSL") {
          hsl = toHsl(from, parsedInput);
        }

        dispatch(setConvertError(""));
        dispatch(
          setColorsOutput({
            HEX: formatter("HEX", hex),
            HSL: formatter("HSL", hsl),
            RGB: formatter("RGB", rgb),
          }),
        );
      } catch (error) {
        dispatch(setConvertError(errorHandler(error)));
      }
    },
    DEBOUNCE_WAIT,
  );

  return { convertFrom };
};
