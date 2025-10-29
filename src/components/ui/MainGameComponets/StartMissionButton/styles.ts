import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  startButtonWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    width: '80%',
    paddingVertical: hp(15),
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    fontSize: sp(18),
    color: COLORS.darkGreen,
  },
});
