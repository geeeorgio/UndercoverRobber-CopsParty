import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  cardWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInner: {
    width: '100%',
    aspectRatio: 0.72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(30),
    paddingVertical: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleTitle: {
    fontSize: sp(20),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.lightBrown,
    marginBottom: hp(10),
  },
});
