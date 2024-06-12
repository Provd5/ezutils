import { type FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { type AppDispatch, type AppState } from "~/app/store";
import { newInput } from "~/features/input-slice";
import { newOutput } from "~/features/output-slice";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { converter } from "../../../converters/converters";
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
    const newValue = converter(textsTool, value);
    dispatch(newOutput(newValue));
    dispatch(newInput(value));
  }, 300);

  useEffect(() => {
    const newValue = converter(textsTool, inputValue);
    dispatch(newOutput(newValue));

    // eslint-disable-next-line
  }, [textsTool]);

  return (
    <div>
      <Label htmlFor="tool-input">Input:</Label>
      <Textarea
        id="tool-input"
        className="min-h-36"
        placeholder={placeholder}
        onChange={(e) => changeInputValue(e.target.value)}
        defaultValue={inputValue}
      />
    </div>
  );
};
