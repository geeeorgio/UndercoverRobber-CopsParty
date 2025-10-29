import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import RulesSvg from '../CustomIcons/RulesSvg';
import SettingsSvg from '../CustomIcons/SettingsSvg';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { useAppDispatch } from 'src/hooks/toolkit';
import { setGameBackground } from 'src/redux/slices/background/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';
import { hp, wp } from 'src/utils';

const HomeMenu = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const dispatch = useAppDispatch();

  const handleStartMainGame = () => {
    dispatch(setGameBackground());
    navigation.navigate('MainGameStack', { screen: 'MainGameSetupScreen' });
  };

  const handleStartDrawGame = () => {
    dispatch(setGameBackground());
    navigation.navigate('DrawGameStack', {
      screen: 'DrawGameSetupScreen',
    });
  };

  const handleRulesPress = () => {
    navigation.navigate('RulesScreen');
  };

  const handleSettingsPress = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View style={styles.menuButtons}>
      <View style={styles.gamesWrapper}>
        <CustomButton
          extraStyle={styles.containers}
          handlePress={handleStartMainGame}
        >
          <CustomContainer variant="green" extraStyle={styles.menuBtn}>
            <CustomText extraStyle={styles.buttonText}>
              Start the Mission
            </CustomText>
          </CustomContainer>
        </CustomButton>

        <CustomButton
          extraStyle={styles.containers}
          handlePress={handleStartDrawGame}
        >
          <CustomContainer variant="green" extraStyle={styles.menuBtn}>
            <CustomText extraStyle={styles.buttonText}>
              Draw the Suspect
            </CustomText>
          </CustomContainer>
        </CustomButton>
      </View>

      <View style={styles.bottomBtns}>
        <CustomButton
          extraStyle={styles.bottomContainer}
          handlePress={handleRulesPress}
        >
          <CustomContainer variant="yellow" extraStyle={styles.bottomBtn}>
            <RulesSvg width={wp(22)} height={hp(22)} />
            <CustomText extraStyle={styles.bottomButtonText}>Rules</CustomText>
          </CustomContainer>
        </CustomButton>

        <CustomButton
          extraStyle={styles.bottomContainer}
          handlePress={handleSettingsPress}
        >
          <CustomContainer variant="yellow" extraStyle={styles.bottomBtn}>
            <SettingsSvg width={wp(22)} height={hp(22)} />
            <CustomText extraStyle={styles.bottomButtonText}>
              Settings
            </CustomText>
          </CustomContainer>
        </CustomButton>
      </View>
    </View>
  );
};

export default HomeMenu;
