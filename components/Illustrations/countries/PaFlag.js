import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgPaFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="PA_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    </Mask>
    <G mask="url(#PA_Flag_svg__a)">
      <Path fill="#fff" d="M0 0h640v480H0V0Z" />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M92.498 0h477.2v480h-477.3l.1-480Z"
        clipRule="evenodd"
      />
      <Path
        fill="#DB0000"
        fillRule="evenodd"
        d="M323 3.6h358v221.7H323V3.6Z"
        clipRule="evenodd"
      />
      <Path
        fill="#0000AB"
        fillRule="evenodd"
        d="M3.2 225.3h319.899V480H3.199V225.3Zm211.599-47.6-42-29.4-41.7 29.6 15.5-48-41.6-29.9 51.6-.4 16-48 16.3 47.9h51.6l-41.5 30 15.9 48-.1.2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#D80000"
        fillRule="evenodd"
        d="m516.9 413.9-42.4-27.7-42.1 28 15.6-45.6-42-28 52-.5 16.2-45.4 16.4 45.3h52l-41.8 28.5 16 45.4h.1Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgPaFlag;
