import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type ToolKeys } from "~/app/appStructure/structure-types";
import { type AppDispatch, type AppState } from "~/app/store";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { converter } from "~/converters/converters";
import {
  newNeedle,
  newWhere,
  type WhereToBreak,
} from "~/features/lines/line-breaks-slice";
import { newOutput } from "~/features/output-slice";

interface LineBreaksProps {
  tool: ToolKeys;
}

export const LineBreaksAddHelper: FC<LineBreaksProps> = ({ tool }) => {
  const needle = useSelector(
    (state: AppState) => state.lineBreaksHelper.needle,
  );
  const where = useSelector((state: AppState) => state.lineBreaksHelper.where);
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      value && dispatch(newNeedle(value));
      const newOutputValue = converter(tool, inputValue);
      dispatch(newOutput(newOutputValue));
    },
    300,
  );

  const changeWhereToBreak = (whereValue: WhereToBreak) => {
    dispatch(newWhere(whereValue));
    changeOutputValue(undefined);
  };

  return (
    <div>
      <Label htmlFor="line-breaks-add-helper-needle">Needle:</Label>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="line-breaks-add-helper-needle"
          defaultValue={needle}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <input
          className="hidden"
          id="line-breaks-add-helper-where"
          readOnly
          value={where}
        />
        <div className="flex gap-1">
          <Button
            onClick={() => changeWhereToBreak("after")}
            variant={where === "after" ? "default" : "outline"}
          >
            After
          </Button>
          <Button
            onClick={() => changeWhereToBreak("before")}
            variant={where === "before" ? "default" : "outline"}
          >
            Before
          </Button>
          <Button
            onClick={() => changeWhereToBreak("instead")}
            variant={where === "instead" ? "default" : "outline"}
          >
            Instead
          </Button>
        </div>
      </div>
    </div>
  );
};
