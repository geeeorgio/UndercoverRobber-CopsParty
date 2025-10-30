import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { ITEMS } from 'src/constants';

interface GameRoleCardProps {
  children: React.ReactNode;
}

const GameRoleCard = ({ children }: GameRoleCardProps) => {
  return (
    <View style={styles.cardWrapper}>
      <ImageBackground
        source={ITEMS.Card}
        resizeMode="contain"
        style={styles.cardInner}
      >
        <View style={styles.contentWrapper}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default GameRoleCard;
