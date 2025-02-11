import { type FC, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch, type AppState } from "~/app/store";
import { Input } from "~/components/ui/Input";
import { Label } from "~/components/ui/label";
import { HelpersRefsContext } from "~/context/helpers-refs-context";
import {
  newPrefix,
  newSplitter,
  newSuffix,
} from "~/features/texts/paragraphs/affixes-slice";
import { useConvertText } from "~/hooks/useConvertText";
import { DEBOUNCE_WAIT } from "~/utils/constants";

import { HELPER_NAME } from "../../helper-tooltip-checkbox";
import { HelperIncludeEmptyLines } from "../../settings/helper-include-empty-lines";

interface AffixesProps {
  tool: TextsToolKeys;
}

export const HelperAffixesInsertLineNumbering: FC<AffixesProps> = ({
  tool,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const splitter = useSelector(
    (state: AppState) => state.affixesHelper.splitter,
  );
  const inputValue = useSelector((state: AppState) => state.input);

  const { addRef } = useContext(HelpersRefsContext);
  const { convertTextOutput } = useConvertText();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      if (value) dispatch(newSplitter(value));
      convertTextOutput(tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  return (
    <div>
      <Label htmlFor={`${HELPER_NAME}-affixes-insertLineNumbering`}>
        Splitter:
      </Label>
      <div className="flex flex-col gap-1.5">
        <Input
          ref={(el) => addRef(`${HELPER_NAME}-affixes-insertLineNumbering`, el)}
          autoComplete="off"
          className="max-w-xs"
          id={`${HELPER_NAME}-affixes-insertLineNumbering`}
          defaultValue={splitter}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <HelperIncludeEmptyLines debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};

export const HelperAffixesAddPrefixes: FC<AffixesProps> = ({ tool }) => {
  const dispatch = useDispatch<AppDispatch>();

  const prefix = useSelector((state: AppState) => state.affixesHelper.prefix);
  const inputValue = useSelector((state: AppState) => state.input);

  const { addRef } = useContext(HelpersRefsContext);
  const { convertTextOutput } = useConvertText();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      if (value) dispatch(newPrefix(value));
      convertTextOutput(tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  return (
    <div>
      <Label htmlFor={`${HELPER_NAME}-affixes-addPrefixes`}>Add prefix:</Label>
      <div className="flex flex-col gap-1.5">
        <Input
          ref={(el) => addRef(`${HELPER_NAME}-affixes-addPrefixes`, el)}
          autoComplete="off"
          className="max-w-xs"
          id={`${HELPER_NAME}-affixes-addPrefixes`}
          defaultValue={prefix}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <HelperIncludeEmptyLines debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};

export const HelperAffixesAddSuffixes: FC<AffixesProps> = ({ tool }) => {
  const dispatch = useDispatch<AppDispatch>();

  const suffix = useSelector((state: AppState) => state.affixesHelper.suffix);
  const inputValue = useSelector((state: AppState) => state.input);

  const { addRef } = useContext(HelpersRefsContext);
  const { convertTextOutput } = useConvertText();

  const changeOutputValue = useDebouncedCallback(
    (value: string | undefined) => {
      if (value) dispatch(newSuffix(value));
      convertTextOutput(tool, inputValue);
    },
    DEBOUNCE_WAIT,
  );

  return (
    <div>
      <Label htmlFor={`${HELPER_NAME}-affixes-addSuffixes`}>Add suffix:</Label>
      <div className="flex flex-col gap-1.5">
        <Input
          ref={(el) => addRef(`${HELPER_NAME}-affixes-addSuffixes`, el)}
          autoComplete="off"
          className="max-w-xs"
          id={`${HELPER_NAME}-affixes-addSuffixes`}
          defaultValue={suffix}
          onChange={(e) => changeOutputValue(e.target.value)}
        />
        <HelperIncludeEmptyLines debouncedFunction={changeOutputValue} />
      </div>
    </div>
  );
};
