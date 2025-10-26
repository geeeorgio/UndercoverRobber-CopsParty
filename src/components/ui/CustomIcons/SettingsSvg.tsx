import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const SettingsSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 19 22" {...props}>
      <Path
        fill={props.color || COLORS.lightBrown}
        d="M9.5 0 19 5.5v11L9.5 22 0 16.5v-11zm0 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      ></Path>
    </Svg>
  );
};

export default SettingsSvg;
