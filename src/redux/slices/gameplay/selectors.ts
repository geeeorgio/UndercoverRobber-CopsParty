import type { RootState } from 'src/redux/store';

export const selectIsGameMode = (state: RootState) => state.gameplay.isGameMode;
export const selectIsPlaying = (state: RootState) => state.gameplay.isPlaying;
export const selectCurrentPlayerIndex = (state: RootState) =>
  state.gameplay.currentPlayerIndex;

export const selectCurrentRound = (state: RootState) =>
  state.gameplay.currentRound;

export const selectDiscussionTime = (state: RootState) =>
  state.gameplay.discussionTime;

export const selectIsDisscussionActive = (state: RootState) =>
  state.gameplay.isDiscussionActive;

export const selectRoundCheckpoint = (state: RootState) =>
  state.gameplay.roundCheckpoint;

export const selectIsPaused = (state: RootState) => state.gameplay.isPaused;
