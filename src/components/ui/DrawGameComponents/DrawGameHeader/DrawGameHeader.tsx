import React from 'react';
import { View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import PauseSvg from '../../CustomIcons/PauseSvg';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectIsPaused } from 'src/redux/slices/gameplay/selectors';
import { pauseGame, resumeGame } from 'src/redux/slices/gameplay/slice';
import { wp, hp } from 'src/utils';

const DrawGameHeader = () => {
  const dispatch = useAppDispatch();
  const isPaused = useAppSelector(selectIsPaused);

  const handleTogglePause = () => {
    if (isPaused) {
      dispatch(resumeGame());
    } else {
      dispatch(pauseGame());
    }
  };

  return (
    <View style={styles.header}>
      <CustomContainer variant="yellow" extraStyle={styles.titleContainer}>
        <CustomText extraStyle={styles.titleText}>Draw the Suspect</CustomText>
      </CustomContainer>

      <CustomContainer variant="green" extraStyle={styles.pauseContainer}>
        <CustomButton handlePress={handleTogglePause}>
          <PauseSvg width={wp(16)} height={hp(16)} />
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default DrawGameHeader;
