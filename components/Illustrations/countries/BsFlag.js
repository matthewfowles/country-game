import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgBsFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="BS_Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#BS_Flag_svg__a)">
      <Path fill="#fff" d="M980.5 480H1.5V1.8h979V480Z" />
      <Path fill="#FFE900" d="M980.5 344.5H1.5V143.3h979v201.2Z" />
      <Path
        fill="#08CED6"
        d="M980.5 480H1.5V320.6h979V480Zm0-318.7H1.5V2h979v159.3Z"
      />
      <Path
        fill="#000"
        d="M1 0c2.3 0 391.8 236.8 391.8 236.8L0 479.2 1.1 0H1Z"
      />
    </G>
  </Svg>
);
export default SvgBsFlag;
