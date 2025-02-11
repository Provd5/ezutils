import { createContext } from "react";

export type RefType = HTMLInputElement | HTMLTextAreaElement | null;

export type HelpersRefsContextType = {
  addRef: (key: string, ref: RefType) => void;
  getRefElement: (key: string) => RefType;
  getRefValue: (key: string) => string | boolean | undefined;
};

export const HelpersRefsContext = createContext<HelpersRefsContextType>({
  addRef() {},
  getRefElement() {
    return null;
  },
  getRefValue() {
    return undefined;
  },
});
