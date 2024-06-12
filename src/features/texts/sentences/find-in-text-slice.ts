import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FindInTextState {
  toBeReplaced: string;
  replaceWith: string;
}

const initialState: FindInTextState = {
  toBeReplaced: "",
  replaceWith: "",
};

export const findInTextSlice = createSlice({
  name: "findInTextHelper",
  initialState,
  reducers: {
    newToBeReplaced: (state, action: PayloadAction<string>) => {
      state.toBeReplaced = action.payload;
      return state;
    },
    newReplaceWith: (state, action: PayloadAction<string>) => {
      state.replaceWith = action.payload;
      return state;
    },
  },
});

export const { newToBeReplaced, newReplaceWith } = findInTextSlice.actions;

export default findInTextSlice.reducer;
