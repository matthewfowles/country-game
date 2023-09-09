import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgLyFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="LY_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.031 0h639.936v480H.031V0Z" />
    </Mask>
    <G mask="url(#LY_Flag_svg__a)">
      <Path fill="#239E46" d="M-160 0h960v480h-960V0Z" />
      <Path fill="#000" d="M-160 0h960v360h-960V0Z" />
      <Path fill="#E70013" d="M-160 0h960v120h-960V0Z" />
      <Path
        fill="#fff"
        d="M362.429 197.568a52.129 52.129 0 1 0-54.143 88.777 52.129 52.129 0 0 0 54.143-3.913 59.999 59.999 0 0 1-92.31-9.099 59.997 59.997 0 0 1 0-66.666 60 60 0 0 1 92.31-9.099ZM349.181 240l80.736-26.208-49.92 68.64v-84.864l49.92 68.64L349.181 240Z"
      />
    </G>
  </Svg>
);
export default SvgLyFlag;
