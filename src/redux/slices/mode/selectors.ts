import type { RootState } from '../../store';

export const selectIsSafeArea = (state: RootState) => state.mode.isSafeArea;
