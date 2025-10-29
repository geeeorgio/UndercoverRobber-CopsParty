import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainGameStackParamsList = {
  MainGameSetupScreen: undefined;
  MainGameScreen: undefined;
};

export type MainGameStackNavigationProp = NativeStackNavigationProp<
  MainGameStackParamsList,
  'MainGameSetupScreen'
>;
