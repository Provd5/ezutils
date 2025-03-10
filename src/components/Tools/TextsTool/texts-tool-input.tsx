import { type FC, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { type AppDispatch, type AppState } from "~/app/store";
import { HelpersRefsContext } from "~/context/helpers-refs-context";
import { newInput } from "~/features/texts/input-slice";
import { useConvertText } from "~/hooks/useConvertText";
import { DEBOUNCE_WAIT } from "~/utils/constants";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

interface TextsToolInputProps {
  placeholder: string;
}

export const TextsToolInput: FC<TextsToolInputProps> = ({ placeholder }) => {
  const inputValue = useSelector((state: AppState) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const { pathname } = useLocation();
  const { textsTool } = validateTextsParams("textsTool", pathname);

  const { addRef } = useContext(HelpersRefsContext);
  const { convertTextOutput } = useConvertText();

  const changeInputValue = useDebouncedCallback((value: string) => {
    convertTextOutput(textsTool, value);
    dispatch(newInput(value));
  }, DEBOUNCE_WAIT);

  useEffect(() => {
    convertTextOutput(textsTool, inputValue);
    // eslint-disable-next-line
  }, [textsTool]);

  return (
    <div>
      <Label htmlFor="TextsToolInput">Input:</Label>
      <Textarea
        ref={(el) => addRef("TextsToolInput", el)}
        id="TextsToolInput"
        className={`min-h-[25vh]`}
        placeholder={placeholder}
        onChange={(e) => changeInputValue(e.target.value)}
        defaultValue={inputValue}
      />
    </div>
  );
};
