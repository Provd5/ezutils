import type { FC } from "react";
import { type IconType } from "react-icons/lib";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface HelperTooltipCheckboxProps {
  children: React.ReactNode;
  name: string;
  isChecked: boolean;
  toggleCheckbox: () => void;
  Icon: IconType | React.ReactNode;
}

/**
 *  @constant id={`${TOOLTIP_CHECKBOX_NAME_BASE}-${name}`}
 */
export const TOOLTIP_CHECKBOX_NAME_BASE = "HelperTooltipCheckbox";

export const HelperTooltipCheckbox: FC<HelperTooltipCheckboxProps> = ({
  children,
  name,
  isChecked,
  toggleCheckbox,
  Icon,
}) => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={"icon"}
              variant={isChecked ? "default" : "outline"}
              onClick={toggleCheckbox}
            >
              {typeof Icon === "function" ? <Icon className="size-5" /> : Icon}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{children}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <input
        className="hidden"
        readOnly
        id={`${TOOLTIP_CHECKBOX_NAME_BASE}-${name}`}
        type="checkbox"
        checked={isChecked}
      />
    </div>
  );
};
