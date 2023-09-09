import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPlFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M640 480H0V0h640v480Z"
      clipRule="evenodd"
    />
    <Path
      fill="#DC143C"
      fillRule="evenodd"
      d="M640 480H0V240h640v240Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlFlag;
