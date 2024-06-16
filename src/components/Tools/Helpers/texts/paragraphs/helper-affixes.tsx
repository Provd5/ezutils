import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch, type AppState } from "~/app/store";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { textsInputOutputConverter } from "~/converters/texts/texts-input-output-converter";
import {
  newPrefix,
  newSplitter,
  newSuffix,
} from "~/features/texts/paragraphs/affixes-slice";
import { DEBOUNCE_WAIT } from "~/utils/constants";

import { HelperIncludeEmptyLines } from "../../settings/helper-include-empty-lines";

interface AffixesProps {
  tool: TextsToolKeys;
}

export const HelperAffixesInsertLineNumbering: FC<AffixesProps> = ({
  tool,
}) => {
  const splitter = useSelector(
    (state: AppState) => state.affixesHelper.splitter,
  );
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      value && dispatch(newSplitter(value));
      textsInputOutputConverter(dispatch, tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  return (
    <div>
      <Label htmlFor="HelperAffixesInsertLineNumbering">Splitter:</Label>
      <div className="flex flex-col gap-1.5">
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="HelperAffixesInsertLineNumbering"
          defaultValue={splitter}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <HelperIncludeEmptyLines debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};

export const HelperAffixesAddPrefixes: FC<AffixesProps> = ({ tool }) => {
  const prefix = useSelector((state: AppState) => state.affixesHelper.prefix);
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      value && dispatch(newPrefix(value));
      textsInputOutputConverter(dispatch, tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  return (
    <div>
      <Label htmlFor="HelperAffixesAddPrefixes">Add prefix:</Label>
      <div className="flex flex-col gap-1.5">
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="HelperAffixesAddPrefixes"
          defaultValue={prefix}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <HelperIncludeEmptyLines debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};

export const HelperAffixesAddSuffixes: FC<AffixesProps> = ({ tool }) => {
  const suffix = useSelector((state: AppState) => state.affixesHelper.suffix);
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      value && dispatch(newSuffix(value));
      textsInputOutputConverter(dispatch, tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  return (
    <div>
      <Label htmlFor="HelperAffixesAddSuffixes">Add suffix:</Label>
      <div className="flex flex-col gap-1.5">
        <Input
          autoComplete="off"
          className="max-w-xs"
          id="HelperAffixesAddSuffixes"
          defaultValue={suffix}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <HelperIncludeEmptyLines debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};
