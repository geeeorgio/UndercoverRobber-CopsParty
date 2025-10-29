import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: hp(20),
    gap: wp(10),
  },
  bar: {
    flex: 1,
    height: hp(5),
    borderRadius: 22,
    opacity: 0.5,
  },
  activeBar: {
    opacity: 1,
  },
});
