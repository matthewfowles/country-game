import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBdFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#006A4E" d="M0 0h640v480H0V0Z" />
    <Path
      fill="#F42A41"
      d="M280 400c88.366 0 160-71.634 160-160S368.366 80 280 80s-160 71.634-160 160 71.634 160 160 160Z"
    />
  </Svg>
);
export default SvgBdFlag;
