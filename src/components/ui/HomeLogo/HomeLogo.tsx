import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

import { MAIN_SCREEN_LOGO } from 'src/constants';

const HomeLogo = () => (
  <View style={styles.heroArea}>
    <Image
      source={MAIN_SCREEN_LOGO}
      style={styles.logoImg}
      resizeMode="contain"
    />
  </View>
);

export default HomeLogo;
