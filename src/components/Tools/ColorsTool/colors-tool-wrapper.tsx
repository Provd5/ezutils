import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLORS_ARRAY } from "~/types/colors";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type AppDispatch, type AppState } from "~/app/store";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { setColorInput } from "~/features/colors/colors-converter-slice";
import { useConvertColor } from "~/hooks/useConvertColor";

import { HelperColorsConverter } from "../Helpers/colors/helper-colors-converter";
import { HelperSetInputFormat } from "../Helpers/colors/helper-set-input-format";
import { CopyOutput } from "../TextsTool/copy-output";

export const ColorsToolWrapper: FC = ({}) => {
  const { colorInput, colorsOutput } = useSelector(
    (state: AppState) => state.colorsConverter,
  );
  const dispatch = useDispatch<AppDispatch>();

  const { label, description } = APP_STRUCTURE.colors.tools.colorsConverter;
  const { convertColorError, convertFrom } = useConvertColor();

  return (
    <div className="flex h-full flex-col">
      <h1 className="w-full border-b border-input bg-background px-3 py-6">
        <span className="text-lg font-bold">{label}</span> - {description}
      </h1>

      <div className="mb-12 mt-6 flex flex-col border-y border-input bg-background pb-10 pt-6 lg:flex-row">
        <div className="flex w-full flex-col gap-1 p-3">
          <div>
            <Label htmlFor={`ColorInput`}>Paste color:</Label>
            <Input
              id={`ColorInput`}
              className="max-w-xs"
              defaultValue={colorInput.value}
              onChange={(e) => {
                dispatch(
                  setColorInput({ ...colorInput, value: e.target.value }),
                ),
                  convertFrom(colorInput.from, e.target.value);
              }}
              autoComplete="off"
              onFocus={(e) => e.target.select()}
            />
          </div>
          <HelperSetInputFormat />
          <div className="flex h-10 items-center">
            {convertColorError || ""}
          </div>
          <HelperColorsConverter />
        </div>

        <div className="flex w-full flex-col gap-1 p-3">
          {COLORS_ARRAY.map((color) => (
            <div key={`ColorsToolWrapper-ColorOutput-${color}`}>
              <Label htmlFor={`ColorOutput-${color}`}>{color}:</Label>
              <div className="flex items-center gap-1">
                <Input
                  id={`ColorOutput-${color}`}
                  className="max-w-xs"
                  readOnly
                  value={colorsOutput[color] || colorInput.value}
                  onFocus={(e) => e.target.select()}
                />
                <CopyOutput value={colorsOutput[color] || colorInput.value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
