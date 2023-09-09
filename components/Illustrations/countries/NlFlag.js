import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNlFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#21468B" d="M0 0h640v480H0V0Z" />
    <Path fill="#fff" d="M0 0h640v320H0V0Z" />
    <Path fill="#AE1C28" d="M0 0h640v160H0V0Z" />
  </Svg>
);
export default SvgNlFlag;
