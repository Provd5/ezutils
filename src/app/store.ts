import { configureStore } from "@reduxjs/toolkit";

import inputReducer from "~/features/inputSlice";
import outputReducer from "~/features/outputSlice";

export const store = configureStore({
  reducer: {
    input: inputReducer,
    output: outputReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
