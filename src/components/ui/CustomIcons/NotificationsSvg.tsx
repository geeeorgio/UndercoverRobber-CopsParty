import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const NotificationsSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 18 18" {...props}>
      <Path
        fill={props.color || COLORS.darkRed}
        d="m3.14 11.928 2.828 2.828a2 2 0 1 1-2.828-2.828m8.867 5.325-.706.706L0 6.66l.706-.707 1.102.157c.754.108 1.689-.122 2.077-.51L7.77 1.715a5.993 5.993 0 0 1 8.475 8.475l-3.885 3.885c-.388.388-.618 1.323-.51 2.077z"
      ></Path>
    </Svg>
  );
};

export default NotificationsSvg;
