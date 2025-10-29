import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

import { GradientMap } from 'src/constants';

interface CustomContainerProps {
  extraStyle?: StyleProp<ViewStyle>;
  variant: 'green' | 'yellow' | 'red' | 'brown';
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  children?: ReactNode;
}

const CustomContainer = ({
  extraStyle,
  variant,
  start = { x: 0.5, y: 1 },
  end = { x: 0.5, y: 0 },
  children,
}: CustomContainerProps) => {
  const colors = GradientMap[variant];

  return (
    <LinearGradient
      colors={colors}
      style={[styles.container, extraStyle]}
      start={start}
      end={end}
    >
      {children}
    </LinearGradient>
  );
};

export default CustomContainer;
