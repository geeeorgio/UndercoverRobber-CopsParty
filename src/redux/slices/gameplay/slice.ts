import { createSlice } from '@reduxjs/toolkit';

interface GameplayState {
  isGameMode: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  isOver: boolean;
  currentPlayerIndex: number;
  currentRound: number;
  discussionTime: number;
  isDiscussionActive: boolean;
  roundCheckpoint: number;
}

const initialState: GameplayState = {
  isGameMode: false,
  isPlaying: false,
  isPaused: false,
  isOver: false,
  currentPlayerIndex: 0,
  currentRound: 1,
  discussionTime: 120,
  isDiscussionActive: false,
  roundCheckpoint: 5,
};

const slice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    resetState: () => initialState,
    startGame: (state) => {
      state.isGameMode = true;
      state.isPlaying = true;
      state.isOver = false;
      state.isPaused = false;
      state.currentPlayerIndex = 0;
      state.currentRound = 1;
      state.isDiscussionActive = false;
      state.discussionTime = 120;
    },
    nextPlayer: (state) => {
      state.currentPlayerIndex += 1;
    },
    resetPlayerIndex: (state) => {
      state.currentPlayerIndex = 0;
    },
    startDiscussion: (state) => {
      state.isDiscussionActive = true;
      state.discussionTime = 120;
    },
    tickDiscussion: (state) => {
      if (state.discussionTime > 0) {
        state.discussionTime -= 1;
      } else {
        state.isDiscussionActive = false;
      }
    },
    endDiscussion: (state) => {
      state.isDiscussionActive = false;
    },
    nextRound: (state) => {
      state.currentRound += 1;
      state.isDiscussionActive = false;
      state.discussionTime = 120;
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
      state.isPlaying = false;
      state.isOver = true;
      state.isPaused = false;
      state.isDiscussionActive = false;
    },
  },
});

export const {
  startGame,
  pauseGame,
  resumeGame,
  gameOver,
  nextPlayer,
  resetPlayerIndex,
  startDiscussion,
  tickDiscussion,
  endDiscussion,
  nextRound,
  resetState,
} = slice.actions;

export const gameplayReducer = slice.reducer;
