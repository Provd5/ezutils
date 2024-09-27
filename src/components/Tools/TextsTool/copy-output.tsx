import { type FC, useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";

import { cn } from "~/utils/utils";

import { Button } from "../../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

interface CopyOutputProps {
  value: string;
  className?: string;
}

export const CopyOutput: FC<CopyOutputProps> = ({ value, className }) => {
  const [copyStatus, setCopyStatus] = useState<{
    success: boolean;
    msg: string;
  }>();

  const copyOutput = () => {
    setTimeout(() => {
      setCopyStatus(undefined);
    }, 1000);

    if (value.trim() === "") {
      setCopyStatus({ success: false, msg: "No content to copy! ⛔" });
      return;
    }

    try {
      navigator.clipboard.writeText(value);
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
            variant={"outline"}
            size={"icon"}
            onClick={() => copyOutput()}
            className={cn(
              "group disabled:select-none disabled:opacity-100",
              className,
            )}
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
