import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { HomeMenu } from 'src/components/ui';
import HomeLogo from 'src/components/ui/HomeLogo/HomeLogo';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>{/* <HomeLogo /> */}</View>

      <View style={styles.menuContainer}>
        <HomeMenu />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
