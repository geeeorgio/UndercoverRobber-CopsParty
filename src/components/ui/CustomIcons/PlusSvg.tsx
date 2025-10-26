import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const PlusSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 14 14" {...props}>
      <Path
        fill={props.color || COLORS.darkGreen}
        d="M13 8H8v5a1 1 0 1 1-2 0V8H1a1 1 0 0 1 0-2h5V1a1 1 0 0 1 2 0v5h5a1 1 0 1 1 0 2"
      ></Path>
    </Svg>
  );
};

export default PlusSvg;
