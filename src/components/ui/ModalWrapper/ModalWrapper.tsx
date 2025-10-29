import { BlurView } from '@react-native-community/blur';
import type { ReactNode } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

interface ModalWrapperProps {
  children: ReactNode;
}

const ModalWrapper = ({ children }: ModalWrapperProps) => {
  return (
    <SafeAreaView edges={[]} style={styles.absolute}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="dark"
        blurAmount={8}
      />
      <View style={styles.contentWrapper}>
        <CustomContainer variant="yellow" extraStyle={styles.modalContent}>
          {children}
        </CustomContainer>
      </View>
    </SafeAreaView>
  );
};
export default ModalWrapper;
