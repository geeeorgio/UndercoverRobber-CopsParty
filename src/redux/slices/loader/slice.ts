import { createSlice } from '@reduxjs/toolkit';

interface LoaderState {
  isAppReady: boolean;
}

const initialState: LoaderState = {
  isAppReady: false,
};

const slice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setAppReady: (state) => {
      state.isAppReady = true;
    },
    resetAppReady: (state) => {
      state.isAppReady = false;
    },
  },
});

export const { setAppReady, resetAppReady } = slice.actions;

export const loaderReducer = slice.reducer;
