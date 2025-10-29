import React, { useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

import { styles } from './styles';

import {
  DURATION,
  INITIAL_DELAY,
  LOADER,
  TRANSLATE_Y_MAX,
} from 'src/constants';

const Loader = () => {
  const dot1 = useSharedValue(0);
  const dot2 = useSharedValue(0);
  const dot3 = useSharedValue(0);

  useEffect(() => {
    dot1.value = withRepeat(withTiming(1, { duration: DURATION }), -1, true);
    dot2.value = withDelay(
      INITIAL_DELAY,
      withRepeat(withTiming(1, { duration: DURATION }), -1, true),
    );
    dot3.value = withDelay(
      INITIAL_DELAY * 2,
      withRepeat(withTiming(1, { duration: DURATION }), -1, true),
    );
  }, [dot1, dot2, dot3]);

  const dot1Style = useAnimatedStyle(() => ({
    opacity: 0.3 + dot1.value * 0.7,
    transform: [{ translateY: -dot1.value * TRANSLATE_Y_MAX }],
  }));

  const dot2Style = useAnimatedStyle(() => ({
    opacity: 0.3 + dot2.value * 0.7,
    transform: [{ translateY: -dot2.value * TRANSLATE_Y_MAX }],
  }));

  const dot3Style = useAnimatedStyle(() => ({
    opacity: 0.3 + dot3.value * 0.7,
    transform: [{ translateY: -dot3.value * TRANSLATE_Y_MAX }],
  }));

  return (
    <View style={styles.container}>
      <ImageBackground
        source={LOADER}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.dots}>
          <Animated.View style={[styles.dot, dot1Style]} />
          <Animated.View style={[styles.dot, dot2Style]} />
          <Animated.View style={[styles.dot, dot3Style]} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Loader;
