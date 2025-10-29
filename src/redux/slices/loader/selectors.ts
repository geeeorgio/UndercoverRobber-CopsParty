import type { RootState } from 'src/redux/store';

export const selectIsAppReady = (state: RootState) => state.loader.isAppReady;
