import type { RootState } from 'src/redux/store';

export const selectIsGameMode = (state: RootState) => state.gameplay.isGameMode;
export const selectIsPlaying = (state: RootState) => state.gameplay.isPlaying;
