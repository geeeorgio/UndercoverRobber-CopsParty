import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: wp(20),
    paddingVertical: hp(10),
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  controlButton: { width: '100%' },
  realFaceImage: {
    width: wp(180),
    height: wp(180),
  },
  realFaceText: {
    fontSize: sp(18),
    fontFamily: FONTS.PoppinsBold,
    color: COLORS.darkGreen,
    marginTop: hp(10),
  },
  controlsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(10),
    paddingHorizontal: wp(5),
    backgroundColor: 'transparent',
    marginBottom: hp(5),
  },
  controlContainer: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    overflow: 'hidden',
  },
  undoIcon: {
    transform: [{ rotate: '180deg' }],
  },
  sliderWrapper: {
    flex: 1,
    paddingHorizontal: wp(10),
  },
  slider: {
    height: hp(40),
  },
  colorPickerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  colorButton: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    marginLeft: wp(8),
    borderWidth: 2,
    borderColor: 'transparent',
    padding: 0,
  },
  selectedColor: {
    borderColor: COLORS.white,
  },
  buttonWrapper: {
    width: '100%',
    paddingVertical: hp(10),
  },
  actionButton: {
    width: '100%',
    paddingVertical: hp(15),
    borderRadius: wp(4),
  },
  actionButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsBold,
    color: COLORS.white,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfButton: {
    width: '48%',
    paddingVertical: hp(15),
    borderRadius: wp(4),
  },
  descriptionContainer: {
    width: '100%',
    padding: wp(10),
    borderRadius: 10,
    marginBottom: hp(8),
    height: hp(40),
    justifyContent: 'center',
  },
  traitText: {
    fontSize: sp(14),
    fontFamily: FONTS.PoppinsBold,
    color: COLORS.redAccent,
    textAlign: 'center',
  },
  personalityText: {
    fontSize: sp(14),
    fontFamily: FONTS.PoppinsBold,
    color: COLORS.redAccent,
    textAlign: 'center',
  },
  resultContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: hp(10),
  },
});
