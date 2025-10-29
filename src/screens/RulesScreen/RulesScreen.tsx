import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomText,
  ModalWrapper,
} from 'src/components/ui';
import type { MainStackNavigationProp } from 'src/types/navigation/main';

const RulesScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <ModalWrapper>
      <View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <CustomText extraStyle={styles.title}>Cop’s Manual</CustomText>

          <View style={styles.textWrapper}>
            <CustomText extraStyle={styles.modalText}>
              Every round begins with a secret location and a keyword. Cops know
              both — the Robber knows nothing. Each player says one word
              connected to the location or keyword.
            </CustomText>

            <CustomText extraStyle={styles.modalText}>
              If you’re the Robber, blend in! If you’re a Cop, stay smart and
              don’t reveal too much. After everyone speaks, vote for who you
              think is the Robber.
            </CustomText>

            <CustomText extraStyle={styles.modalText}>
              Then reveal the truth — and let the laughter begin.
            </CustomText>
          </View>
        </ScrollView>

        <CustomButton
          handlePress={() => navigation.goBack()}
          extraStyle={styles.btnContainer}
        >
          <CustomContainer variant="green" extraStyle={styles.btn}>
            <CustomText extraStyle={styles.btnText}>Ok</CustomText>
          </CustomContainer>
        </CustomButton>
      </View>
    </ModalWrapper>
  );
};

export default RulesScreen;
