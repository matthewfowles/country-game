import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCzFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v240H0V0Z" />
    <Path fill="#D7141A" d="M0 240h640v240H0V240Z" />
    <Path fill="#11457E" d="M360 240 0 0v480l360-240Z" />
  </Svg>
);
export default SvgCzFlag;
