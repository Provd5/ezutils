import { type FC } from "react";
import { useSelector } from "react-redux";

import { type AppState } from "~/app/store";

import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

interface TextsToolOutputProps {
  placeholder: string;
}

export const TextsToolOutput: FC<TextsToolOutputProps> = ({ placeholder }) => {
  const outputValue = useSelector((state: AppState) => state.output);

  return (
    <div>
      <Label htmlFor="TextsToolOutput">Output:</Label>
      <Textarea
        id="TextsToolOutput"
        className={`min-h-[25vh]`}
        placeholder={placeholder}
        readOnly
        value={outputValue}
        onFocus={(e) => e.target.select()}
      />
    </div>
  );
};
