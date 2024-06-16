import { configureStore } from "@reduxjs/toolkit";

import colorsConverterReducer from "~/features/colors/colors-converter-slice";
import settingsReducer from "~/features/settings-slice";
import inputReducer from "~/features/texts/input-slice";
import outputReducer from "~/features/texts/output-slice";
import affixesReducer from "~/features/texts/paragraphs/affixes-slice";
import lineBreaksReducer from "~/features/texts/paragraphs/line-breaks-slice";
import findInTextReducer from "~/features/texts/sentences/find-in-text-slice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    output: outputReducer,
    settings: settingsReducer,
    lineBreaksHelper: lineBreaksReducer,
    affixesHelper: affixesReducer,
    findInTextHelper: findInTextReducer,
    colorsConverter: colorsConverterReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
