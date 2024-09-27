import { type FC, useContext } from "react";
import { type IconType } from "react-icons/lib";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import { HelpersRefsContext } from "./helpers-refs-provider";

interface HelperTooltipCheckboxProps {
  children: React.ReactNode;
  name: string;
  isChecked: boolean;
  toggleCheckbox: () => void;
  Icon: IconType | React.ReactNode;
}

/**
 *  @constant id={`${HELPER_NAME}-${name}`}
 */
export const HELPER_NAME = "helper";

export const HelperTooltipCheckbox: FC<HelperTooltipCheckboxProps> = ({
  children,
  name,
  isChecked,
  toggleCheckbox,
  Icon,
}) => {
  const { addRef } = useContext(HelpersRefsContext);

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
        ref={(el) => addRef(`${HELPER_NAME}-${name}`, el)}
        className="hidden"
        readOnly
        id={`${HELPER_NAME}-${name}`}
        type="checkbox"
        checked={isChecked}
      />
    </div>
  );
};
