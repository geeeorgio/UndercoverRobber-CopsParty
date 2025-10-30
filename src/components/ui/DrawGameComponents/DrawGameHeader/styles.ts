import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: hp(15),
    paddingHorizontal: wp(0),
  },
  titleContainer: {
    flex: 1,
    paddingVertical: hp(10),
    paddingHorizontal: wp(15),
    borderTopLeftRadius: wp(10),
    borderBottomLeftRadius: wp(10),
    marginRight: wp(5),
    height: hp(50),
    justifyContent: 'center',
  },
  titleText: {
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsBold,
    color: COLORS.redAccent,
  },
  pauseContainer: {
    width: wp(50),
    height: hp(50),
    borderTopRightRadius: wp(4),
    borderBottomRightRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
});
