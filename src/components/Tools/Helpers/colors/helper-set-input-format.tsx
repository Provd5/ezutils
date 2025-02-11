import { type FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLORS_ARRAY } from "~/types/colors";

import { type AppDispatch, type AppState } from "~/app/store";
import { setColorInput } from "~/features/colors/colors-converter-slice";
import { useConvertColor } from "~/hooks/useConvertColor";

import { HelperTooltipCheckbox } from "../helper-tooltip-checkbox";

export const HelperSetInputFormat: FC = () => {
  const state = useSelector((state: AppState) => state.colorsConverter);
  const dispatch = useDispatch<AppDispatch>();

  const { convertFrom } = useConvertColor();

  useEffect(() => {
    convertFrom(state.colorInput.from, state.colorInput.value);
  }, [convertFrom, state.colorInput]);

  return (
    <div className="flex flex-row gap-1">
      {COLORS_ARRAY.map((color) => (
        <HelperTooltipCheckbox
          key={`ColorsToolWrapper-HelperTooltipCheckbox-${color}`}
          Icon={color}
          isChecked={color === state.colorInput.from}
          toggleCheckbox={() =>
            dispatch(setColorInput({ ...state.colorInput, from: color }))
          }
          name={`setColorFormat-${color}`}
        >
          Convert from {color} format
        </HelperTooltipCheckbox>
      ))}
    </div>
  );
};
