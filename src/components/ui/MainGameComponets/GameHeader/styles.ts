import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(15),
    gap: wp(4),
    height: hp(55),
  },
  nameContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: wp(14),
    paddingVertical: hp(12),
    borderRadius: wp(4),
  },
  pauseContainer: {
    width: wp(55),
    height: hp(55),
    borderRadius: wp(4),
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  playerNameText: {
    color: COLORS.lightBrown,
    fontSize: sp(18),
    fontFamily: FONTS.PoppinsSemi,
  },
  pauseButton: {
    width: '100%',
    height: '100%',
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  finalHeader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(15),
    height: hp(55),
  },
});
