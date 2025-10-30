import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawGameNavigator from './DrawGameNavigator';
import MainGameNavigator from './MainGameNavigator';

import { HomeScreen, RulesScreen, SettingsScreen } from 'src/screens';
import type { MainStackParamsList } from 'src/types/navigation/main';

const Main = createNativeStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <Main.Screen name={'HomeScreen'} component={HomeScreen} />
      <Main.Screen name={'MainGameStack'} component={MainGameNavigator} />
      <Main.Screen name={'DrawGameStack'} component={DrawGameNavigator} />
      <Main.Screen
        name={'RulesScreen'}
        component={RulesScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'slide_from_bottom',
        }}
      />
      <Main.Screen
        name={'SettingsScreen'}
        component={SettingsScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'slide_from_right',
        }}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
