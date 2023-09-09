import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLtFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 481"
    {...props}
  >
    <Path fill="#006A44" d="M640.009 0H0v477.928h640.009V0Z" />
    <Path fill="#C1272D" d="M640.009 320.731H0v159.287h640.009V320.731Z" />
    <Path
      fill="#FDB913"
      fillRule="evenodd"
      d="M0 0h640.019v159.288H0V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLtFlag;
