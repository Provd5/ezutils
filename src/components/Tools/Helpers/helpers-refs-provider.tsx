import { createContext, type FC, useRef } from "react";

type RefType = HTMLInputElement | HTMLTextAreaElement | null;

export type HelpersRefsContextType = {
  addRef: (key: string, ref: RefType) => void;
  getRefElement: (key: string) => RefType;
  getRefValue: (key: string) => string | boolean | undefined;
};

interface HelpersRefsProviderProps {
  children: React.ReactNode;
}

export const HelpersRefsContext = createContext<HelpersRefsContextType>({
  addRef() {},
  getRefElement() {
    return null;
  },
  getRefValue() {
    return undefined;
  },
});

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
