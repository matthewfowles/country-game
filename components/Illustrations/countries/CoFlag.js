import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCoFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#FFE800"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#00148E"
      fillRule="evenodd"
      d="M0 240h640v240H0V240Z"
      clipRule="evenodd"
    />
    <Path
      fill="#DA0010"
      fillRule="evenodd"
      d="M0 360h640v120H0V360Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCoFlag;
