import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgSgFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="SG_Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#SG_Flag_svg__a)">
      <Path fill="#fff" d="M-20 0h720v480H-20V0Z" />
      <Path fill="#DF0000" d="M-20 0h720v240H-20V0Z" />
      <Path
        fill="#fff"
        d="M146 40.2a84.402 84.402 0 0 0-47.531 136.033A84.402 84.402 0 0 0 146.8 205.4a86.014 86.014 0 0 1-65.55-7.367A85.998 85.998 0 0 1 40.2 146.4a86 86 0 0 1 59-106c16-4.6 30.8-4.7 46.9-.2h-.1Z"
      />
      <Path
        fill="#fff"
        d="m133 110 4.9 15-13-9.2-12.8 9.4 4.7-15.2-12.8-9.3 15.9-.2 5-15 5 15h15.8L133 110Zm17.5 52 5 15.1-13-9.2-12.9 9.3 4.8-15.1-12.8-9.4 15.9-.1 4.9-15.1 5 15h16l-12.9 9.5Zm58.5-.4 4.9 15.2-13-9.3-12.8 9.3 4.7-15.1-12.8-9.3 15.9-.2 5-15 5 15h15.8l-12.7 9.4Zm17.4-51.6 4.9 15.1-13-9.2-12.8 9.3 4.8-15.1-12.9-9.4 16-.1 4.8-15.1 5 15h16l-12.8 9.5Zm-46.3-34.3 5 15.2-13-9.3-12.9 9.4 4.8-15.2-12.8-9.4 15.8-.1 5-15.1 5 15h16l-12.9 9.5Z"
      />
    </G>
  </Svg>
);
export default SvgSgFlag;
