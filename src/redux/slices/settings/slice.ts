import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEnabled: true,
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setNotificationIsOn: (state) => {
      state.isEnabled = true;
    },
    setNotificationIsOff: (state) => {
      state.isEnabled = false;
    },
  },
});

export const { setNotificationIsOn, setNotificationIsOff } = slice.actions;

export const settingsReducer = slice.reducer;
