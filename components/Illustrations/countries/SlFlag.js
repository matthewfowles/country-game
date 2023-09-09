import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSlFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#0000CD"
      fillRule="evenodd"
      d="M0 320.3h640V480H0V320.3Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 160.7h640v159.6H0V160.7Z"
      clipRule="evenodd"
    />
    <Path
      fill="#00CD00"
      fillRule="evenodd"
      d="M0 0h640v160.7H0V0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSlFlag;
