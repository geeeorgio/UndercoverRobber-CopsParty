import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomScreenWrapper,
  GameHeader,
  GameRoleCard,
  CustomButton,
  CustomText,
  CustomContainer,
} from 'src/components/ui';
import { ITEMS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { setMainBackground } from 'src/redux/slices/background/slice';
import { resetState } from 'src/redux/slices/gameplay/slice';
import { selectPlayers } from 'src/redux/slices/players/selectors';
import { resetPlayersState } from 'src/redux/slices/players/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';

const ResultScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();
  const players = useAppSelector(selectPlayers);

  const robber = players.find((p) => p.role === 'robber');
  const robberName = robber?.name || 'Mystery';
  const robberCharacter = robber?.characterId
    ? ITEMS[robber.characterId]
    : ITEMS.Sketch;

  const handleHome = () => {
    dispatch(setMainBackground());
    dispatch(resetState());
    dispatch(resetPlayersState());

    navigation.replace('HomeScreen');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomScreenWrapper extraStyle={styles.container}>
        <GameHeader playerName="🕵 Case Closed!" isFinal={true} />

        <View style={styles.cardWrapper}>
          <GameRoleCard>
            <View style={styles.content}>
              <CustomText extraStyle={styles.title}>
                🔥 The Robber is:
              </CustomText>

              <Image
                source={robberCharacter}
                style={styles.characterImage}
                resizeMode="contain"
              />

              <CustomContainer
                variant="yellow"
                extraStyle={styles.nameContainer}
              >
                <CustomText extraStyle={styles.nameText}>
                  {robberName}
                </CustomText>
              </CustomContainer>
            </View>
          </GameRoleCard>
        </View>

        <CustomButton
          handlePress={handleHome}
          extraStyle={styles.buttonWrapper}
        >
          <CustomContainer variant="green" extraStyle={styles.homeButton}>
            <CustomText extraStyle={styles.homeButtonText}>Home</CustomText>
          </CustomContainer>
        </CustomButton>
      </CustomScreenWrapper>
    </SafeAreaView>
  );
};

export default ResultScreen;
