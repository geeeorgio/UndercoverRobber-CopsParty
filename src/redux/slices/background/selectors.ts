import type { RootState } from 'src/redux/store';

export const selectCurrentBackground = (state: RootState) =>
  state.background.currentBackground;
