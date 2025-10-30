import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    width: wp(150),
    height: wp(66),
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: sp(32),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.lightBrown,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: hp(20),
    alignItems: 'center',
  },
  actionButton: {
    width: '100%',
    maxWidth: wp(280),
    borderRadius: wp(4),
  },
  startGroup: {
    width: '100%',
    paddingVertical: hp(12),
  },
  actionButtonText: {
    fontSize: sp(18),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.darkGreen,
    textAlign: 'center',
  },
  buttonGroup: {
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: wp(300),
    gap: wp(10),
  },
  halfButton: {
    borderRadius: wp(4),
  },
});
