import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const TermsSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 16 20" {...props}>
      <Path
        fill={props.color || COLORS.darkRed}
        d="M9 7V1.5L14.5 7M2 0C.89 0 0 .89 0 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-6-6z"
      ></Path>
    </Svg>
  );
};

export default TermsSvg;
