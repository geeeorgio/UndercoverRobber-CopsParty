import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  absolute: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    paddingHorizontal: wp(16),
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    maxWidth: wp(400),
    paddingVertical: hp(24),
    paddingHorizontal: wp(16),
  },
});
