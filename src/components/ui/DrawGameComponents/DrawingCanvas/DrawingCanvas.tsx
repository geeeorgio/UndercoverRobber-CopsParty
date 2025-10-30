import { useEffect, useMemo, useRef, useState } from 'react';
import { ImageBackground, PanResponder, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { styles } from './styles';

import { ITEMS } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectDrawingPaths } from 'src/redux/slices/drawing/selectors';
import type { DrawingPath, DrawingPoint } from 'src/redux/slices/drawing/slice';
import { addDrawingPath } from 'src/redux/slices/drawing/slice';
import { pointsToSvgPath } from 'src/utils';

interface DrawingCanvasProps {
  strokeColor: string;
  strokeWidth: number;
}

const DrawingCanvas = ({ strokeColor, strokeWidth }: DrawingCanvasProps) => {
  const dispatch = useAppDispatch();
  const savedPaths = useAppSelector(selectDrawingPaths);

  const [currentPath, setCurrentPath] = useState<DrawingPoint[]>([]);
  const currentPathRef = useRef<DrawingPoint[]>([]);

  useEffect(() => {
    currentPathRef.current = currentPath;
  }, [currentPath]);

  const measurableViewRef = useRef<View>(null);
  const canvasLayoutRef = useRef<{ x: number; y: number } | null>(null);

  const measureCanvas = () => {
    measurableViewRef.current?.measureInWindow((x, y) => {
      canvasLayoutRef.current = { x, y };
    });
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,

        onPanResponderGrant: (evt) => {
          if (!canvasLayoutRef.current) {
            measureCanvas();
          }
          const layout = canvasLayoutRef.current;
          if (!layout) return;

          const newPoint: DrawingPoint = {
            x: evt.nativeEvent.pageX - layout.x,
            y: evt.nativeEvent.pageY - layout.y,
          };
          setCurrentPath([newPoint]);
        },

        onPanResponderMove: (evt) => {
          const layout = canvasLayoutRef.current;
          if (!layout) return;

          const newPoint: DrawingPoint = {
            x: evt.nativeEvent.pageX - layout.x,
            y: evt.nativeEvent.pageY - layout.y,
          };
          setCurrentPath((prev) => [...prev, newPoint]);
        },

        onPanResponderRelease: () => {
          if (currentPathRef.current.length > 1) {
            const newDrawingPath: DrawingPath = {
              path: currentPathRef.current,
              color: strokeColor,
              strokeWidth,
            };
            dispatch(addDrawingPath(newDrawingPath));
          }
          setCurrentPath([]);
        },
      }),
    [dispatch, strokeColor, strokeWidth],
  );

  const currentPathD = pointsToSvgPath(currentPath);

  return (
    <View
      ref={measurableViewRef}
      onLayout={measureCanvas}
      style={styles.canvasWrapper}
      {...panResponder.panHandlers}
    >
      <ImageBackground
        source={ITEMS.Sketch}
        style={styles.canvas}
        imageStyle={styles.imageBackground}
      >
        <Svg style={styles.svg}>
          {savedPaths.map((drawingPath, index) => (
            <Path
              key={index}
              d={pointsToSvgPath(drawingPath.path)}
              stroke={drawingPath.color}
              strokeWidth={drawingPath.strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}

          {currentPath.length > 0 && (
            <Path
              d={currentPathD}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </Svg>
      </ImageBackground>
    </View>
  );
};

export default DrawingCanvas;
