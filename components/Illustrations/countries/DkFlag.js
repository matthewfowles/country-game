import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDkFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Path fill="#C8102E" d="M0 0h640.1v480H0V0Z" />
    <Path fill="#fff" d="M205.699 0h68.6v480h-68.6V0Z" />
    <Path fill="#fff" d="M0 205.7h640.1v68.6H0v-68.6Z" />
  </Svg>
);
export default SvgDkFlag;
