import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomSwitch,
  CustomText,
  ModalWrapper,
  NotificationsSvg,
  ShareSvg,
  TermsSvg,
} from 'src/components/ui';
import type { MainStackNavigationProp } from 'src/types/navigation/main';
import { hp, wp } from 'src/utils';
import { handleShare } from 'src/utils/shareUtils';

const SettingsScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleTermsPress = () => {
    return null;
  };

  const handleSharePress = () => {
    handleShare();
  };

  return (
    <ModalWrapper>
      <CustomText extraStyle={styles.title}>Settings</CustomText>

      <View style={styles.settingsList}>
        <View style={styles.settingItemWrapper}>
          <NotificationsSvg
            width={wp(20)}
            height={hp(20)}
            style={styles.iconMargin}
          />
          <CustomText extraStyle={styles.settingText}>Notifications</CustomText>
          <View style={styles.spacer} />
          <CustomSwitch />
        </View>

        <CustomButton
          extraStyle={styles.settingItemWrapper}
          handlePress={handleSharePress}
        >
          <ShareSvg width={wp(20)} height={hp(20)} style={styles.iconMargin} />
          <CustomText extraStyle={styles.settingText}>Share the app</CustomText>
          <View style={styles.spacer} />
        </CustomButton>

        <CustomButton
          extraStyle={styles.settingItemWrapper}
          handlePress={handleTermsPress}
        >
          <TermsSvg width={wp(20)} height={hp(20)} style={styles.iconMargin} />
          <CustomText extraStyle={styles.settingText}>
            Terms and Conditions
          </CustomText>
          <View style={styles.spacer} />
        </CustomButton>
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton
          handlePress={() => {
            navigation.goBack();
          }}
          extraStyle={styles.btnContainer}
        >
          <CustomContainer variant="green" extraStyle={styles.btn}>
            <CustomText extraStyle={styles.btnText}>Ok</CustomText>
          </CustomContainer>
        </CustomButton>
      </View>
    </ModalWrapper>
  );
};

export default SettingsScreen;
