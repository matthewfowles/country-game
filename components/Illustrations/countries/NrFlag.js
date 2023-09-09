import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgNrFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="NR_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.016 0h640.031v480H.016V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#NR_Flag_svg__a)">
      <Path fill="#002170" d="M-79.953 0h960v480h-960V0Z" />
      <Path fill="#FFB20D" d="M-79.953 219.469h960v41.156h-960v-41.156Z" />
      <Path
        fill="#fff"
        d="m202.984 410.625-30.937-30.938-9.844 42.563-11.25-42.188-29.906 31.875 11.344-42.187-41.72 12.656 30.938-30.937-42.562-9.938 42.187-11.25-31.875-29.812 42.188 11.25L118.797 270l30.937 30.937 9.938-42.562 11.25 42.187 29.812-31.874-11.25 42.187 41.719-12.656-30.937 30.937L242.828 339l-42.187 11.25 31.875 30-42.188-11.438 12.656 41.813Z"
      />
    </G>
  </Svg>
);
export default SvgNrFlag;
