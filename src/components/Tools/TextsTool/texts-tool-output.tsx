import { type FC } from "react";
import { useSelector } from "react-redux";

import { type AppState } from "~/app/store";

import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { CopyOutput } from "./copy-output";

interface TextsToolOutputProps {
  placeholder: string;
}

export const TextsToolOutput: FC<TextsToolOutputProps> = ({ placeholder }) => {
  const outputValue = useSelector((state: AppState) => state.output);

  return (
    <div>
      <Label htmlFor="TextsToolOutput">Output:</Label>
      <div className="relative">
        <Textarea
          id="TextsToolOutput"
          className="min-h-36"
          placeholder={placeholder}
          readOnly
          value={outputValue}
          onFocus={(e) => e.target.select()}
        />
        <CopyOutput value={outputValue} className="absolute right-1 top-1" />
      </div>
    </div>
  );
};
