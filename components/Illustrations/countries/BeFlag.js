import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBeFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M0 0h213.3v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFD90C"
      fillRule="evenodd"
      d="M213.297 0h213.4v480h-213.4V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F31830"
      fillRule="evenodd"
      d="M426.703 0h213.3v480h-213.3V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBeFlag;
