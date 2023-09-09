import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgSbFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="SB_Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#SB_Flag_svg__a)">
      <Path fill="#0000D6" d="M0 475.5 925.688 0H0v475.5Z" />
      <Path fill="#006000" d="M960 0 25.5 480H960V0Z" />
      <Path fill="#FC0" d="M960 0h-51.469L0 455.062V480h51.469L960 25.875V0Z" />
      <Path
        fill="#fff"
        d="M66.938 8.531 78 40.875h36.094L84.938 60.656l11.156 32.25-29.156-19.781L37.78 93l11.157-32.25L19.78 40.781h36l11.157-32.25Zm179.156 0 11.156 32.344h36.094l-29.25 19.875L275.344 93 246 73.125l-29.062 19.969 11.156-32.25-29.25-19.969h36.094l11.156-32.344Zm0 135.469 11.156 32.344h36.094l-29.25 19.875 11.25 32.25-29.25-19.969-29.063 19.969 11.157-32.25-29.25-19.969h36.093L246.094 144Zm-89.063-66.938 11.157 32.25h36l-29.063 19.969 11.063 32.25-29.063-19.969-29.25 19.969 11.25-32.25-29.25-19.969h36.094l11.062-32.25ZM66.937 144 78 176.344h36.094l-29.156 19.875 11.156 32.25L66.938 208.5 37.78 228.469l11.25-32.25-29.343-19.969h36L66.938 144Z"
      />
    </G>
  </Svg>
);
export default SvgSbFlag;
