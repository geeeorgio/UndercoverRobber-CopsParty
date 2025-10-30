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
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  controlButton: { width: '100%' },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(6),
    marginBottom: hp(6),
  },
  controlContainer: {
    width: wp(50),
    height: wp(50),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    overflow: 'hidden',
  },
  sliderWrapper: {
    flex: 1,
    paddingHorizontal: wp(6),
    justifyContent: 'center',
  },
  slider: {
    height: hp(30),
  },
  colorPickerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  colorButton: {
    borderWidth: 1,
    borderColor: COLORS.white,
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
    marginLeft: wp(4),
    padding: 0,
  },
  selectedColor: {
    borderColor: COLORS.white,
  },
  descriptionContainer: {
    width: '100%',
    padding: wp(6),
    borderRadius: wp(4),
    marginBottom: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: sp(14),
    fontFamily: FONTS.PoppinsMedium,
    color: COLORS.brown,
  },
  resultContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: hp(0),
  },
  realFaceWrapper: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalRobberImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  finalSketchWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom: hp(8),
  },
  finalSketchImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: hp(10),
  },
  actionButton: {
    width: '100%',
    paddingVertical: 0,
    borderRadius: wp(4),
  },
  actionButtonContainer: {
    width: '100%',
    paddingVertical: hp(12),
    borderRadius: wp(6),
  },
  actionButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.PoppinsSemi,
    color: COLORS.darkGreen,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfButton: {
    width: '48%',
    paddingVertical: 0,
    borderRadius: wp(6),
  },
  halfButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(12),
    paddingHorizontal: wp(8),
    borderRadius: wp(4),
  },
  buttonTextWithIcon: {
    marginLeft: wp(8),
  },
});
