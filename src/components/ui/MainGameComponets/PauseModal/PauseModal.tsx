import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  ModalWrapper,
  CustomText,
  CustomButton,
  CustomContainer,
} from 'src/components/ui';
import { useAppDispatch } from 'src/hooks/toolkit';
import { setMainBackground } from 'src/redux/slices/background/slice';
import { resumeGame, resetState } from 'src/redux/slices/gameplay/slice';
import { resetPlayersState } from 'src/redux/slices/players/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';

interface PauseModalProps {
  onResume?: () => void;
  onExit?: () => void;
}

const PauseModal = ({ onResume, onExit }: PauseModalProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleResume = () => {
    dispatch(resumeGame());
  };

  const handleExit = () => {
    dispatch(setMainBackground());
    dispatch(resetState());
    dispatch(resetPlayersState());

    navigation.navigate('HomeScreen');
  };

  return (
    <ModalWrapper>
      <View style={styles.content}>
        <CustomText extraStyle={styles.title}>Pause the Mission?</CustomText>
        <CustomText extraStyle={styles.description}>
          The investigation is on hold. Your progress is auto-saved
        </CustomText>

        <View style={styles.buttonGroup}>
          <CustomButton
            handlePress={onExit || handleExit}
            extraStyle={styles.exitButton}
          >
            <CustomText extraStyle={styles.exitText}>Exit</CustomText>
          </CustomButton>

          <CustomButton
            handlePress={onResume || handleResume}
            extraStyle={styles.resumeButton}
          >
            <CustomContainer
              variant="green"
              extraStyle={styles.resumeBtnContainer}
            >
              <CustomText extraStyle={styles.resumeText}>Resume</CustomText>
            </CustomContainer>
          </CustomButton>
        </View>
      </View>
    </ModalWrapper>
  );
};

export default PauseModal;
