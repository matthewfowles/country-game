import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgJoFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="JO_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.063 0H640v480H.062V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#JO_Flag_svg__a)">
      <Path fill="#000" d="M.063 0h959.999v160.031h-960V0Z" />
      <Path fill="#fff" d="M.063 160.031h959.999v159.938h-960V160.031Z" />
      <Path fill="#090" d="M.063 319.969h959.999V480h-960V319.969Z" />
      <Path fill="red" d="m.063 480 479.999-240L.062 0v480Z" />
      <Path
        fill="#fff"
        d="m133.469 270.938 5.343-23.344h-23.906l21.563-10.313-14.907-18.656 21.563 10.313 5.25-23.25 5.344 23.343 21.469-10.406-15.001 18.656 21.563 10.313h-23.813l5.344 23.344-14.906-18.75-14.906 18.75Z"
      />
    </G>
  </Svg>
);
export default SvgJoFlag;
