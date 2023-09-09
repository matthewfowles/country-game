import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGaFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#FFE700"
      fillRule="evenodd"
      d="M640 480H0V0h640v480Z"
      clipRule="evenodd"
    />
    <Path
      fill="#36A100"
      fillRule="evenodd"
      d="M640 160H0V0h640v160Z"
      clipRule="evenodd"
    />
    <Path
      fill="#006DBC"
      fillRule="evenodd"
      d="M640 480H0V320h640v160Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgGaFlag;
