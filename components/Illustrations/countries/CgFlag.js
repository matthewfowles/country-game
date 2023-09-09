import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgCgFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="CG_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#CG_Flag_svg__a)">
      <Path fill="#FF0" d="M-40 0h720v480H-40V0Z" />
      <Path fill="#00CA00" d="M-40 0v480L440 0H-40Z" />
      <Path fill="red" d="M200 480h480V0L200 480Z" />
    </G>
  </Svg>
);
export default SvgCgFlag;
