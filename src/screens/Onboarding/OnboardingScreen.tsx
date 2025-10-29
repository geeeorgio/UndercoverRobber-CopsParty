import { useNavigation } from '@react-navigation/native';
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
import type { OnboardingStackNavigationProp } from 'src/types/navigation/onboarding';

const OnboardingScreen = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  useEffect(() => {
    dispatch(setSafeArea(false));
  }, [dispatch]);

  const handleNavigate = () => {
    navigation.navigate('OnboardingScreen1');
  };

  return (
    <View style={[styles.main, { paddingTop: insets.top }]}>
      <View style={styles.logoWrapper}>
        <Image
          source={ITEMS.Onboarding1}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      <View style={[styles.content, { paddingBottom: insets.bottom }]}>
        <View style={styles.textContainer}>
          <CustomText extraStyle={styles.title}>
            Welcome to the Squad
          </CustomText>

          <CustomText extraStyle={styles.description}>
            You’re part of an elite party of Cops and one sly Robber. Can you
            spot the intruder before it’s too late?
          </CustomText>
        </View>

        <View style={styles.indicatorWrapper}>
          <OnboardingIndicator totalSteps={3} currentStep={1} />
        </View>

        <CustomButton extraStyle={styles.btn} handlePress={handleNavigate}>
          <CustomContainer variant="green" extraStyle={styles.btnContainer}>
            <CustomText extraStyle={styles.btnText}>Next</CustomText>
          </CustomContainer>
        </CustomButton>
      </View>
    </View>
  );
};

export default OnboardingScreen;
