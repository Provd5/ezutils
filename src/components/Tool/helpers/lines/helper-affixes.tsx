import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type ToolKeys } from "~/app/appStructure/structure-types";
import { type AppDispatch, type AppState } from "~/app/store";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { converter } from "~/converters/converters";
import {
  newPrefix,
  newSplitter,
  newSuffix,
} from "~/features/lines/affixes-slice";
import { newOutput } from "~/features/output-slice";

import { IncludeEmptyLinesHelper } from "../settings/helper-include-empty-lines";

interface AffixesProps {
  tool: ToolKeys;
}

export const AffixesNumberLinesHelper: FC<AffixesProps> = ({ tool }) => {
  const splitter = useSelector(
    (state: AppState) => state.affixesHelper.splitter,
  );
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      value && dispatch(newSplitter(value));
      const newOutputValue = converter(tool, inputValue);
      dispatch(newOutput(newOutputValue));
    },
    300,
  );

  return (
    <div>
      <Label htmlFor="affixes-number-lines-helper">Splitter:</Label>
      <div className="flex flex-col gap-1.5">
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="affixes-number-lines-helper"
          defaultValue={splitter}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <IncludeEmptyLinesHelper debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};

export const AffixesPrefixesHelper: FC<AffixesProps> = ({ tool }) => {
  const prefix = useSelector((state: AppState) => state.affixesHelper.prefix);
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      value && dispatch(newPrefix(value));
      const newOutputValue = converter(tool, inputValue);
      dispatch(newOutput(newOutputValue));
    },
    300,
  );

  return (
    <div>
      <Label htmlFor="affixes-prefixes-helper">Add prefix:</Label>
      <div className="flex flex-col gap-1.5">
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="affixes-prefixes-helper"
          defaultValue={prefix}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <IncludeEmptyLinesHelper debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};

export const AffixesSuffixesHelper: FC<AffixesProps> = ({ tool }) => {
  const suffix = useSelector((state: AppState) => state.affixesHelper.suffix);
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      value && dispatch(newSuffix(value));
      const newOutputValue = converter(tool, inputValue);
      dispatch(newOutput(newOutputValue));
    },
    300,
  );

  return (
    <div>
      <Label htmlFor="affixes-suffixes-helper">Add suffix:</Label>
      <div className="flex flex-col gap-1.5">
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="affixes-suffixes-helper"
          defaultValue={suffix}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <IncludeEmptyLinesHelper debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};
