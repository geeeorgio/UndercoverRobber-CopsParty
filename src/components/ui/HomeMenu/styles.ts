import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  menuButtons: {
    flex: 1,
    paddingHorizontal: wp(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp(54),
  },
  gamesWrapper: {
    alignSelf: 'flex-start',
    width: '100%',
    gap: hp(16),
  },
  containers: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBtn: {
    minWidth: '100%',
    paddingVertical: hp(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(18),
    color: COLORS.darkGreen,
  },
  bottomBtns: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(12),
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(16),
    gap: wp(10),
  },
  bottomButtonText: {
    fontSize: sp(18),
    lineHeight: sp(22),
    color: COLORS.lightBrown,
  },
});
