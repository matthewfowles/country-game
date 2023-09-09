import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgIdFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#E70011" d="M0 0h640v240H0V0Z" />
    <Path fill="#fff" d="M0 240h640v240H0V240Z" />
  </Svg>
);
export default SvgIdFlag;
