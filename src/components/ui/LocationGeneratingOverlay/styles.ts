import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    flex: 1,
    flexDirection: 'column',
  },
  pinWrapper: {
    zIndex: 11,
    marginBottom: hp(10),
  },
  pinImage: {
    width: wp(70),
    height: wp(70),
  },
  indicatorContainer: {
    width: '100%',
    alignItems: 'center',
    zIndex: 11,
    marginTop: hp(10),
  },
  indicatorButton: {
    width: wp(300),
    paddingVertical: hp(15),
    borderRadius: wp(8),
  },
  indicatorText: {
    color: COLORS.lightBrown,
    fontSize: sp(18),
    fontFamily: FONTS.PoppinsSemi,
    textAlign: 'center',
  },
});
