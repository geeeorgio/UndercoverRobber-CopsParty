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
  ShareSvg,
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
import { handleShare } from 'src/utils/shareUtils';

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

  const handleTogglePause = () => {
    dispatch(isPaused ? resumeGame() : pauseGame());
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
            <BackSvg width={wp(25)} height={hp(25)} />
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
            maximumTrackTintColor={COLORS.white}
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
        {!isDrawingComplete && (
          <>
            <CustomContainer
              variant="yellow"
              extraStyle={styles.descriptionContainer}
            >
              <CustomText extraStyle={styles.text}>
                {descriptionObj?.trait || 'No trait provided'}
              </CustomText>
            </CustomContainer>

            <CustomContainer
              variant="yellow"
              extraStyle={styles.descriptionContainer}
            >
              <CustomText extraStyle={styles.text}>
                {descriptionObj?.personality || 'No personality provided'}
              </CustomText>
            </CustomContainer>
          </>
        )}

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
            <View style={styles.realFaceWrapper}>
              <Image
                source={realRobber?.image || ITEMS.Sketch}
                style={styles.finalRobberImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.finalSketchWrapper}>
              <DrawingCanvas
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
              />
            </View>
          </View>
        )}

        <View style={styles.buttonWrapper}>
          {!isDrawingComplete ? (
            <CustomButton
              handlePress={handleShowRealFace}
              extraStyle={styles.actionButton}
            >
              <CustomContainer
                variant="green"
                extraStyle={styles.actionButtonContainer}
              >
                <CustomText extraStyle={styles.actionButtonText}>
                  Show Real Face
                </CustomText>
              </CustomContainer>
            </CustomButton>
          ) : (
            <View style={styles.buttonGroup}>
              <CustomButton
                handlePress={handleShare}
                extraStyle={styles.halfButton}
              >
                <CustomContainer
                  variant="green"
                  extraStyle={styles.halfButtonContainer}
                >
                  <ShareSvg width={wp(16)} height={hp(16)} />
                  <CustomText
                    extraStyle={[
                      styles.actionButtonText,
                      styles.buttonTextWithIcon,
                    ]}
                  >
                    Share
                  </CustomText>
                </CustomContainer>
              </CustomButton>

              <CustomButton
                handlePress={handleHome}
                extraStyle={styles.halfButton}
              >
                <CustomContainer
                  variant="yellow"
                  extraStyle={styles.halfButtonContainer}
                >
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
