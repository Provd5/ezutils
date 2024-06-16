import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const wordMatchKeys = ["case", "sentence", "regex"] as const;

interface SettingsState {
  includeEmptyLines: boolean;
  wordMatch: {
    case: boolean;
    sentence: boolean;
    regex: boolean;
  };
}

const initialState: SettingsState = {
  includeEmptyLines: false,
  wordMatch: {
    case: false,
    sentence: false,
    regex: false,
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleIncludeEmpty: (state, action: PayloadAction<boolean>) => {
      state.includeEmptyLines = action.payload;
      return state;
    },
    toggleWordMatchCase: (state, action: PayloadAction<boolean>) => {
      state.wordMatch.case = action.payload;
      return state;
    },
    toggleWordMatchSentence: (state, action: PayloadAction<boolean>) => {
      state.wordMatch.sentence = action.payload;
      return state;
    },
    toggleWordMatchRegex: (state, action: PayloadAction<boolean>) => {
      state.wordMatch.regex = action.payload;
      return state;
    },
  },
});

export const {
  toggleIncludeEmpty,
  toggleWordMatchCase,
  toggleWordMatchSentence,
  toggleWordMatchRegex,
} = settingsSlice.actions;

export default settingsSlice.reducer;
