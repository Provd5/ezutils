import { type FC } from "react";
import { useSelector } from "react-redux";

import { type AppState } from "~/app/store";

import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ToolOutputProps {
  placeholder: string;
}

export const ToolOutput: FC<ToolOutputProps> = ({ placeholder }) => {
  const outputValue = useSelector((state: AppState) => state.output);

  return (
    <div>
      <Label htmlFor="tool-output">Output:</Label>
      <Textarea
        id="tool-output"
        className="min-h-36"
        placeholder={placeholder}
        value={outputValue}
        readOnly
      />
    </div>
  );
};
