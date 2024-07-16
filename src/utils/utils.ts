import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const errorHandler = (error: unknown): string => {
  let errorMsg: string;

  if (error instanceof Error) {
    errorMsg = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    errorMsg = String(error.message);
  } else if (typeof error === "string") {
    errorMsg = error;
  } else {
    errorMsg = "Not found";
  }

  return errorMsg;
};

export const decimalRound = (n: number): number => {
  return Math.round(n * 10) / 10;
};
