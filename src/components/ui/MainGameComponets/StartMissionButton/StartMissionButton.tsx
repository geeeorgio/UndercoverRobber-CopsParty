import React from 'react';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components/ui';

interface StartMissionButtonProps {
  onPress: () => void;
}

const StartMissionButton = ({ onPress }: StartMissionButtonProps) => {
  return (
    <CustomButton
      handlePress={onPress}
      fullWidth={true}
      extraStyle={styles.startButtonWrapper}
    >
      <CustomContainer variant="green" extraStyle={styles.startButton}>
        <CustomText extraStyle={styles.startButtonText}>
          Start the Mission
        </CustomText>
      </CustomContainer>
    </CustomButton>
  );
};

export default StartMissionButton;
