import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="red"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M170 195h300v90H170v-90Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M275 90h90v300h-90V90Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgChFlag;
