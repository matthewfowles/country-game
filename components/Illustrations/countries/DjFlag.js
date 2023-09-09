import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgDjFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 643 482"
    {...props}
  >
    <Mask
      id="DJ_Flag_svg__a"
      width={643}
      height={482}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.898 0h641.738v481.28H.898V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#DJ_Flag_svg__a)">
      <Path fill="#0C0" d="M.898 0h721.92v481.28H.898V0Z" />
      <Path fill="#69F" d="M.898 0h721.92v240.64H.898V0Z" />
      <Path fill="#FFFEFE" d="m.898 0 359.738 240.358L.898 480.34V0Z" />
      <Path
        fill="red"
        d="M151.112 274.48 122.16 253.8l-28.858 21.056 10.716-34.216-28.764-21.15 35.626-.282 10.998-34.122 11.28 34.028h35.626l-28.67 21.338 10.998 34.216v-.188Z"
      />
    </G>
  </Svg>
);
export default SvgDjFlag;
