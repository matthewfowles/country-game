import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGlFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    <Path
      fill="#D00C33"
      d="M0 240h640v240H0V240Zm80 0a160 160 0 1 0 319.998 0A160 160 0 0 0 80 240Z"
    />
  </Svg>
);
export default SvgGlFlag;
