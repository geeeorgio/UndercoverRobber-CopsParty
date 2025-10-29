import { StyleSheet } from 'react-native';

import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between' },
  logoWrapper: { flex: 0.6 },
  menuContainer: {
    flex: 0.4,
    paddingHorizontal: wp(24),
  },
});
