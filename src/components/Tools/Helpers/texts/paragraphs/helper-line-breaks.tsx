import { type FC, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch, type AppState } from "~/app/store";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { HelpersRefsContext } from "~/context/helpers-refs-context";
import {
  newNeedle,
  newWhere,
  type WhereToBreak,
} from "~/features/texts/paragraphs/line-breaks-slice";
import { useConvertText } from "~/hooks/useConvertText";
import { DEBOUNCE_WAIT } from "~/utils/constants";

import { HELPER_NAME } from "../../helper-tooltip-checkbox";

interface LineBreaksProps {
  tool: TextsToolKeys;
}

export const HelperLineBreaksAddNewBreak: FC<LineBreaksProps> = ({ tool }) => {
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const needle = useSelector(
    (state: AppState) => state.lineBreaksHelper.needle,
  );
  const where = useSelector((state: AppState) => state.lineBreaksHelper.where);

  const { addRef } = useContext(HelpersRefsContext);
  const { convertTextOutput } = useConvertText();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      if (value) dispatch(newNeedle(value));
      convertTextOutput(tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  const changeWhereToBreak = (whereValue: WhereToBreak) => {
    dispatch(newWhere(whereValue));
    changeOutputValue(undefined);
  };

  return (
    <div>
      <Label htmlFor={`${HELPER_NAME}-lineBreaks-addNewBreak-needle`}>
        Needle:
      </Label>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Input
          ref={(el) =>
            addRef(`${HELPER_NAME}-lineBreaks-addNewBreak-needle`, el)
          }
          autoComplete="off"
          className="max-w-xs"
          id={`${HELPER_NAME}-lineBreaks-addNewBreak-needle`}
          defaultValue={needle}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <input
          ref={(el) =>
            addRef(`${HELPER_NAME}-lineBreaks-addNewBreak-where`, el)
          }
          className="hidden"
          id={`${HELPER_NAME}-lineBreaks-addNewBreak-where`}
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
