import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ColorAlpha = "hide" | "afterComma" | "afterSlash";
export type ColorFormat = "onlyNumbers" | "withCommas" | "full";

interface ColorsConverterState {
  HSL: string;
  RGB: string;
  HWB: string;
  HEX: string;
  showHashtag: boolean;
  showCommas: boolean;
  showFormat: boolean;
  alpha: ColorAlpha;
}

const initialState: ColorsConverterState = {
  HEX: "000000",
  RGB: "rgb(0, 0, 0)",
  HSL: "hsl(0, 0%, 0%)",
  HWB: "hwb(0, 0%, 100%)",
  showHashtag: false,
  showCommas: true,
  showFormat: true,
  alpha: "hide",
};

export const colorsConverterSlice = createSlice({
  name: "colorsConverter",
  initialState,
  reducers: {
    setHsl: (state, action: PayloadAction<string>) => {
      state.HSL = action.payload;
      return state;
    },
    setRgb: (state, action: PayloadAction<string>) => {
      state.RGB = action.payload;
      return state;
    },
    setHwb: (state, action: PayloadAction<string>) => {
      state.HWB = action.payload;
      return state;
    },
    setHex: (state, action: PayloadAction<string>) => {
      state.HEX = action.payload;
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
  setHsl,
  setRgb,
  setHwb,
  setHex,
  toggleShowHashtag,
  toggleCommas,
  toggleFormat,
  toggleAlpha,
} = colorsConverterSlice.actions;

export default colorsConverterSlice.reducer;
