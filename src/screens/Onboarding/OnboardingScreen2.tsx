import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomText,
  OnboardingIndicator,
} from 'src/components/ui';
import { ITEMS } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import { setSafeArea } from 'src/redux/slices/mode/slice';
import { completeOnboarding } from 'src/redux/slices/onboarding/slice';

const OnboardingScreen2 = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    dispatch(setSafeArea(false));
  }, [dispatch]);

  const handleNext = () => {
    dispatch(completeOnboarding());
  };

  return (
    <View style={[styles.main, { paddingTop: insets.top }]}>
      <View style={styles.logoWrapper}>
        <Image
          source={ITEMS.Onboarding3}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      <View style={[styles.content, { paddingBottom: insets.bottom }]}>
        <View style={styles.textContainer}>
          <CustomText extraStyle={styles.title}>Draw to Reveal</CustomText>

          <CustomText extraStyle={styles.description}>
            After the round, use your detective instinct. Sketch the suspect and
            compare with the lineup
          </CustomText>
        </View>

        <View style={styles.indicatorWrapper}>
          <OnboardingIndicator totalSteps={3} currentStep={3} />
        </View>

        <CustomButton extraStyle={styles.btn} handlePress={handleNext}>
          <CustomContainer variant="green" extraStyle={styles.btnContainer}>
            <CustomText extraStyle={styles.btnText}>
              Start the Mission
            </CustomText>
          </CustomContainer>
        </CustomButton>
      </View>
    </View>
  );
};

export default OnboardingScreen2;
