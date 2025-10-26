import React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from 'src/constants';

const ArrowSvg = (props: SvgProps) => {
  return (
    <Svg fill="none" viewBox="0 0 19 14" {...props}>
      <Path
        fill={props.color || COLORS.lightBrown}
        d="M8.993.113.253 6.367a.6.6 0 0 0-.253.49v.001a.6.6 0 0 0 .254.492l8.74 6.213a.6.6 0 0 0 .866-.179.6.6 0 0 0 .088-.314v-2.924h7.85a.604.604 0 0 0 .604-.604v-5.41a.603.603 0 0 0-.605-.603H9.948V.604a.606.606 0 0 0-.955-.49"
      ></Path>
    </Svg>
  );
};

export default ArrowSvg;
