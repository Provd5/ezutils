import { type FC, useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import { useSelector } from "react-redux";

import { type AppState } from "~/app/store";
import { cn } from "~/utils/utils";

import { Button } from "../../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

export const CopyOutput: FC = ({}) => {
  const outputValue = useSelector((state: AppState) => state.output);
  const [copyStatus, setCopyStatus] = useState<{
    success: boolean;
    msg: string;
  }>();

  const copyOutput = () => {
    setTimeout(() => {
      setCopyStatus(undefined);
    }, 1000);

    if (outputValue.trim() === "") {
      setCopyStatus({ success: false, msg: "No content to copy! ⛔" });
      return;
    }

    try {
      navigator.clipboard.writeText(outputValue);
      setCopyStatus({ success: true, msg: "Copied successfully! ✅" });
    } catch (error) {
      setCopyStatus({ success: false, msg: "Failed to copy! ❌" });
    }
  };

  return (
    <TooltipProvider>
      <Tooltip open={copyStatus ? true : false}>
        <TooltipTrigger asChild>
          <Button
            onClick={() => copyOutput()}
            className="group disabled:select-none disabled:opacity-100"
            disabled={!!copyStatus}
          >
            {copyStatus ? (
              copyStatus.success ? (
                <FaCircleCheck className="size-5 animate-show" />
              ) : (
                <FaCircleXmark className="size-5 animate-show" />
              )
            ) : (
              <MdOutlineContentCopy className="group-hover:scale-11 size-5 animate-show transition-transform group-hover:rotate-6" />
            )}
            <span className="ml-1">Copy result!</span>
          </Button>
        </TooltipTrigger>
        {copyStatus && (
          <TooltipContent>
            <p
              className={cn(
                "text-sm",
                copyStatus?.success === true && "text-green-600",
                copyStatus?.success === false && "text-red-600",
              )}
            >
              {copyStatus?.msg}
            </p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
