import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const PauseSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 12 14" {...props}>
      <Path
        fill={props.color || COLORS.darkGreen}
        d="M2 14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2S0 .9 0 2v10c0 1.1.9 2 2 2M8 2v10c0 1.1.9 2 2 2s2-.9 2-2V2c0-1.1-.9-2-2-2S8 .9 8 2"
      ></Path>
    </Svg>
  );
};

export default PauseSvg;
