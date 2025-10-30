import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomScreenWrapper,
  LocationGeneratingOverlay,
  PlayerSetupInput,
  SetupHeader,
  StartMissionButton,
} from 'src/components/ui';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  setGameBackground,
  setMainBackground,
} from 'src/redux/slices/background/slice';
import { startGame } from 'src/redux/slices/gameplay/slice';
import { selectPlayers } from 'src/redux/slices/players/selectors';
import type { Player } from 'src/redux/slices/players/slice';
import {
  addPlayer,
  removePlayer,
  startGameAction,
  updatePlayerGender,
  updatePlayerName,
} from 'src/redux/slices/players/slice';
import type { MainGameStackNavigationProp } from 'src/types/navigation/mainGame';
import { getRandomKeyword, getRandomLocation } from 'src/utils';
import { assignCharacter } from 'src/utils/assignCharacter';

const MainGameSetupScreen = () => {
  const dispatch = useAppDispatch();
  const players = useAppSelector(selectPlayers);
  const navigation = useNavigation<MainGameStackNavigationProp>();

  const [isGenerating, setIsGenerating] = useState(false);

  const handleAddPlayer = React.useCallback(() => {
    dispatch(addPlayer());
  }, [dispatch]);

  const handleUpdatePlayerName = React.useCallback(
    (id: string, newName: string) => {
      dispatch(updatePlayerName({ id, name: newName }));
    },
    [dispatch],
  );

  const handleUpdatePlayerGender = React.useCallback(
    (id: string, newGender: Player['gender']) => {
      dispatch(updatePlayerGender({ id, gender: newGender }));
    },
    [dispatch],
  );

  const handleRemovePlayer = React.useCallback(
    (id: string) => {
      dispatch(removePlayer({ id }));
    },
    [dispatch],
  );

  const handleStartMission = () => {
    if (players.length < 3) {
      return;
    }
    dispatch(setMainBackground());

    const location = getRandomLocation();
    const keyword = getRandomKeyword();

    const robberIndex = Math.floor(Math.random() * players.length);

    const playersWithRoles: Player[] = players.map((player, index) => {
      const role = index === robberIndex ? 'robber' : 'cop';
      const characterId = assignCharacter(player, role);

      const finalName = player.name || `Player ${index + 1}`;

      return {
        ...player,
        name: finalName,
        role,
        characterId,
      };
    });

    setIsGenerating(true);

    dispatch(
      startGameAction({
        playersWithRoles,
        location,
        keyword,
      }),
    );

    dispatch(startGame());

    setTimeout(() => {
      setIsGenerating(false);
      dispatch(setGameBackground());
      navigation.navigate('MainGameScreen');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomScreenWrapper extraStyle={styles.container}>
        {!isGenerating && (
          <>
            <SetupHeader onAddPlayer={handleAddPlayer} />

            <ScrollView contentContainerStyle={styles.playersList}>
              {players.map((player, idx) => (
                <PlayerSetupInput
                  key={player.id}
                  player={player}
                  playerIndex={idx + 1}
                  onNameChange={handleUpdatePlayerName}
                  onGenderChange={handleUpdatePlayerGender}
                  onRemove={handleRemovePlayer}
                  canRemove={idx >= 3}
                />
              ))}
            </ScrollView>

            <StartMissionButton onPress={handleStartMission} />
          </>
        )}

        <LocationGeneratingOverlay isVisible={isGenerating} />
      </CustomScreenWrapper>
    </SafeAreaView>
  );
};

export default MainGameSetupScreen;
