import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMcFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#F31830"
      fillRule="evenodd"
      d="M0 0h640v240H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 240h640v240H0V240Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMcFlag;
