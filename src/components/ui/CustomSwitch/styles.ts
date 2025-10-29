import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

const TRACK_WIDTH = wp(51);
const TRACK_HEIGHT = hp(31);
const BORDER_RADIUS = TRACK_HEIGHT / 2;
const SCALE_FACTOR = 1.04;

export const styles = StyleSheet.create({
  outerContainer: {
    width: TRACK_WIDTH * SCALE_FACTOR,
    height: TRACK_HEIGHT * SCALE_FACTOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackBackground: {
    position: 'absolute',
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLORS.brown,
    overflow: 'hidden',
    transform: [{ scaleX: SCALE_FACTOR }, { scaleY: SCALE_FACTOR }],
  },
  gradientFill: {
    ...StyleSheet.absoluteFillObject,
  },
  switchOverlay: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    transform: [{ scaleX: SCALE_FACTOR }, { scaleY: SCALE_FACTOR }],
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  trackColorFalse: {
    color: 'transparent',
  },
  thumbColor: {
    color: COLORS.white,
  },
});
