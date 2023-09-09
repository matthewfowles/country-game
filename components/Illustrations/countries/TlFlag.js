import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgTlFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="TL__Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#TL__Flag_svg__a)">
      <Path fill="#CB000F" d="M0 0h966.75v480H0V0Z" />
      <Path fill="#F8C00C" d="M0 0c3 0 480 240.656 480 240.656L0 480V0Z" />
      <Path
        fill="#000"
        d="M0 0c1.969 0 319.312 240.656 319.312 240.656L0 480V0Z"
      />
      <Path
        fill="#fff"
        d="m175.969 279.563-56.907-12.657L90 316.406l-4.688-55.969-56.906-12.468 51.469-23.344-3.094-55.594 37.688 40.688L166.406 186l-27.094 50.625 36.75 42.938h-.093Z"
      />
    </G>
    <Mask
      id="TL__Flag_svg__b"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#TL__Flag_svg__b)">
      <Path fill="#CB000F" d="M0 0h966.75v480H0V0Z" />
      <Path fill="#F8C00C" d="M0 0c3 0 480 240.656 480 240.656L0 480V0Z" />
      <Path
        fill="#000"
        d="M0 0c1.969 0 319.312 240.656 319.312 240.656L0 480V0Z"
      />
      <Path
        fill="#fff"
        d="m175.969 279.563-56.907-12.657L90 316.406l-4.688-55.969-56.906-12.468 51.469-23.344-3.094-55.594 37.688 40.688L166.406 186l-27.094 50.625 36.75 42.938h-.093Z"
      />
    </G>
  </Svg>
);
export default SvgTlFlag;
