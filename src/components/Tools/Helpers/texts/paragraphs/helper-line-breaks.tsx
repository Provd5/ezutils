import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch, type AppState } from "~/app/store";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { textsInputOutputConverter } from "~/converters/texts/texts-input-output-converter";
import {
  newNeedle,
  newWhere,
  type WhereToBreak,
} from "~/features/texts/paragraphs/line-breaks-slice";
import { DEBOUNCE_WAIT } from "~/utils/constants";

interface LineBreaksProps {
  tool: TextsToolKeys;
}

export const HelperLineBreaksAddNewBreak: FC<LineBreaksProps> = ({ tool }) => {
  const needle = useSelector(
    (state: AppState) => state.lineBreaksHelper.needle,
  );
  const where = useSelector((state: AppState) => state.lineBreaksHelper.where);
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      value && dispatch(newNeedle(value));
      textsInputOutputConverter(dispatch, tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  const changeWhereToBreak = (whereValue: WhereToBreak) => {
    dispatch(newWhere(whereValue));
    changeOutputValue(undefined);
  };

  return (
    <div>
      <Label htmlFor="HelperLineBreaksAddNewBreak-needle">Needle:</Label>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="HelperLineBreaksAddNewBreak-needle"
          defaultValue={needle}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <input
          className="hidden"
          id="HelperLineBreaksAddNewBreak-where"
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
