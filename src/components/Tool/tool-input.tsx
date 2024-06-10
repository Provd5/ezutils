import { type FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { type AppDispatch, type AppState } from "~/app/store";
import { newInput } from "~/features/inputSlice";
import { newOutput } from "~/features/outputSlice";
import { validateParams } from "~/utils/validate-params";

import { converter } from "../../converter/converter";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ToolInputProps {
  placeholder: string;
}

export const ToolInput: FC<ToolInputProps> = ({ placeholder }) => {
  const params = useParams();
  const { tool } = validateParams("tool", params);

  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const changeInputValue = useDebouncedCallback((value: string) => {
    const newValue = converter(tool, value);
    dispatch(newOutput(newValue));
    dispatch(newInput(value));
  }, 300);

  useEffect(() => {
    const newValue = converter(tool, inputValue);
    dispatch(newOutput(newValue));

    // eslint-disable-next-line
  }, [tool]);

  return (
    <Label htmlFor="tool-input" title="Input:">
      <Textarea
        id="tool-input"
        className="min-h-36"
        placeholder={placeholder}
        onChange={(e) => changeInputValue(e.target.value)}
        defaultValue={inputValue}
      />
    </Label>
  );
};
