import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch, type AppState } from "~/app/store";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { textsInputOutputConverter } from "~/converters/texts/texts-input-output-converter";
import {
  newReplaceWith,
  newToReplace,
} from "~/features/texts/sentences/find-in-text-slice";
import { DEBOUNCE_WAIT } from "~/utils/constants";

import { HelperWordMatch } from "../../settings/helper-word-match";

interface FindInTextProps {
  tool: TextsToolKeys;
}

export const HelperFindInTextFindAndReplace: FC<FindInTextProps> = ({
  tool,
}) => {
  const findInTextHelper = useSelector(
    (state: AppState) => state.findInTextHelper,
  );
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (input?: "toReplace" | "replaceWith", value?: string) => {
      if (value) {
        switch (input) {
          case "toReplace":
            dispatch(newToReplace(value));
            break;
          case "replaceWith":
            dispatch(newReplaceWith(value));
        }
      }

      textsInputOutputConverter(dispatch, tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-col gap-x-1.5 sm:flex-row">
        <div>
          <Label htmlFor="HelperFindInTextFindAndReplace-to-replace">
            Text to replace:
          </Label>
          <Input
            autoComplete="off"
            className="max-w-xs"
            id="HelperFindInTextFindAndReplace-to-replace"
            defaultValue={findInTextHelper.toReplace}
            onChange={(e) => changeOutputValue("toReplace", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="HelperFindInTextFindAndReplace-replace-with">
            Replace with:
          </Label>
          <Input
            autoComplete="off"
            className="max-w-xs"
            id="HelperFindInTextFindAndReplace-replace-with"
            defaultValue={findInTextHelper.replaceWith}
            onChange={(e) => changeOutputValue("replaceWith", e.target.value)}
          />
        </div>
      </div>
      <HelperWordMatch debouncedFunction={changeOutputValue} />
    </div>
  );
};

export const HelperFindInTextFindAndCount: FC<FindInTextProps> = ({ tool }) => {
  const findInTextHelper = useSelector(
    (state: AppState) => state.findInTextHelper,
  );
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback((value?: string) => {
    value && dispatch(newToReplace(value));

    textsInputOutputConverter(dispatch, tool, inputValue);
  }, DEBOUNCE_WAIT);

  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <Label htmlFor="HelperFindInTextFindAndCount">Find in text:</Label>
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="HelperFindInTextFindAndCount"
          defaultValue={findInTextHelper.toReplace}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
      </div>
      <HelperWordMatch debouncedFunction={changeOutputValue} />
    </div>
  );
};
