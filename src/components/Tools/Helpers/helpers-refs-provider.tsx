import { type FC, useRef } from "react";

import {
  HelpersRefsContext,
  type RefType,
} from "~/context/helpers-refs-context";

interface HelpersRefsProviderProps {
  children: React.ReactNode;
}

export const HelpersRefsProvider: FC<HelpersRefsProviderProps> = ({
  children,
}) => {
  const helpersRefs = useRef<{
    [key: string]: RefType;
  }>({});

  const addRef = (key: string, ref: RefType) => {
    helpersRefs.current[key] = ref;
  };

  const getRefElement = (key: string) => {
    return helpersRefs.current[key];
  };

  const getRefValue = (key: string) => {
    const element = helpersRefs.current[key];

    return element?.type === "checkbox"
      ? (element as HTMLInputElement).checked
      : element?.value;
  };

  return (
    <HelpersRefsContext.Provider value={{ addRef, getRefElement, getRefValue }}>
      {children}
    </HelpersRefsContext.Provider>
  );
};
