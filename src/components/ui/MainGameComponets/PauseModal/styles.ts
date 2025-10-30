import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingHorizontal: wp(10),
  },
  title: {
    fontSize: sp(22),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.lightBrown,
    marginBottom: hp(10),
  },
  description: {
    fontSize: sp(16),
    color: COLORS.brown,
    textAlign: 'center',
    marginBottom: hp(30),
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp(10),
  },
  exitButton: {
    width: wp(100),
    paddingVertical: hp(12),
    backgroundColor: 'transparent',
  },
  exitText: {
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.darkRed,
    textAlign: 'center',
  },
  resumeButton: {
    width: wp(120),
    paddingVertical: hp(12),
    borderRadius: wp(4),
  },
  resumeBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(10),
  },
  resumeText: {
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.darkGreen,
    textAlign: 'center',
  },
});
