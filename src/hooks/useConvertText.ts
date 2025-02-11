import { useContext } from "react";
import { useDispatch } from "react-redux";

import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch } from "~/app/store";
import { HelpersRefsContext } from "~/context/helpers-refs-context";
import textsConverter from "~/converters/texts";
import { newOutput } from "~/features/texts/output-slice";

export const useConvertText = () => {
  const { getRefValue } = useContext(HelpersRefsContext);
  const dispatch = useDispatch<AppDispatch>();

  /**
   * @param tool from textsTool param
   * @param input value to convert
   */
  const convertTextOutput = (tool: TextsToolKeys, input: string) => {
    const newValue = textsConverter(tool, input, getRefValue);
    dispatch(newOutput(newValue));
  };

  return { convertTextOutput };
};
