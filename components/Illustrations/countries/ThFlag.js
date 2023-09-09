import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgThFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#F4F5F8"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#2D2A4A"
      fillRule="evenodd"
      d="M0 162.5h640v160H0v-160Z"
      clipRule="evenodd"
    />
    <Path
      fill="#A51931"
      fillRule="evenodd"
      d="M0 0h640v82.5H0V0Zm0 400h640v80H0v-80Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgThFlag;
