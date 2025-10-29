import type { RootState } from 'src/redux/store';

export const selectIsOnboardingDone = (state: RootState) =>
  state.onboarding.isOnboardingCompleted;
