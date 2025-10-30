import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainGameStackParamsList = {
  MainGameSetupScreen: undefined;
  MainGameScreen: undefined;
  DiscussionScreen: undefined;
  ResultScreen: undefined;
};

export type MainGameStackNavigationProp = NativeStackNavigationProp<
  MainGameStackParamsList,
  'MainGameSetupScreen'
>;
