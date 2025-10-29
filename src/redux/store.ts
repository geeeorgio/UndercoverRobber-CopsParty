import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import { backgroundReducer } from './slices/background/slice';
import { gameplayReducer } from './slices/gameplay/slice';
import { loaderReducer } from './slices/loader/slice';
import { modeReducer } from './slices/mode/slice';
import { onboardingReducer } from './slices/onboarding/slice';
import { playersReducer } from './slices/players/slice';
import { settingsReducer } from './slices/settings/slice';

const persistOnboardingConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const persistedOnboardingReducer = persistReducer(
  persistOnboardingConfig,
  onboardingReducer,
);

const persistGameplayConfig = {
  key: 'gameplay',
  storage: AsyncStorage,
};

const persistGameplayReducer = persistReducer(
  persistGameplayConfig,
  gameplayReducer,
);

const persistSettingsConfig = {
  key: 'settings',
  storage: AsyncStorage,
};

const persistSettingsReducer = persistReducer(
  persistSettingsConfig,
  settingsReducer,
);

const persistPlayersConfig = {
  key: 'players',
  storage: AsyncStorage,
};

const persistPlayersReducer = persistReducer(
  persistPlayersConfig,
  playersReducer,
);

const store = configureStore({
  reducer: {
    onboarding: persistedOnboardingReducer,
    gameplay: persistGameplayReducer,
    settings: persistSettingsReducer,
    players: persistPlayersReducer,
    mode: modeReducer,
    loader: loaderReducer,
    background: backgroundReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
