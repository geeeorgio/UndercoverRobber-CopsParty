import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MainStackParamsList } from './main';
import type { OnboardingStackParamsList } from './onboarding';

export type RootStackParamsList = {
  OnboardingStack: NavigatorScreenParams<OnboardingStackParamsList>;
  MainStack: NavigatorScreenParams<MainStackParamsList>;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamsList>;
