import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BACKGROUND, SECONDARY_BACKGROUND } from 'src/constants';

interface BackgroundState {
  currentBackground: ImageSourcePropType;
}

const initialState: BackgroundState = {
  currentBackground: MAIN_BACKGROUND,
};

const slice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setBackground: (state, action: PayloadAction<ImageSourcePropType>) => {
      state.currentBackground = action.payload;
    },
    resetBackground: (state) => {
      state.currentBackground = MAIN_BACKGROUND;
    },
    setGameBackground: (state) => {
      state.currentBackground = SECONDARY_BACKGROUND;
    },
  },
});

export const { setBackground, resetBackground, setGameBackground } =
  slice.actions;

export const backgroundReducer = slice.reducer;
