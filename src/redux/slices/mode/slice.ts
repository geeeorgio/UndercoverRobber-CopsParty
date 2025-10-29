import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSafeArea: true,
};

const slice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setSafeArea: (state, action: PayloadAction<boolean>) => {
      state.isSafeArea = action.payload;
    },
  },
});

export const { setSafeArea } = slice.actions;
export const modeReducer = slice.reducer;
