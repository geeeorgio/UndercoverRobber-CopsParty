import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { DrawGameStackParamsList } from './drawGame';
import type { MainGameStackParamsList } from './mainGame';

export type MainStackParamsList = {
  HomeScreen: undefined;
  MainGameStack: NavigatorScreenParams<MainGameStackParamsList>;
  DrawGameStack: NavigatorScreenParams<DrawGameStackParamsList>;
  SettingsScreen: undefined;
  RulesScreen: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamsList>;
