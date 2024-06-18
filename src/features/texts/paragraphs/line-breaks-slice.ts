import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type WhereToBreak = "after" | "before" | "instead";

export interface LineBreaksState {
  needle: string;
  where: WhereToBreak;
}

const initialState: LineBreaksState = {
  needle: ", ",
  where: "after",
};

const lineBreaksSlice = createSlice({
  name: "lineBreaksHelper",
  initialState,
  reducers: {
    newNeedle: (state, action: PayloadAction<string>) => {
      state.needle = action.payload;
      return state;
    },
    newWhere: (state, action: PayloadAction<WhereToBreak>) => {
      state.where = action.payload;
      return state;
    },
  },
});

export const { newNeedle, newWhere } = lineBreaksSlice.actions;

export default lineBreaksSlice.reducer;
