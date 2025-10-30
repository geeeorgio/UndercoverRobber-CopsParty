import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  tapWrapper: {
    width: '88%',
    alignSelf: 'center',
    paddingVertical: hp(10),
  },
  roleTitleRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleIcon: {
    fontSize: sp(16),
    marginLeft: wp(5),
  },
  tapText: {
    color: COLORS.lightBrown,
    fontSize: sp(16),
    textAlign: 'center',
  },
  roleTitle: {
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsSemi,
  },
  characterImage: {
    width: wp(125),
    height: wp(125),
    marginVertical: hp(12),
  },
  roleDescription: {
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.darkGreen,
    marginBottom: hp(12),
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoRow: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(6),
    paddingVertical: hp(10),
  },
  infoIcon: {
    fontSize: sp(12),
  },
  infoText: {
    fontSize: sp(12),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.lightBrown,
  },
});
