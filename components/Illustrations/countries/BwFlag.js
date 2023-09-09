import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBwFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#00CBFF"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 160h640v160H0V160Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M0 186h640v108H0V186Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBwFlag;
