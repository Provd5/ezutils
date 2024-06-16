import { type FC, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { type AppDispatch, type AppState } from "~/app/store";
import { textsInputOutputConverter } from "~/converters/texts/texts-input-output-converter";
import { newInput } from "~/features/texts/input-slice";
import { DEBOUNCE_WAIT } from "~/utils/constants";
import { validateTextsParams } from "~/utils/validate-texts-params";

import { Button } from "../../ui/button";

export const UseOutput: FC = ({}) => {
  const params = useParams();
  const { textsTool } = validateTextsParams("textsTool", params);

  const [disableButton, setDisableButton] = useState(false);

  const outputValue = useSelector((state: AppState) => state.output);
  const dispatch = useDispatch<AppDispatch>();

  const toggleOutputToInput = () => {
    const inputTextarea = document.getElementById(
      "TextsToolInput",
    ) as HTMLTextAreaElement;

    setDisableButton(true);
    inputTextarea.value = outputValue;
    dispatch(newInput(outputValue));
    setTimeout(() => {
      textsInputOutputConverter(dispatch, textsTool, outputValue);
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
