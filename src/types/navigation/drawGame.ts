import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type DrawGameStackParamsList = {
  DrawGameSetupScreen: undefined;
  DrawGameScreen: undefined;
};

export type DrawGameNavigationProp =
  NativeStackNavigationProp<DrawGameStackParamsList>;
