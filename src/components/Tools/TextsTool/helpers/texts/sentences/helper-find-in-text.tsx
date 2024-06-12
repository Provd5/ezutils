import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch, type AppState } from "~/app/store";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { converter } from "~/converters/converters";
import { newOutput } from "~/features/output-slice";
import {
  newReplaceWith,
  newToBeReplaced,
} from "~/features/texts/sentences/find-in-text-slice";

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
    (input?: "toBeReplaced" | "replaceWith", value?: string) => {
      if (value) {
        switch (input) {
          case "toBeReplaced":
            dispatch(newToBeReplaced(value));
            break;
          case "replaceWith":
            dispatch(newReplaceWith(value));
        }
      }

      const newOutputValue = converter(tool, inputValue);
      dispatch(newOutput(newOutputValue));
    },
    300,
  );

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-col gap-x-1.5 sm:flex-row">
        <div>
          <Label htmlFor="find-in-text-replace-helper-to-be-replaced">
            Text to replace:
          </Label>
          <Input
            autoComplete="off"
            className="max-w-xs"
            id="find-in-text-replace-helper-to-be-replaced"
            defaultValue={findInTextHelper.toBeReplaced}
            onChange={(e) => changeOutputValue("toBeReplaced", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="find-in-text-replace-helper-replace-with">
            Replace with:
          </Label>
          <Input
            autoComplete="off"
            className="max-w-xs"
            id="find-in-text-replace-helper-replace-with"
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
    value && dispatch(newToBeReplaced(value));

    const newOutputValue = converter(tool, inputValue);
    dispatch(newOutput(newOutputValue));
  }, 300);

  return (
    <div className="flex flex-col gap-1.5">
      <div>
        <Label htmlFor="find-in-text-find-helper">Find in text:</Label>
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="find-in-text-find-helper"
          defaultValue={findInTextHelper.toBeReplaced}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
      </div>
      <HelperWordMatch debouncedFunction={changeOutputValue} />
    </div>
  );
};
