import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomScreenWrapper,
  GameHeader,
  GameRoleCard,
  CardContent,
  CustomButton,
  CustomText,
  CustomContainer,
  PauseModal,
} from 'src/components/ui';
import { ITEMS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectCurrentPlayerIndex,
  selectIsPaused,
} from 'src/redux/slices/gameplay/selectors';
import { nextPlayer } from 'src/redux/slices/gameplay/slice';
import {
  selectGameKeyword,
  selectGameLocation,
  selectPlayers,
} from 'src/redux/slices/players/selectors';
import type { MainGameStackNavigationProp } from 'src/types/navigation/mainGame';

const MainGameScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainGameStackNavigationProp>();

  const players = useAppSelector(selectPlayers);
  const currentPlayerIndex = useAppSelector(selectCurrentPlayerIndex);
  const location = useAppSelector(selectGameLocation);
  const keyword = useAppSelector(selectGameKeyword);
  const isPaused = useAppSelector(selectIsPaused);

  const [isRoleVisible, setIsRoleVisible] = useState(false);

  const currentPlayer = players[currentPlayerIndex];
  const isRevealComplete = currentPlayerIndex >= players.length;

  useEffect(() => {
    if (isRevealComplete) {
      navigation.replace('DiscussionScreen');
    }
  }, [isRevealComplete, navigation]);

  const handleNextPress = () => {
    if (!isRoleVisible) {
      setIsRoleVisible(true);
      return;
    }

    setIsRoleVisible(false);
    dispatch(nextPlayer());
  };

  if (isRevealComplete) {
    return null;
  }

  const isCop = currentPlayer.role === 'cop';
  const roleTitle = isCop ? "You're a Cop" : "You're the Robber";
  const roleDescription = isCop
    ? 'Protect the secret. Expose the Robber'
    : 'Blend in. Avoid detection';

  const characterSource = currentPlayer.characterId
    ? ITEMS[currentPlayer.characterId]
    : ITEMS.Sketch;

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <CustomScreenWrapper extraStyle={styles.container}>
          <GameHeader playerName={currentPlayer.name} />

          <View style={styles.cardWrapper}>
            <GameRoleCard>
              <TouchableOpacity
                onPress={handleNextPress}
                style={styles.tapArea}
                activeOpacity={0.7}
                disabled={isRoleVisible}
              >
                <CardContent
                  isRoleVisible={isRoleVisible}
                  roleTitle={roleTitle}
                  characterSource={characterSource}
                  roleDescription={roleDescription}
                  isCop={isCop}
                  location={location}
                  keyword={keyword}
                />
              </TouchableOpacity>
            </GameRoleCard>

            {isRoleVisible && (
              <CustomButton
                handlePress={handleNextPress}
                extraStyle={styles.nextButtonContainer}
              >
                <CustomContainer variant="green" extraStyle={styles.nextButton}>
                  <CustomText extraStyle={styles.nextButtonText}>
                    Next
                  </CustomText>
                </CustomContainer>
              </CustomButton>
            )}
          </View>
        </CustomScreenWrapper>
      </SafeAreaView>
      {isPaused && <PauseModal />}
    </>
  );
};

export default MainGameScreen;
