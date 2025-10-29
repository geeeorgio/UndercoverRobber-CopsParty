import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainGameScreen, MainGameSetupScreen } from 'src/screens';
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
        animation: 'fade',
      }}
    >
      <MainGame.Screen
        name="MainGameSetupScreen"
        component={MainGameSetupScreen}
      />
      <MainGame.Screen name="MainGameScreen" component={MainGameScreen} />
    </MainGame.Navigator>
  );
};

export default MainGameNavigator;
