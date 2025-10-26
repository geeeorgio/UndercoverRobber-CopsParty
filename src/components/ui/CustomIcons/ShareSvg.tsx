import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ShareSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 15" {...props}>
      <Path
        fill={props.color || COLORS.darkRed}
        d="m18 7-7-7v4C4 5 1 10 0 15c2.5-3.5 6-5.1 11-5.1V14z"
      ></Path>
    </Svg>
  );
};

export default ShareSvg;
