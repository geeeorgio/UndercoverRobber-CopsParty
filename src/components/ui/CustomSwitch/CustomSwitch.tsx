import React from 'react';
import { Switch, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectIsNotificationEnabled } from 'src/redux/slices/settings/selectors';
import {
  setNotificationIsOff,
  setNotificationIsOn,
} from 'src/redux/slices/settings/slice';

const CustomSwitch = () => {
  const dispatch = useAppDispatch();
  const isNotificationEnabled = useAppSelector(selectIsNotificationEnabled);

  const handleSwitchChange = (value: boolean) => {
    if (value) {
      dispatch(setNotificationIsOn());
    } else {
      dispatch(setNotificationIsOff());
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.trackBackground}>
        {isNotificationEnabled && (
          <CustomContainer variant="green" extraStyle={styles.gradientFill} />
        )}
      </View>

      <Switch
        trackColor={{
          false: styles.trackColorFalse.color,
          true: 'transparent',
        }}
        thumbColor={styles.thumbColor.color}
        ios_backgroundColor={styles.trackColorFalse.color}
        onValueChange={handleSwitchChange}
        value={isNotificationEnabled}
        style={styles.switchOverlay}
      />
    </View>
  );
};

export default CustomSwitch;
