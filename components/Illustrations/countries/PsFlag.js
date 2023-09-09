import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgPsFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 642 480"
    {...props}
  >
    <Mask
      id="PS_Flag_svg__a"
      width={642}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.977 0h640.031v480H.977V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#PS_Flag_svg__a)">
      <Path fill="#000" d="M-119.023 0h960v160.031h-960V0Z" />
      <Path fill="#fff" d="M-119.023 160.031h960v159.938h-960V160.031Z" />
      <Path fill="#090" d="M-119.023 319.969h960V480h-960V319.969Z" />
      <Path fill="red" d="m-119.023 480 480-240-480-240v480Z" />
    </G>
  </Svg>
);
export default SvgPsFlag;
