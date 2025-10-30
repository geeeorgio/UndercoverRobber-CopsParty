import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface DrawingPoint {
  x: number;
  y: number;
}

export interface DrawingPath {
  path: DrawingPoint[];
  color: string;
  strokeWidth: number;
}

interface DrawGameState {
  suspectCharacterId: string | null;
  suspectDescription: { trait: string; personality: string } | null;
  drawingPaths: DrawingPath[];
  isStarted: boolean;
  isCompleted: boolean;
}

const initialState: DrawGameState = {
  suspectCharacterId: null,
  suspectDescription: null,
  drawingPaths: [],
  isStarted: false,
  isCompleted: false,
};

const slice = createSlice({
  name: 'drawGame',
  initialState,
  reducers: {
    startDrawGame: (
      state,
      action: PayloadAction<{
        suspectId: string;
        description: { trait: string; personality: string };
      }>,
    ) => {
      state.suspectCharacterId = action.payload.suspectId;
      state.suspectDescription = action.payload.description;
      state.isStarted = true;
      state.isCompleted = false;
      state.drawingPaths = [];
    },
    addDrawingPath: (state, action: PayloadAction<DrawingPath>) => {
      state.drawingPaths.push(action.payload);
    },
    completeDrawing: (state) => {
      state.isCompleted = true;
    },
    undoLastPath: (state) => {
      if (state.drawingPaths.length > 0) {
        state.drawingPaths.pop();
      }
    },
    resetDrawGameState: () => initialState,
  },
});

export const {
  startDrawGame,
  addDrawingPath,
  completeDrawing,
  resetDrawGameState,
  undoLastPath,
} = slice.actions;

export const drawGameReducer = slice.reducer;
