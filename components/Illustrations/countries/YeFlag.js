import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgYeFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 0h640v472.8H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F10600"
      fillRule="evenodd"
      d="M0 0h640v157.4H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M0 322.6h640V480H0V322.6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgYeFlag;
