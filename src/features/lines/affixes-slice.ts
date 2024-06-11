import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AffixesState {
  splitter: string;
  prefix: string;
  suffix: string;
}

const initialState: AffixesState = {
  splitter: `. `,
  prefix: "- ",
  suffix: ".",
};

export const affixesSlice = createSlice({
  name: "affixesHelper",
  initialState,
  reducers: {
    newSplitter: (state, action: PayloadAction<string>) => {
      state.splitter = action.payload;
      return state;
    },
    newPrefix: (state, action: PayloadAction<string>) => {
      state.prefix = action.payload;
      return state;
    },
    newSuffix: (state, action: PayloadAction<string>) => {
      state.suffix = action.payload;
      return state;
    },
  },
});

export const { newSplitter, newPrefix, newSuffix } = affixesSlice.actions;

export default affixesSlice.reducer;
