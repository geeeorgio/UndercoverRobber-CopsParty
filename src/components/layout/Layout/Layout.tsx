import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { useAppSelector } from 'src/hooks/toolkit';
import { selectCurrentBackground } from 'src/redux/slices/background/selectors';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentBackground = useAppSelector(selectCurrentBackground);

  return (
    <ImageBackground
      source={currentBackground}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

export default Layout;
