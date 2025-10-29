import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  playerInputGroup: {
    width: '100%',
    marginBottom: hp(32),
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(12),
  },
  textInput: {
    height: hp(50),
    paddingHorizontal: wp(12),
    color: COLORS.white,
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsRegular,
    borderRadius: wp(4),
    backgroundColor: COLORS.lightBrown,
    borderWidth: 1.5,
    borderColor: COLORS.activeYellow,
    textAlign: 'left',
    flexGrow: 1,
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  textInputWithRemove: {
    marginRight: wp(4),
  },
  removeButtonWrapper: {
    flexGrow: 0,
    width: wp(50),
    height: hp(50),
  },
  removeButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4),
    width: '100%',
    height: '100%',
    padding: 0,
  },
  genderSelection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp(4),
  },
  genderButtonWrapper: {
    flex: 1,
    borderRadius: wp(4),
    overflow: 'hidden',
  },
  genderButton: {
    borderWidth: 1,
    borderColor: COLORS.activeYellow,
    flex: 1,
    paddingVertical: hp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  maleFemale: {
    color: COLORS.white,
    opacity: 0.7,
  },
  genderButtonText: {
    fontSize: sp(15),
    color: COLORS.darkRed,
    fontFamily: FONTS.PoppinsRegular,
  },
});
