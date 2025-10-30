import React from 'react';
import { View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import PauseSvg from '../../CustomIcons/PauseSvg';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { useAppDispatch } from 'src/hooks/toolkit';
import { pauseGame } from 'src/redux/slices/gameplay/slice';
import { hp, wp } from 'src/utils';

interface GameHeaderProps {
  playerName: string;
  isFinal?: boolean;
}

const GameHeader = ({ playerName, isFinal }: GameHeaderProps) => {
  const dispatch = useAppDispatch();

  const handlePause = () => {
    dispatch(pauseGame());
  };

  if (isFinal) {
    return (
      <CustomContainer variant="yellow" extraStyle={styles.finalHeader}>
        <CustomText extraStyle={styles.playerNameText}>{playerName}</CustomText>
      </CustomContainer>
    );
  }

  return (
    <View style={styles.header}>
      <CustomContainer variant="yellow" extraStyle={styles.nameContainer}>
        <CustomText extraStyle={styles.playerNameText}>{playerName}</CustomText>
      </CustomContainer>

      <CustomContainer variant="green" extraStyle={styles.pauseContainer}>
        <CustomButton handlePress={handlePause} extraStyle={styles.pauseButton}>
          <PauseSvg width={wp(18)} height={hp(18)} />
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default GameHeader;
