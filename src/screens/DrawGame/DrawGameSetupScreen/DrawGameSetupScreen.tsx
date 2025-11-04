import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomScreenWrapper,
  StartMissionButton,
  CustomText,
  CustomButton,
  CustomContainer,
  ArrowSvg,
} from 'src/components/ui';
import { ITEMS } from 'src/constants';
import { useAppDispatch } from 'src/hooks/toolkit';
import {
  setGameBackground,
  setMainBackground,
} from 'src/redux/slices/background/slice';
import { startDrawGame } from 'src/redux/slices/drawing/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';
import { getRandomSuspect, hp, wp } from 'src/utils';

const DrawGameSetupScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleGoBack = () => {
    dispatch(setMainBackground());
    navigation.navigate('HomeScreen');
  };

  const handleStartDrawing = () => {
    const suspect = getRandomSuspect();
    dispatch(setGameBackground());

    dispatch(
      startDrawGame({
        suspectId: suspect.characterId,
        description: suspect.description,
      }),
    );

    navigation.navigate('DrawGameStack', { screen: 'DrawGameScreen' });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomScreenWrapper extraStyle={styles.container}>
        <View style={styles.header}>
          <CustomButton
            handlePress={handleGoBack}
            extraStyle={styles.backButtonWrapper}
          >
            <CustomContainer
              variant="yellow"
              extraStyle={styles.backButtonContainer}
            >
              <ArrowSvg width={wp(20)} height={hp(20)} />
              <CustomText extraStyle={styles.headerButtonText}>
                Draw the Suspect
              </CustomText>
            </CustomContainer>
          </CustomButton>
        </View>

        <View style={styles.centerContainer}>
          <View style={styles.imgWrapper}>
            <Image
              source={ITEMS.Onboarding2}
              resizeMode="contain"
              style={styles.copsImg}
            />
          </View>
          <CustomContainer variant="yellow" extraStyle={styles.textContainer}>
            <View style={styles.descriptionTextWrapper}>
              <CustomText extraStyle={styles.descriptionText}>
                The investigation continues — can your drawing help catch the
                Robber?
              </CustomText>
            </View>
          </CustomContainer>
        </View>

        <StartMissionButton
          onPress={handleStartDrawing}
          btnText="Draw the Suspect"
        />
      </CustomScreenWrapper>
    </SafeAreaView>
  );
};

export default DrawGameSetupScreen;
