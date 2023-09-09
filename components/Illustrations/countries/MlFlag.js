import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMlFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="red"
      fillRule="evenodd"
      d="M425.803 0h214.2v480h-214.3l.1-480Z"
      clipRule="evenodd"
    />
    <Path
      fill="#009A00"
      fillRule="evenodd"
      d="M0 0h212.9v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FF0"
      fillRule="evenodd"
      d="M212.898 0h214v480h-214V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMlFlag;
