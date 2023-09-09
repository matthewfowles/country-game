import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgLaFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="LA_Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#LA_Flag_svg__a)">
      <Path fill="#CE1126" d="M-40 0h720v480H-40V0Z" />
      <Path fill="#002868" d="M-40 119.3h720v241.4H-40V119.3Z" />
      <Path
        fill="#fff"
        d="M423.4 240a103.402 103.402 0 0 1-176.515 73.115A103.402 103.402 0 0 1 320 136.6 103.402 103.402 0 0 1 423.4 240Z"
      />
    </G>
  </Svg>
);
export default SvgLaFlag;
