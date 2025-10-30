import type { ReactNode } from 'react';
import React from 'react';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components/ui';

interface StartMissionButtonProps {
  onPress: () => void;
  btnText?: ReactNode;
}

const StartMissionButton = ({ onPress, btnText }: StartMissionButtonProps) => {
  return (
    <CustomButton
      handlePress={onPress}
      fullWidth={true}
      extraStyle={styles.startButtonWrapper}
    >
      <CustomContainer variant="green" extraStyle={styles.startButton}>
        <CustomText extraStyle={styles.startButtonText}>
          {btnText || 'Start the Mission'}
        </CustomText>
      </CustomContainer>
    </CustomButton>
  );
};

export default StartMissionButton;
