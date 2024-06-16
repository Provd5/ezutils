import { type FC } from "react";
import { useSelector } from "react-redux";

import { APP_STRUCTURE } from "~/app/appStructure/app-structure";
import { type AppState } from "~/app/store";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { useConvertColor } from "~/hooks/useConvertColor";
import { useFormatColor } from "~/hooks/useFormatColor";

import { HelperColorsConverter } from "../Helpers/colors/helper-colors-converter";

export interface ColorTypes {
  RGB: { r: string; g: string; b: string; a: string };
  HSL: { h: string; s: string; l: string; a: string };
  HWB: { h: string; w: string; b: string; a: string };
  HEX: string;
}

const COLORS: (keyof ColorTypes)[] = ["HEX", "RGB", "HSL", "HWB"] as const;

export const ColorsToolWrapper: FC = ({}) => {
  const colorsState = useSelector((state: AppState) => state.colorsConverter);

  const { label, description } = APP_STRUCTURE.colors.tools.colorsConverter;
  const { convertFrom, errorState } = useConvertColor();
  const { formatAll, errorState: formatErrorState } = useFormatColor();

  return (
    <div className="flex flex-col items-start gap-6">
      <p>
        <span className="text-lg font-bold">{label}</span> - {description}
      </p>
      <HelperColorsConverter />
      <div className="flex flex-col items-start gap-0.5 px-3">
        {COLORS.map((color) => (
          <div key={`ColorsToolWrapper-COLORS-${color}`}>
            <Label htmlFor={`ColorsInput-${color}`}>{color}:</Label>
            <Input
              id={`ColorsInput-${color}`}
              value={colorsState[color]}
              onChange={(e) => convertFrom(color, e.target.value)}
              autoComplete="off"
              onFocus={(e) => e.target.select()}
            />
          </div>
        ))}
        {errorState && <div>{errorState}</div>}
        {formatErrorState && <div>{formatErrorState}</div>}
      </div>
      <Button onClick={() => formatAll()}>Convert</Button>
    </div>
  );
};
