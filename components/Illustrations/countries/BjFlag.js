import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgBjFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="BJ_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.96.012h640.027v479.986H.961V.012Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#BJ_Flag_svg__a)">
      <Path fill="#319400" d="M-64 .012h320.013v479.986H-64V.012Z" />
      <Path fill="#FFD600" d="M256.016.012h640.026v239.993H256.016V.012Z" />
      <Path
        fill="#DE2110"
        d="M256.016 240.005h640.026v239.993H256.016V240.005Z"
      />
    </G>
  </Svg>
);
export default SvgBjFlag;
