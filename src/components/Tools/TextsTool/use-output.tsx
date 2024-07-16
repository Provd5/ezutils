import { type FC, useContext, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { type AppDispatch, type AppState } from "~/app/store";
import { newInput } from "~/features/texts/input-slice";
import { useConvertText } from "~/hooks/useConvertText";
import { DEBOUNCE_WAIT } from "~/utils/constants";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { Button } from "../../ui/button";
import { HelpersRefsContext } from "../Helpers/helpers-refs-provider";

export const UseOutput: FC = ({}) => {
  const outputValue = useSelector((state: AppState) => state.output);
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const { textsTool } = validateTextsParams("textsTool", params);

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
      <FiRefreshCw className="mr-1 size-4" />
      Use output
    </Button>
  );
};
