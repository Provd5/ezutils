import { configureStore } from "@reduxjs/toolkit";

import inputReducer from "~/features/input-slice";
import affixesReducer from "~/features/lines/affixes-slice";
import lineBreaksReducer from "~/features/lines/line-breaks-slice";
import outputReducer from "~/features/output-slice";
import settingsReducer from "~/features/settings-slice";
import findInTextReducer from "~/features/texts/find-in-text-slice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    output: outputReducer,
    settings: settingsReducer,
    lineBreaksHelper: lineBreaksReducer,
    affixesHelper: affixesReducer,
    findInTextHelper: findInTextReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
