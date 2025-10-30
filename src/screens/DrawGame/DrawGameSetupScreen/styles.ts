import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imgWrapper: {
    width: '100%',
    aspectRatio: 1,
  },
  copsImg: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionTextWrapper: {
    paddingHorizontal: wp(16),
    paddingVertical: hp(20),
  },
  descriptionText: {
    fontSize: sp(16),
    color: COLORS.brown,
    fontFamily: FONTS.PoppinsMedium,
  },
});
