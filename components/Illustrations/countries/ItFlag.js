import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgItFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#009246"
      fillRule="evenodd"
      d="M0 0h213.3v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#CE2B37"
      fillRule="evenodd"
      d="M426.699 0h213.3v480h-213.3V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgItFlag;
