import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgCuFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 643 482"
    {...props}
  >
    <Mask
      id="CU_Flag_svg__a"
      width={643}
      height={482}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.922 0H642.66v481.28H.922V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#CU_Flag_svg__a)">
      <Path fill="#002A8F" d="M.922 0h721.92v481.28H.922V0Z" />
      <Path
        fill="#fff"
        d="M.922 96.256h721.92v96.256H.922V96.256Zm0 192.512h721.92v96.256H.922v-96.256Z"
      />
      <Path fill="#CB1515" d="M.922 0 415.18 240.358.922 480.34V0Z" />
      <Path
        fill="#fff"
        d="m183.092 305.97-44.65-33.37-44.368 33.652 16.544-54.614-44.368-33.84 54.802-.376 17.014-54.52 17.39 54.332 54.802.094-44.086 34.122 16.92 54.52Z"
      />
    </G>
  </Svg>
);
export default SvgCuFlag;
