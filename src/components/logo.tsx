import type { FC } from "react";
import { Link } from "react-router-dom";

import { cn } from "~/lib/utils";

export const APP_NAME = "EzUtils";

interface LogoProps {
  size?: "sm" | "default";
}

export const Logo: FC<LogoProps> = ({ size = "default" }) => {
  return (
    <Link to={"/"} className="flex h-fit w-fit select-none items-center gap-1">
      <LogoImg size={size} />
      <LogoLabel size={size} />
    </Link>
  );
};

export const LogoImg: FC<LogoProps> = ({ size = "default" }) => {
  return (
    <img
      className={cn(
        "pointer-events-none",
        size === "sm" ? "size-8" : "size-12",
      )}
      src="/favicon.svg"
      alt={`${APP_NAME} logo`}
    />
  );
};

export const LogoLabel: FC<LogoProps> = ({ size = "default" }) => {
  return (
    <h1
      className={cn("font-semibold", size === "sm" ? "text-2xl" : "text-3xl")}
    >
      {APP_NAME}
    </h1>
  );
};
