import type { RootState } from 'src/redux/store';

export const selectPlayers = (state: RootState) => state.players.list;
export const selectPlayerCount = (state: RootState) =>
  state.players.list.length;
export const selectGameLocation = (state: RootState) => state.players.location;
export const selectGameKeyword = (state: RootState) => state.players.keyword;
