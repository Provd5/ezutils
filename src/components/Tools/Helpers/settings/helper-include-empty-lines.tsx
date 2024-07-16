import type { FC } from "react";
import { VscNoNewline } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { type DebouncedState } from "use-debounce";

import { type AppDispatch, type AppState } from "~/app/store";
import { toggleIncludeEmpty } from "~/features/settings-slice";

import { HelperTooltipCheckbox } from "../helper-tooltip-checkbox";

interface IncludeEmptyLinesHelperProps {
  debouncedFunction: DebouncedState<(arg?: unknown) => void>;
}

export const HelperIncludeEmptyLines: FC<IncludeEmptyLinesHelperProps> = ({
  debouncedFunction,
}) => {
  const includeEmptyLines = useSelector(
    (state: AppState) => state.settings.includeEmptyLines,
  );
  const dispatch = useDispatch<AppDispatch>();

  const changeIncludeEmptyLines = () => {
    dispatch(toggleIncludeEmpty(!includeEmptyLines));
    debouncedFunction();
  };

  return (
    <HelperTooltipCheckbox
      Icon={VscNoNewline}
      isChecked={includeEmptyLines}
      name="includeEmptyLines"
      toggleCheckbox={changeIncludeEmptyLines}
    >
      Include empty lines
    </HelperTooltipCheckbox>
  );
};
