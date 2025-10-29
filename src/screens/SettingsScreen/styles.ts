import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  title: {
    fontSize: sp(24),
    color: COLORS.brown,
    textAlign: 'center',
    marginBottom: hp(30),
  },
  settingsList: {
    gap: hp(24),
    width: '100%',
  },
  settingItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconMargin: {
    marginRight: wp(12),
  },
  settingText: {
    fontSize: sp(20),
    color: COLORS.brown,
  },
  spacer: {
    flex: 1,
  },
  buttonWrapper: {
    marginTop: hp(40),
    width: '100%',
    alignItems: 'center',
  },
  btnContainer: {
    width: '100%',
    maxWidth: wp(140),
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
