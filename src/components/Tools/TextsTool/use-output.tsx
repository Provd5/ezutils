import { type FC, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { FaArrowTurnUp } from "react-icons/fa6";

import { type AppDispatch, type AppState } from "~/app/store";
import { HelpersRefsContext } from "~/context/helpers-refs-context";
import { newInput } from "~/features/texts/input-slice";
import { useConvertText } from "~/hooks/useConvertText";
import { DEBOUNCE_WAIT } from "~/utils/constants";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { Button } from "../../ui/button";

export const UseOutput: FC = () => {
  const outputValue = useSelector((state: AppState) => state.output);
  const dispatch = useDispatch<AppDispatch>();

  const { pathname } = useLocation();
  const { textsTool } = validateTextsParams("textsTool", pathname);

  const { getRefElement } = useContext(HelpersRefsContext);
  const { convertTextOutput } = useConvertText();

  const [disableButton, setDisableButton] = useState(false);

  const toggleOutputToInput = () => {
    const inputTextarea = getRefElement("TextsToolInput");

    setDisableButton(true);
    if (inputTextarea) inputTextarea.value = outputValue;
    dispatch(newInput(outputValue));
    setTimeout(() => {
      convertTextOutput(textsTool, outputValue);
      setDisableButton(false);
    }, DEBOUNCE_WAIT);
  };

  return (
    <Button onClick={() => toggleOutputToInput()} disabled={disableButton}>
      Use output
      <FaArrowTurnUp className="ml-1 size-4" />
    </Button>
  );
};
