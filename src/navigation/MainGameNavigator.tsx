import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  DiscussionScreen,
  MainGameScreen,
  MainGameSetupScreen,
  ResultScreen,
} from 'src/screens';
import type { MainGameStackParamsList } from 'src/types/navigation/mainGame';

const MainGame = createNativeStackNavigator<MainGameStackParamsList>();

const MainGameNavigator = () => {
  return (
    <MainGame.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <MainGame.Screen
        name="MainGameSetupScreen"
        component={MainGameSetupScreen}
      />
      <MainGame.Screen name="MainGameScreen" component={MainGameScreen} />
      <MainGame.Screen name="DiscussionScreen" component={DiscussionScreen} />
      <MainGame.Screen name="ResultScreen" component={ResultScreen} />
    </MainGame.Navigator>
  );
};

export default MainGameNavigator;
