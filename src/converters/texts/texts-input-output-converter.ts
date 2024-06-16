import { type TextsToolKeys } from "~/types/texts";

import { type AppDispatch } from "~/app/store";
import { newOutput } from "~/features/texts/output-slice";

import textsConverter from ".";

/**
 * @param dispatch from useDispatch()
 * @param tool from textsTool param
 * @param input value to convert
 */
export const textsInputOutputConverter = (
  dispatch: AppDispatch,
  tool: TextsToolKeys,
  input: string,
): void => {
  const newValue = textsConverter(tool, input);
  dispatch(newOutput(newValue));
};
