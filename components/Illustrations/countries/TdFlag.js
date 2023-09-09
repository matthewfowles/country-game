import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTdFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#000067"
      fillRule="evenodd"
      d="M0 0h214v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="red"
      fillRule="evenodd"
      d="M426 0h214v480H426V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FF0"
      fillRule="evenodd"
      d="M214 0h212v480H214V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTdFlag;
