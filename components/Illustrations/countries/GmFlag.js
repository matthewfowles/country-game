import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgGmFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="GM_Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#GM_Flag_svg__a)">
      <Path fill="red" d="M0-80h640v213.3H0V-80Z" />
      <Path fill="#fff" d="M0 133.3h640V169H0v-35.7Z" />
      <Path fill="#009" d="M0 168.9h640V311H0V168.9Z" />
      <Path fill="#fff" d="M0 311.1h640v35.6H0v-35.6Z" />
      <Path fill="#090" d="M0 346.7h640V560H0V346.7Z" />
    </G>
  </Svg>
);
export default SvgGmFlag;
