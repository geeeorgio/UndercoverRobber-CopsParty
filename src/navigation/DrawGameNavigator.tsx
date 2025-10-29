import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawGameScreen, DrawGameSetupScreen } from 'src/screens';

import type { DrawGameStackParamsList } from 'src/types/navigation/drawGame';

const DrawGame = createNativeStackNavigator<DrawGameStackParamsList>();

const DrawGameNavigator = () => {
  return (
    <DrawGame.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      <DrawGame.Screen
        name="DrawGameSetupScreen"
        component={DrawGameSetupScreen}
      />
      <DrawGame.Screen name="DrawGameScreen" component={DrawGameScreen} />
    </DrawGame.Navigator>
  );
};

export default DrawGameNavigator;
