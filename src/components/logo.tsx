import type { FC } from "react";

export const APP_NAME = "EzUtils";

export const Logo: FC = ({}) => {
  return (
    <div className="mb-5 flex items-center gap-1">
      <img className="size-12" src="/favicon.svg" alt={`${APP_NAME} logo`} />
      <h1 className="text-3xl font-semibold">{APP_NAME}</h1>
    </div>
  );
};
