import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { Layout } from 'src/components/layout';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectIsOnboardingDone } from 'src/redux/slices/onboarding/selectors';
import type { RootStackParamsList } from 'src/types/navigation/root';

const Root = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const isOnboardingDone = useAppSelector(selectIsOnboardingDone);

  return (
    <Layout>
      <Root.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
          gestureEnabled: false,
          animation: 'fade',
        }}
      >
        {isOnboardingDone ? (
          <Root.Screen name={'MainStack'} component={MainNavigator} />
        ) : (
          <Root.Screen
            name={'OnboardingStack'}
            component={OnboardingNavigator}
          />
        )}
      </Root.Navigator>
    </Layout>
  );
};

export default RootNavigator;
