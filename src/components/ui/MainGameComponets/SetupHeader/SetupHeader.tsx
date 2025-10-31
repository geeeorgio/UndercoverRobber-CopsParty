import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  ArrowSvg,
  CustomButton,
  CustomContainer,
  CustomText,
  PlusSvg,
} from 'src/components/ui';
import { useAppDispatch } from 'src/hooks/toolkit';
import { setMainBackground } from 'src/redux/slices/background/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';
import { wp } from 'src/utils';

interface SetupHeaderProps {
  onAddPlayer?: () => void;
}

const SetupHeader = ({ onAddPlayer }: SetupHeaderProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleGoBack = () => {
    dispatch(setMainBackground());
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.header}>
      <CustomButton
        handlePress={handleGoBack}
        extraStyle={styles.backButtonWrapper}
      >
        <CustomContainer
          variant="yellow"
          extraStyle={styles.backButtonContainer}
        >
          <ArrowSvg width={wp(22)} height={wp(22)} />
          <CustomText extraStyle={styles.headerButtonText}>
            Add the Suspects
          </CustomText>
        </CustomContainer>
      </CustomButton>

      <CustomButton
        handlePress={onAddPlayer}
        extraStyle={styles.plusButtonWrapper}
      >
        <CustomContainer
          variant="green"
          extraStyle={styles.plusButtonContainer}
        >
          <PlusSvg width={wp(18)} height={wp(18)} />
        </CustomContainer>
      </CustomButton>
    </View>
  );
};

export default SetupHeader;
