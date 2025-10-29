import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(20),
    gap: wp(4),
    minHeight: hp(50),
  },

  backButtonWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    height: hp(50),
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: wp(4),
    paddingVertical: 0,
    paddingHorizontal: wp(10),
    height: '100%',
  },
  headerButtonText: {
    fontSize: sp(18),
    color: COLORS.lightBrown,
    marginLeft: wp(10),
  },
  plusButtonWrapper: {
    flexGrow: 0,
    width: hp(50),
    height: hp(50),
  },
  plusButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4),
    height: '100%',
    width: '100%',
    padding: 0,
  },
});
