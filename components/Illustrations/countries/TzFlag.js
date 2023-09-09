import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgTzFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="TZ_Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#TZ_Flag_svg__a)">
      <Path fill="#09F" d="M-40 0h720v480H-40V0Z" />
      <Path fill="#090" d="M-40 0h720L-40 480V0Z" />
      <Path fill="#000" d="M-40 480h160l560-380V0H520L-40 380v100Z" />
      <Path
        fill="#FF0"
        d="M-40 366 508.8 0h54L-40 402v-36ZM77.2 480 680 78v36L131.2 480h-54Z"
      />
    </G>
  </Svg>
);
export default SvgTzFlag;
