import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCrFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#0000B4"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 75.4h640v322.3H0V75.4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#D90000"
      fillRule="evenodd"
      d="M0 157.7h640v157.7H0V157.7Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCrFlag;
