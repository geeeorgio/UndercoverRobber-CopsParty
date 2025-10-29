import { StyleSheet } from 'react-native';

import { hp } from 'src/utils';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: hp(20),
  },
  playersList: {
    flexGrow: 1,
    paddingBottom: hp(100),
  },
});
