import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: sp(24),
    fontFamily: FONTS.PoppinsBold,
    color: COLORS.white,
    marginBottom: hp(15),
  },
  characterImage: {
    width: wp(150),
    height: wp(150),
    marginVertical: hp(20),
  },
  nameContainer: {
    paddingHorizontal: wp(20),
    paddingVertical: hp(10),
    borderRadius: wp(4),
    marginTop: hp(10),
  },
  nameText: {
    fontSize: sp(22),
    fontFamily: FONTS.PoppinsBold,
    color: COLORS.lightBrown,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(20),
  },
  homeButton: {
    width: '100%',
    paddingVertical: hp(12),
    borderRadius: wp(4),
  },
  homeButtonText: {
    color: COLORS.darkGreen,
    fontSize: sp(18),
    fontFamily: FONTS.PoppinsSemi,
    textAlign: 'center',
  },
});
