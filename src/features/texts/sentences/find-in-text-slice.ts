import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FindInTextState {
  toReplace: string;
  replaceWith: string;
}

const initialState: FindInTextState = {
  toReplace: "",
  replaceWith: "",
};

const findInTextSlice = createSlice({
  name: "findInTextHelper",
  initialState,
  reducers: {
    newToReplace: (state, action: PayloadAction<string>) => {
      state.toReplace = action.payload;
      return state;
    },
    newReplaceWith: (state, action: PayloadAction<string>) => {
      state.replaceWith = action.payload;
      return state;
    },
  },
});

export const { newToReplace, newReplaceWith } = findInTextSlice.actions;

export default findInTextSlice.reducer;
