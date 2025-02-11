import type { FC } from "react";
import { useSelector } from "react-redux";

import { type AppState } from "~/app/store";

export const ColorsToolError: FC = () => {
  const { convertError } = useSelector(
    (state: AppState) => state.colorsConverter,
  );

  return (
    <div className="flex h-10 animate-pulse items-center text-destructive">
      {convertError && <p>{convertError}</p>}
    </div>
  );
};
