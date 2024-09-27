import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type ColorTypes } from "~/types/colors";

export type ColorAlpha = "hide" | "afterComma" | "afterSlash";
export type ColorFormat = "onlyNumbers" | "withCommas" | "full";

export interface ColorsConverterState {
  colorInput: {
    value: string;
    from: keyof ColorTypes;
  };
  colorsOutput: Record<keyof ColorTypes, string | undefined>;
  showHashtag: boolean;
  showCommas: boolean;
  showFormat: boolean;
  showUnits: boolean;
  alpha: ColorAlpha;
}

const initialState: ColorsConverterState = {
  colorInput: {
    value: "",
    from: "HEX",
  },
  colorsOutput: {
    HEX: undefined,
    HSL: undefined,
    RGB: undefined,
  },
  showHashtag: false,
  showCommas: true,
  showFormat: true,
  showUnits: true,
  alpha: "hide",
};

const colorsConverterSlice = createSlice({
  name: "colorsConverter",
  initialState,
  reducers: {
    setColorInput: (
      state,
      action: PayloadAction<ColorsConverterState["colorInput"]>,
    ) => {
      state.colorInput = action.payload;
      return state;
    },
    setColorsOutput: (
      state,
      action: PayloadAction<ColorsConverterState["colorsOutput"]>,
    ) => {
      state.colorsOutput = action.payload;
      return state;
    },
    toggleShowHashtag: (state, action: PayloadAction<boolean>) => {
      state.showHashtag = action.payload;
      return state;
    },
    toggleCommas: (state, action: PayloadAction<boolean>) => {
      state.showCommas = action.payload;
      return state;
    },
    toggleFormat: (state, action: PayloadAction<boolean>) => {
      state.showFormat = action.payload;
      return state;
    },
    toggleUnits: (state, action: PayloadAction<boolean>) => {
      state.showUnits = action.payload;
      return state;
    },
    toggleAlpha: (
      state,
      action: PayloadAction<ColorsConverterState["alpha"]>,
    ) => {
      state.alpha = action.payload;
      return state;
    },
  },
});

export const {
  setColorInput,
  setColorsOutput,
  toggleShowHashtag,
  toggleCommas,
  toggleFormat,
  toggleUnits,
  toggleAlpha,
} = colorsConverterSlice.actions;

export default colorsConverterSlice.reducer;
