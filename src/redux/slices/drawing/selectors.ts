import type { RootState } from 'src/redux/store';

export const selectDrawGameSuspectId = (state: RootState) =>
  state.drawGame.suspectCharacterId;
export const selectDrawGameDescription = (state: RootState) =>
  state.drawGame.suspectDescription;
export const selectDrawingPaths = (state: RootState) =>
  state.drawGame.drawingPaths;
export const selectIsDrawingCompleted = (state: RootState) =>
  state.drawGame.isCompleted;
