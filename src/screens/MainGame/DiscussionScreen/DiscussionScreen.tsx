import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  CustomScreenWrapper,
  GameHeader,
  CustomButton,
  CustomText,
  CustomContainer,
  PauseModal,
} from 'src/components/ui';
import { COLORS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectCurrentRound,
  selectDiscussionTime,
  selectIsDisscussionActive,
  selectIsPaused,
  selectRoundCheckpoint,
} from 'src/redux/slices/gameplay/selectors';
import {
  startDiscussion,
  tickDiscussion,
  endDiscussion,
  nextRound,
} from 'src/redux/slices/gameplay/slice';
import type { MainGameStackNavigationProp } from 'src/types/navigation/mainGame';

const DiscussionScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainGameStackNavigationProp>();

  const currentRound = useAppSelector(selectCurrentRound);
  const discussionTime = useAppSelector(selectDiscussionTime);
  const isDiscussionActive = useAppSelector(selectIsDisscussionActive);
  const maxRounds = useAppSelector(selectRoundCheckpoint);
  const isPaused = useAppSelector(selectIsPaused);

  useEffect(() => {
    let timerId: number | null = null;

    if (isDiscussionActive && !isPaused) {
      timerId = setInterval(() => {
        dispatch(tickDiscussion());
      }, 1000);
    }

    return () => {
      if (timerId !== null) {
        clearInterval(timerId);
      }
    };
  }, [isDiscussionActive, isPaused, dispatch]);

  useEffect(() => {
    if (isDiscussionActive && discussionTime <= 0) {
      dispatch(endDiscussion());
    }
  }, [discussionTime, isDiscussionActive, dispatch]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(discussionTime / 60);
    const seconds = discussionTime % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [discussionTime]);

  const handleStartDiscussion = () => {
    dispatch(startDiscussion());
  };

  const handleEndDiscussion = () => {
    dispatch(endDiscussion());
  };

  const handleNextRound = () => {
    dispatch(nextRound());
    dispatch(startDiscussion());
  };

  const handleShowRobber = () => {
    navigation.navigate('ResultScreen');
  };

  const renderButtons = () => {
    if (isDiscussionActive) {
      return (
        <CustomButton
          handlePress={handleEndDiscussion}
          extraStyle={styles.actionButton}
        >
          <CustomContainer variant="red" extraStyle={styles.startGroup}>
            <CustomText
              extraStyle={[styles.actionButtonText, { color: COLORS.white }]}
            >
              End Discussion
            </CustomText>
          </CustomContainer>
        </CustomButton>
      );
    }

    if (currentRound >= maxRounds && discussionTime < 120) {
      return (
        <CustomButton
          handlePress={handleShowRobber}
          extraStyle={styles.actionButton}
        >
          <CustomContainer variant="yellow" extraStyle={styles.startGroup}>
            <CustomText extraStyle={styles.actionButtonText}>
              Show Robber
            </CustomText>
          </CustomContainer>
        </CustomButton>
      );
    }

    if (discussionTime === 120 && currentRound <= maxRounds) {
      return (
        <CustomButton
          handlePress={handleStartDiscussion}
          extraStyle={styles.actionButton}
        >
          <CustomContainer variant="green" extraStyle={styles.startGroup}>
            <CustomText extraStyle={styles.actionButtonText}>
              Start Discussion
            </CustomText>
          </CustomContainer>
        </CustomButton>
      );
    }

    if (currentRound < maxRounds) {
      return (
        <View style={styles.buttonGroup}>
          <CustomButton
            handlePress={handleNextRound}
            extraStyle={styles.halfButton}
          >
            <CustomContainer variant="green" extraStyle={styles.startGroup}>
              <CustomText extraStyle={styles.actionButtonText}>
                Start Discussion
              </CustomText>
            </CustomContainer>
          </CustomButton>
          <CustomButton
            handlePress={handleShowRobber}
            extraStyle={styles.halfButton}
          >
            <CustomContainer variant="yellow" extraStyle={styles.startGroup}>
              <CustomText
                extraStyle={[
                  styles.actionButtonText,
                  { color: COLORS.lightBrown },
                ]}
              >
                Show Robber
              </CustomText>
            </CustomContainer>
          </CustomButton>
        </View>
      );
    }

    return null;
  };

  const headerTitle = `Round ${currentRound}`;

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <CustomScreenWrapper extraStyle={styles.container}>
          <GameHeader playerName={headerTitle} />

          <View style={styles.timerWrapper}>
            <CustomContainer
              variant="yellow"
              extraStyle={styles.timerContainer}
            >
              <CustomText extraStyle={styles.timerText}>
                {formattedTime}
              </CustomText>
            </CustomContainer>
          </View>

          <View style={styles.buttonContainer}>{renderButtons()}</View>
        </CustomScreenWrapper>
      </SafeAreaView>
      {isPaused && <PauseModal />}
    </>
  );
};

export default DiscussionScreen;
