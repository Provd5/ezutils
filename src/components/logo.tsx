import type { FC } from "react";
import { Link } from "react-router-dom";

import { cn } from "~/utils/utils";

export const APP_NAME = "EzUtils";

interface LogoProps {
  size?: "sm" | "default";
}

export const Logo: FC<LogoProps> = ({ size = "default" }) => {
  return (
    <Link to={"/"} className="flex h-fit w-fit select-none items-center gap-1">
      <img
        className={cn(
          "pointer-events-none",
          size === "sm" ? "size-10" : "size-12",
        )}
        src="/favicon.svg"
        alt={`${APP_NAME} logo`}
      />
      <h1
        className={cn("font-semibold", size === "sm" ? "text-2xl" : "text-3xl")}
      >
        {APP_NAME}
      </h1>
    </Link>
  );
};
