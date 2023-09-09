import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLvFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#981E32"
      fillRule="evenodd"
      d="M0 0h640v192H0V0Zm0 288h640v192H0V288Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLvFlag;
