import { createSlice } from '@reduxjs/toolkit';

interface GameplayState {
  isGameMode: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  isOver: boolean;
}

const initialState: GameplayState = {
  isGameMode: false,
  isPlaying: false,
  isPaused: false,
  isOver: false,
};

const slice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    exitGame: (state) => {
      state.isGameMode = false;
      state.isPlaying = false;
      state.isPaused = false;
      state.isOver = false;
    },
    startGame: (state) => {
      state.isGameMode = true;
      state.isPlaying = true;
      state.isOver = false;
      state.isPaused = false;
    },
    pauseGame: (state) => {
      state.isPlaying = false;
      state.isPaused = true;
    },
    resumeGame: (state) => {
      state.isPlaying = true;
      state.isPaused = false;
    },
    gameOver: (state) => {
      if (state.isOver) {
        return;
      }
      state.isPlaying = false;
      state.isOver = true;
      state.isPaused = false;
    },
    restartGame: (state) => {
      state.isGameMode = true;
      state.isPlaying = true;
      state.isPaused = false;
      state.isOver = false;
    },
  },
});

export const {
  restartGame,
  resumeGame,
  gameOver,
  exitGame,
  pauseGame,
  startGame,
} = slice.actions;

export const gameplayReducer = slice.reducer;
