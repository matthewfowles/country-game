import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRuFlag = (props) => (
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
      fill="#0039A6"
      fillRule="evenodd"
      d="M0 160h640v320H0V160Z"
      clipRule="evenodd"
    />
    <Path
      fill="#D52B1E"
      fillRule="evenodd"
      d="M0 320h640v160H0V320Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRuFlag;
