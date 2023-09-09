import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgVnFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="VN_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.031 0H639.97v480H.031V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#VN_Flag_svg__a)">
      <Path fill="#DA251D" d="M-40 0h720v480H-40V0Z" />
      <Path
        fill="#FF0"
        d="m407.75 357.188-84-62.532-83.438 63.094L271.25 255l-83.438-63.469 103.219-.937 32.063-102.563 32.531 102.281 103.219.094-82.969 64.125 31.781 102.75.094-.093Z"
      />
    </G>
  </Svg>
);
export default SvgVnFlag;
