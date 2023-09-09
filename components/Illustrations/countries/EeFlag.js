import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEeFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#000" d="M640 0H0v477.9h640V0Z" />
    <Path fill="#fff" d="M640 320.7H0V480h640V320.7Z" />
    <Path
      fill="#1791FF"
      fillRule="evenodd"
      d="M0 0h640v159.3H0V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEeFlag;
