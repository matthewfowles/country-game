import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHuFlag = (props) => (
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
      fill="#388D00"
      fillRule="evenodd"
      d="M640 480H0V320h640v160Z"
      clipRule="evenodd"
    />
    <Path
      fill="#D43516"
      fillRule="evenodd"
      d="M640 160.1H0V.1h640v160Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHuFlag;
