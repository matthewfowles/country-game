import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgSdFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="SD_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h640.031v480H0V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#SD_Flag_svg__a)">
      <Path fill="#000" d="M0 319.969h960V480H0V319.969Z" />
      <Path fill="#fff" d="M0 159.938h960v160.031H0V159.938Z" />
      <Path fill="red" d="M0 0h960.75v160.031H0V0Z" />
      <Path fill="#009A00" d="M0 0v480l319.969-240L0 0Z" />
    </G>
  </Svg>
);
export default SvgSdFlag;
