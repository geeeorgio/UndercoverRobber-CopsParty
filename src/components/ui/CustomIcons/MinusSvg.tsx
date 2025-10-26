import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const MinusSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 14 2" {...props}>
      <Path
        fill={props.color || COLORS.white}
        d="M13 2H1a1 1 0 0 1 0-2h12a1 1 0 1 1 0 2"
      ></Path>
    </Svg>
  );
};

export default MinusSvg;
