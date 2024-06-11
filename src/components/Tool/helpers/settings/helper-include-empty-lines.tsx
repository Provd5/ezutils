import type { FC } from "react";
import { VscNoNewline } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { type DebouncedState } from "use-debounce";

import { type AppDispatch, type AppState } from "~/app/store";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { switchIncludeEmpty } from "~/features/settings-slice";

interface IncludeEmptyLinesHelperProps {
  debouncedFunction: DebouncedState<(arg?: undefined) => void>;
}

export const IncludeEmptyLinesHelper: FC<IncludeEmptyLinesHelperProps> = ({
  debouncedFunction,
}) => {
  const includeEmptyLines = useSelector(
    (state: AppState) => state.settings.includeEmptyLines,
  );
  const dispatch = useDispatch<AppDispatch>();

  const changeIncludeEmptyLines = () => {
    dispatch(switchIncludeEmpty(!includeEmptyLines));
    debouncedFunction();
  };

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={"icon"}
              variant={includeEmptyLines ? "default" : "outline"}
              onClick={() => changeIncludeEmptyLines()}
            >
              <VscNoNewline className="size-5" />
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            <p>Include empty lines</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <input
        className="hidden"
        readOnly
        id="settings-include-empty-lines"
        type="checkbox"
        checked={includeEmptyLines}
      />
    </div>
  );
};
