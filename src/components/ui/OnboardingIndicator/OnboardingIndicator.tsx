import { View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

interface OnboardingIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const OnboardingIndicator = ({
  totalSteps,
  currentStep,
}: OnboardingIndicatorProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <CustomContainer
          key={index}
          variant="yellow"
          extraStyle={[
            styles.bar,
            index + 1 <= currentStep && styles.activeBar,
          ]}
        />
      ))}
    </View>
  );
};

export default OnboardingIndicator;
