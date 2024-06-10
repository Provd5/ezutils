import { type FC, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import { type AppDispatch, type AppState } from "~/app/store";
import { newInput } from "~/features/inputSlice";

import { Button } from "../ui/button";

export const UseOutput: FC = ({}) => {
  const [disableButton, setDisableButton] = useState(false);

  const outputValue = useSelector((state: AppState) => state.output);
  const dispatch = useDispatch<AppDispatch>();

  const switchOutputToInput = () => {
    const inputTextarea = document.getElementById(
      "tool-input",
    ) as HTMLTextAreaElement;

    setDisableButton(true);
    inputTextarea.value = outputValue;
    dispatch(newInput(outputValue));
    setTimeout(() => {
      setDisableButton(false);
    }, 300);
  };

  return (
    <Button onClick={() => switchOutputToInput()} disabled={disableButton}>
      <FiRefreshCw className="mr-1 size-4 shrink-0" />
      Use output
    </Button>
  );
};
