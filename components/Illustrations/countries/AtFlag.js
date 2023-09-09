import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAtFlag = (props) => (
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
      fill="#C8102E"
      fillRule="evenodd"
      d="M640 480H0V320h640v160Zm0-319.9H0V.1h640v160Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAtFlag;
