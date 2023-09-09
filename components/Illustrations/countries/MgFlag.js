import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMgFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#FC3D32"
      fillRule="evenodd"
      d="M213.297 0h426.7v240h-426.7V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#007E3A"
      fillRule="evenodd"
      d="M213.297 240h426.7v240h-426.7V240Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 0h213.3v480H0V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMgFlag;
