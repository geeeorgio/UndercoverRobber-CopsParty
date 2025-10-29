import React, { useEffect, useRef, useMemo } from 'react';
import { View, Image, Animated, Easing } from 'react-native';

import { styles } from './styles';

import { CustomContainer, CustomText } from 'src/components/ui';
import { ITEMS } from 'src/constants';
import { wp } from 'src/utils';

interface LocationGeneratingOverlayProps {
  isVisible: boolean;
}

const LocationGeneratingOverlay = ({
  isVisible,
}: LocationGeneratingOverlayProps) => {
  const animValue = useRef(new Animated.Value(0)).current;

  const { RANGE, BASE } = useMemo(
    () => ({
      RANGE: wp(-10),
      BASE: wp(5),
    }),
    [],
  );

  useEffect(() => {
    if (isVisible) {
      animValue.setValue(0);
      Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: 1,
            duration: 400,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0,
            duration: 400,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      animValue.stopAnimation();
    }
  }, [isVisible, animValue]);

  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [BASE, BASE + RANGE],
  });

  if (!isVisible) {
    return null;
  }

  const animatedStyle = {
    ...styles.pinWrapper,
    transform: [{ translateY: translateY }],
  };

  return (
    <View style={styles.overlay}>
      <Animated.View style={animatedStyle}>
        <Image
          source={ITEMS.location}
          style={styles.pinImage}
          resizeMode="contain"
        />
      </Animated.View>

      <View style={styles.indicatorContainer}>
        <CustomContainer variant="yellow" extraStyle={styles.indicatorButton}>
          <CustomText extraStyle={styles.indicatorText}>
            Location generating...
          </CustomText>
        </CustomContainer>
      </View>
    </View>
  );
};

export default LocationGeneratingOverlay;
