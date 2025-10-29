import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  dots: {
    flexDirection: 'row',
    gap: wp(6),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: hp(80),
  },
  dot: {
    width: wp(12),
    height: hp(12),
    borderRadius: wp(6),
    backgroundColor: COLORS.white,
  },
});
