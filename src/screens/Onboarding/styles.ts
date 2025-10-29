import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  main: { flex: 1 },
  logoWrapper: { flex: 0.55, alignItems: 'center', paddingTop: hp(16) },
  logo: { width: '90%', height: '90%' },
  content: {
    flex: 0.45,
    backgroundColor: COLORS.onboardingBckg,
    justifyContent: 'space-between',
    paddingHorizontal: wp(20),
    paddingTop: hp(40),
    paddingBottom: hp(20),
    borderTopLeftRadius: wp(16),
    borderTopRightRadius: wp(16),
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: { fontSize: sp(32), textAlign: 'center' },
  description: {
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsMedium,
    textAlign: 'center',
  },
  indicatorWrapper: {
    width: '33%',
    alignSelf: 'center',
  },
  btn: {
    width: '100%',
    paddingBottom: hp(20),
  },
  btnContainer: {
    width: '100%',
    paddingVertical: hp(14),
    alignItems: 'center',
  },
  btnText: { fontSize: sp(18), color: COLORS.darkGreen },
});
