import type { RootState } from 'src/redux/store';

export const selectIsNotificationEnabled = (state: RootState) =>
  state.settings.isEnabled;
