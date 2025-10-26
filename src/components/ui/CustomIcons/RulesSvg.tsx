import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const RulesSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 20 20" {...props}>
      <Path
        fill={props.color || COLORS.lightBrown}
        d="M8 0a3 3 0 0 1 2.995 2.824L11 3v1h3a2 2 0 0 1 1.995 1.85L16 6v3h1a3 3 0 0 1 .176 5.995L17 15h-1v3a2 2 0 0 1-1.85 1.995L14 20h-3a2 2 0 0 1-1.995-1.85L9 18v-1a1 1 0 0 0-1.993-.117L7 17v1a2 2 0 0 1-1.85 1.995L5 20H2a2 2 0 0 1-1.995-1.85L0 18v-3a2 2 0 0 1 1.85-1.995L2 13h1a1 1 0 0 0 .117-1.993L3 11H2A2 2 0 0 1 .005 9.15L0 9V6a2 2 0 0 1 1.85-1.995L2 4h3V3a3 3 0 0 1 3-3"
      ></Path>
    </Svg>
  );
};

export default RulesSvg;
