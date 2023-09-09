import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgJpFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="JP_Flag_svg__a"
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
    <G mask="url(#JP_Flag_svg__a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M-40 0h720v480H-40V0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#BC002D"
        d="M320.054 389.226c82.403 0 149.204-66.801 149.204-149.204S402.457 90.819 320.054 90.819s-149.203 66.8-149.203 149.203 66.8 149.204 149.203 149.204Z"
      />
    </G>
  </Svg>
);
export default SvgJpFlag;
