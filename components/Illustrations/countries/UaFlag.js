import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUaFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="gold"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0057B8"
      fillRule="evenodd"
      d="M0 0h640v240H0V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUaFlag;
