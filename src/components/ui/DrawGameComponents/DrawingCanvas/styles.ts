import { StyleSheet } from 'react-native';

import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  canvasWrapper: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  canvas: {
    flex: 1,
    width: '100%',
  },
  imageBackground: {
    borderRadius: wp(4),
  },
  svg: {
    ...StyleSheet.absoluteFillObject,
  },
});
