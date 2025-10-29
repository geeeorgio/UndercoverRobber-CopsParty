import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  scrollContent: {
    // paddingHorizontal: wp(24),
    // paddingBottom: hp(16),
  },
  textWrapper: {
    width: '100%',
    gap: hp(12),
  },
  title: {
    fontSize: sp(32),
    color: COLORS.lightBrown,
    textAlign: 'center',
    marginBottom: hp(8),
  },
  modalText: {
    fontSize: sp(18),
    color: COLORS.brown,
    fontFamily: FONTS.PoppinsMedium,
  },
  btnContainer: {
    width: '50%',
    maxWidth: wp(148),
    marginTop: hp(30),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '100%',
    paddingVertical: hp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: sp(18),
    color: COLORS.darkGreen,
  },
});
