import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgCfFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="CF_Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#CF_Flag_svg__a)">
      <Path fill="#00F" d="M-39.602 0h719.3v119h-719.3V0Z" />
      <Path fill="#FF0" d="M-39.602 359.6h719.3V480h-719.3V359.6Z" />
      <Path fill="#009A00" d="M-39.602 239.3h719.3v120.3h-719.3V239.3Z" />
      <Path fill="#fff" d="M-39.602 119h719.3v120.3h-719.3V119Z" />
      <Path fill="red" d="M260.102.5h119.9V480h-119.9V.5Z" />
      <Path
        fill="#FF0"
        d="m111.697 105.7-31.5-21.8-31.3 22 10.9-36.9-30.5-23 38.2-1 12.5-36.3 12.7 36.3 38.1.7-30.2 23.3"
      />
    </G>
  </Svg>
);
export default SvgCfFlag;
