import type { FC } from "react";

import { Input } from "../../ui/Input";
import { Label } from "../../ui/label";

export const ColorsToolWrapper: FC = ({}) => {
  return (
    <div className="flex flex-col items-start gap-0.5 px-3">
      <div>
        <Label>HEX:</Label>
        <Input />
      </div>
      <div>
        <Label>rgb:</Label>
        <Input />
      </div>
      <div>
        <Label>hsl:</Label>
        <Input />
      </div>
      <div>
        <Label>hwb:</Label>
        <Input />
      </div>
    </div>
  );
};
