import { type FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { type AppDispatch, type AppState } from "~/app/store";
import { textsInputOutputConverter } from "~/converters/texts/texts-input-output-converter";
import { newInput } from "~/features/texts/input-slice";
import { DEBOUNCE_WAIT } from "~/utils/constants";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

interface TextsToolInputProps {
  placeholder: string;
}

export const TextsToolInput: FC<TextsToolInputProps> = ({ placeholder }) => {
  const params = useParams();
  const { textsTool } = validateTextsParams("textsTool", params);

  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeInputValue = useDebouncedCallback((value: string) => {
    textsInputOutputConverter(dispatch, textsTool, value);
    dispatch(newInput(value));
  }, DEBOUNCE_WAIT);

  useEffect(() => {
    textsInputOutputConverter(dispatch, textsTool, inputValue);

    // eslint-disable-next-line
  }, [textsTool]);

  return (
    <div>
      <Label htmlFor="TextsToolInput">Input:</Label>
      <Textarea
        id="TextsToolInput"
        className="min-h-36"
        placeholder={placeholder}
        onChange={(e) => changeInputValue(e.target.value)}
        defaultValue={inputValue}
      />
    </div>
  );
};
