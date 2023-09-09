import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    <Path fill="#002654" d="M0 0h213.3v480H0V0Z" />
    <Path fill="#CE1126" d="M426.699 0h213.3v480h-213.3V0Z" />
  </Svg>
);
export default SvgReFlag;
