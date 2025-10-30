import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  BackSvg,
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  DrawGameHeader,
  DrawingCanvas,
  PauseModal,
} from 'src/components/ui';
import {
  COLOR_OPTIONS,
  COLORS,
  INITIAL_STROKE_COLOR,
  INITIAL_STROKE_WIDTH,
  ITEMS,
  ROBBERS,
} from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { setMainBackground } from 'src/redux/slices/background/slice';
import {
  selectDrawGameDescription,
  selectDrawGameSuspectId,
  selectDrawingPaths,
  selectIsDrawingCompleted,
} from 'src/redux/slices/drawing/selectors';
import {
  completeDrawing,
  resetDrawGameState,
  undoLastPath,
} from 'src/redux/slices/drawing/slice';
import { selectIsPaused } from 'src/redux/slices/gameplay/selectors';
import { pauseGame, resumeGame } from 'src/redux/slices/gameplay/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';
import { hp, wp } from 'src/utils';

const DrawGameScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const suspectId = useAppSelector(selectDrawGameSuspectId);
  const descriptionObj = useAppSelector(selectDrawGameDescription);
  const isDrawingComplete = useAppSelector(selectIsDrawingCompleted);
  const isPaused = useAppSelector(selectIsPaused);
  const drawingPaths = useAppSelector(selectDrawingPaths);

  const [strokeWidth, setStrokeWidth] = useState(INITIAL_STROKE_WIDTH);
  const [strokeColor, setStrokeColor] = useState(INITIAL_STROKE_COLOR);

  const realRobber = suspectId
    ? ROBBERS[suspectId as keyof typeof ROBBERS]
    : null;
  const suspectName = realRobber?.id || 'Unknown Suspect';

  const handleTogglePause = () => {
    if (isPaused) {
      dispatch(resumeGame());
    } else {
      dispatch(pauseGame());
    }
  };

  const handleShowRealFace = () => {
    dispatch(completeDrawing());
  };

  const handleHome = () => {
    dispatch(resetDrawGameState());
    dispatch(resumeGame());
    dispatch(setMainBackground());
    navigation.navigate('HomeScreen');
  };

  const handleUndo = () => {
    if (drawingPaths.length > 0) {
      dispatch(undoLastPath());
    }
  };

  const renderDrawingControls = () => {
    return (
      <View style={styles.controlsContainer}>
        <CustomButton handlePress={handleUndo}>
          <CustomContainer variant="green" extraStyle={styles.controlContainer}>
            <BackSvg width={wp(20)} height={hp(20)} style={styles.undoIcon} />
          </CustomContainer>
        </CustomButton>

        <View style={styles.sliderWrapper}>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={15}
            step={1}
            value={strokeWidth}
            onValueChange={setStrokeWidth}
            minimumTrackTintColor={COLORS.activeYellow}
            maximumTrackTintColor={COLORS.blackAccent}
            thumbTintColor={COLORS.white}
          />
        </View>

        <View style={styles.colorPickerWrapper}>
          {COLOR_OPTIONS.map((color) => (
            <CustomButton
              key={color}
              handlePress={() => setStrokeColor(color)}
              extraStyle={[
                styles.colorButton,
                { backgroundColor: color },
                strokeColor === color && styles.selectedColor,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <CustomContainer
          variant="yellow"
          extraStyle={styles.descriptionContainer}
        >
          <CustomText extraStyle={styles.traitText}>
            {descriptionObj?.trait || 'No trait provided'}
          </CustomText>
        </CustomContainer>

        <CustomContainer
          variant="yellow"
          extraStyle={styles.descriptionContainer}
        >
          <CustomText extraStyle={styles.personalityText}>
            {descriptionObj?.personality || 'No personality provided'}
          </CustomText>
        </CustomContainer>

        {!isDrawingComplete ? (
          <>
            <DrawingCanvas
              strokeColor={strokeColor}
              strokeWidth={strokeWidth}
            />
            {renderDrawingControls()}
          </>
        ) : (
          <View style={styles.resultContainer}>
            <Image
              source={realRobber?.image || ITEMS.Sketch}
              style={styles.realFaceImage}
              resizeMode="contain"
            />
            <CustomText extraStyle={styles.realFaceText}>
              The Suspect is... {suspectName}
            </CustomText>
          </View>
        )}

        <View style={styles.buttonWrapper}>
          {!isDrawingComplete ? (
            <CustomButton
              handlePress={handleShowRealFace}
              extraStyle={styles.actionButton}
            >
              <CustomContainer variant="green">
                <CustomText extraStyle={styles.actionButtonText}>
                  Show Real Face
                </CustomText>
              </CustomContainer>
            </CustomButton>
          ) : (
            <View style={styles.buttonGroup}>
              <CustomButton
                handlePress={() => {}}
                extraStyle={styles.halfButton}
              >
                <CustomContainer variant="green">
                  <CustomText extraStyle={styles.actionButtonText}>
                    Share
                  </CustomText>
                </CustomContainer>
              </CustomButton>
              <CustomButton
                handlePress={handleHome}
                extraStyle={styles.halfButton}
              >
                <CustomContainer variant="yellow">
                  <CustomText extraStyle={styles.actionButtonText}>
                    Home
                  </CustomText>
                </CustomContainer>
              </CustomButton>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <CustomScreenWrapper extraStyle={styles.container}>
          <DrawGameHeader />
          {renderContent()}
        </CustomScreenWrapper>
      </SafeAreaView>

      {isPaused && (
        <PauseModal onResume={handleTogglePause} onExit={handleHome} />
      )}
    </>
  );
};

export default DrawGameScreen;
