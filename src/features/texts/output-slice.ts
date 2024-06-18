import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const outputSlice = createSlice({
  name: "output",
  initialState: "",
  reducers: {
    newOutput: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { newOutput } = outputSlice.actions;

export default outputSlice.reducer;
