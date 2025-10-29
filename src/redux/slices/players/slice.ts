import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ITEMS } from 'src/constants';

export interface Player {
  id: string;
  name: string;
  gender: 'random' | 'male' | 'female';
  role?: 'cop' | 'robber';
  characterId?: keyof typeof ITEMS;
}

interface PlayersState {
  list: Player[];
  location: string | null;
  keyword: string | null;
  lastPlayerId: number;
}

const initialPlayerList: Player[] = [
  { id: '1', name: 'Player 1', gender: 'random' },
  { id: '2', name: 'Player 2', gender: 'male' },
  { id: '3', name: 'Player 3', gender: 'female' },
];

const initialState: PlayersState = {
  list: initialPlayerList,
  location: null,
  keyword: null,
  lastPlayerId: initialPlayerList.length,
};

const slice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state) => {
      const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      const newPlayerNumber = state.lastPlayerId + 1;

      state.list.push({
        id: uniqueId,
        name: `Player ${newPlayerNumber}`,
        gender: 'random',
      });
      state.lastPlayerId = newPlayerNumber;
    },
    updatePlayerName: (
      state,
      action: PayloadAction<{ id: string; name: string }>,
    ) => {
      const { id, name } = action.payload;
      const playerIndex = state.list.findIndex((p) => p.id === id); // Используем state.list
      if (playerIndex !== -1) {
        state.list[playerIndex].name = name;
      }
    },
    updatePlayerGender: (
      state,
      action: PayloadAction<{ id: string; gender: Player['gender'] }>,
    ) => {
      const { id, gender } = action.payload;
      const playerIndex = state.list.findIndex((p) => p.id === id);
      if (playerIndex !== -1) {
        state.list[playerIndex].gender = gender;
      }
    },
    resetPlayerSetup: (state) => {
      state.list = initialPlayerList;
      state.lastPlayerId = initialPlayerList.length;
      state.location = null;
      state.keyword = null;
    },
    removePlayer: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.list = state.list.filter((p) => p.id !== id);
    },
    startGameAction: (
      state,
      action: PayloadAction<{
        playersWithRoles: Player[];
        location: string;
        keyword: string;
      }>,
    ) => {
      state.list = action.payload.playersWithRoles;
      state.location = action.payload.location;
      state.keyword = action.payload.keyword;
    },
  },
});

export const {
  addPlayer,
  updatePlayerName,
  updatePlayerGender,
  resetPlayerSetup,
  removePlayer,
  startGameAction,
} = slice.actions;

export const playersReducer = slice.reducer;
