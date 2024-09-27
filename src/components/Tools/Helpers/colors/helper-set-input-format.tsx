import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLORS_ARRAY } from "~/types/colors";

import { type AppDispatch, type AppState } from "~/app/store";
import { setColorInput } from "~/features/colors/colors-converter-slice";
import { useConvertColor } from "~/hooks/useConvertColor";

import { HelperTooltipCheckbox } from "../helper-tooltip-checkbox";

export const HelperSetInputFormat: FC = () => {
  const { colorInput } = useSelector(
    (state: AppState) => state.colorsConverter,
  );
  const dispatch = useDispatch<AppDispatch>();

  const { convertFrom } = useConvertColor();

  return (
    <div className="flex flex-row gap-1">
      {COLORS_ARRAY.map((color) => (
        <HelperTooltipCheckbox
          key={`ColorsToolWrapper-HelperTooltipCheckbox-${color}`}
          Icon={color}
          isChecked={color === colorInput.from}
          toggleCheckbox={() => {
            dispatch(setColorInput({ ...colorInput, from: color })),
              convertFrom(color, colorInput.value);
          }}
          name={`setColorFormat-${color}`}
        >
          Convert from {color} format
        </HelperTooltipCheckbox>
      ))}
    </div>
  );
};
