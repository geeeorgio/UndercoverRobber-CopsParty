import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const BackSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 23 23" {...props}>
      <Path
        fill={props.color || COLORS.darkGreen}
        d="M22.516 12.444a8.8 8.8 0 0 0-8.865-7.808H2.266l2.438-3.442A.75.75 0 0 0 4.516.136a.75.75 0 0 0-1.042.18L.129 5.004a.65.65 0 0 0 0 .75l3.352 4.695a.75.75 0 0 0 1.223-.855L2.266 6.136h11.385a7.3 7.3 0 0 1 7.365 6.638 7.134 7.134 0 0 1-7.11 7.612H.766a.75.75 0 1 0 0 1.5h13.125a8.63 8.63 0 0 0 8.625-9.442"
      ></Path>
      <Path
        fill={props.color || COLORS.darkGreen}
        d="M3.466 10.77.114 6.077a.675.675 0 0 1 0-.75L3.466.616a.75.75 0 0 1 1.251.042.75.75 0 0 1-.028.835l-3 4.2 3 4.2a.75.75 0 0 1-.44 1.172.75.75 0 0 1-.783-.294"
      ></Path>
      <Path
        fill={props.color || COLORS.darkGreen}
        d="M13.636 4.944H.766a.75.75 0 0 0 0 1.5h12.87a7.3 7.3 0 0 1 7.38 6.637 7.133 7.133 0 0 1-7.125 7.613H.766a.75.75 0 1 0 0 1.5h13.125a8.63 8.63 0 0 0 8.625-9.458 8.79 8.79 0 0 0-8.88-7.792"
      ></Path>
    </Svg>
  );
};

export default BackSvg;
