import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomText,
  MinusSvg,
} from 'src/components/ui';
import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

interface Player {
  id: string;
  name: string;
  gender: 'random' | 'male' | 'female';
}

interface PlayerSetupInputProps {
  player: Player;
  onNameChange: (id: string, newName: string) => void;
  onGenderChange: (id: string, newGender: Player['gender']) => void;
  onRemove?: (id: string) => void;
  canRemove: boolean;
  playerIndex: number;
}

const PlayerSetupInput = ({
  player,
  onNameChange,
  onGenderChange,
  onRemove,
  canRemove,
  playerIndex,
}: PlayerSetupInputProps) => {
  const showRemoveButton = canRemove && onRemove;
  const defaultName = `Player ${playerIndex}`;

  return (
    <View style={styles.playerInputGroup}>
      <View style={styles.inputRow}>
        <TextInput
          style={[
            styles.textInput,
            showRemoveButton && styles.textInputWithRemove,
          ]}
          placeholder={defaultName}
          placeholderTextColor={COLORS.white}
          value={player.name === defaultName ? '' : player.name}
          onChangeText={(text) => onNameChange(player.id, text)}
        />

        {showRemoveButton && (
          <CustomButton
            handlePress={() => onRemove(player.id)}
            extraStyle={styles.removeButtonWrapper}
          >
            <CustomContainer
              variant="red"
              extraStyle={styles.removeButtonContainer}
            >
              <MinusSvg width={wp(16)} height={wp(16)} color={COLORS.white} />
            </CustomContainer>
          </CustomButton>
        )}
      </View>

      <View style={styles.genderSelection}>
        {['random', 'male', 'female'].map((genderType) => (
          <CustomButton
            key={genderType}
            handlePress={() =>
              onGenderChange(player.id, genderType as Player['gender'])
            }
            extraStyle={styles.genderButtonWrapper}
          >
            <CustomContainer
              variant={player.gender === genderType ? 'yellow' : 'brown'}
              extraStyle={styles.genderButton}
            >
              <CustomText
                extraStyle={[
                  styles.maleFemale,
                  player.gender === genderType && styles.genderButtonText,
                ]}
              >
                {genderType.charAt(0).toUpperCase() + genderType.slice(1)}
              </CustomText>
            </CustomContainer>
          </CustomButton>
        ))}
      </View>
    </View>
  );
};

export default PlayerSetupInput;
