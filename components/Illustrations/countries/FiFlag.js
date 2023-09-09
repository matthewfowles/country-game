import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFiFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    <Path fill="#002F6C" d="M0 174.5h640v131H0v-131Z" />
    <Path fill="#002F6C" d="M175.498 0h130.9v480h-131l.1-480Z" />
  </Svg>
);
export default SvgFiFlag;
