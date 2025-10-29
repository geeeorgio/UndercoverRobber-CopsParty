import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Loader } from './components/layout';
import { useAppDispatch, useAppSelector } from './hooks/toolkit';
import RootNavigator from './navigation/RootNavigator';
import { selectIsAppReady } from './redux/slices/loader/selectors';
import { setAppReady } from './redux/slices/loader/slice';
import { persistor, store } from './redux/store';

const AppContent = () => {
  const dispatch = useAppDispatch();
  const isAppReady = useAppSelector(selectIsAppReady);
  const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  const handleReady = useCallback(() => {
    translateX.value = withDelay(1400, withTiming(-1000, { duration: 600 }));

    opacity.value = withDelay(
      1400,
      withTiming(0, { duration: 600 }, () => {
        runOnJS(() => dispatch(setAppReady()));
      }),
    );
  }, [dispatch, opacity, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <NavigationContainer onReady={handleReady}>
        <RootNavigator />
      </NavigationContainer>

      {!isAppReady && (
        <Animated.View
          style={[StyleSheet.absoluteFillObject, animatedStyle]}
          pointerEvents="none"
        >
          <Loader />
        </Animated.View>
      )}
    </View>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
