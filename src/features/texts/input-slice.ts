import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    newInput: (state, action: PayloadAction<string>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { newInput } = inputSlice.actions;

export default inputSlice.reducer;
