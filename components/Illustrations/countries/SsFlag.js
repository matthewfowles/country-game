import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSsFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#078930" d="M0 336h640v144H0V336Z" />
    <Path fill="#fff" d="M0 144h640v192H0V144Z" />
    <Path fill="#000" d="M0 0h640v144H0V0Z" />
    <Path fill="#DA121A" d="M0 168h640v144H0V168Z" />
    <Path fill="#0F47AF" d="m0 0 415.7 240L0 480V0Z" />
    <Path
      fill="#FCDD09"
      d="m200.699 194.8-139 45.2 139 45.1-85.8-118.1v146l85.8-118.2Z"
    />
  </Svg>
);
export default SvgSsFlag;
