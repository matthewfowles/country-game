import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMuFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#00A04D"
      fillRule="evenodd"
      d="M0 360h640v120H0V360Z"
      clipRule="evenodd"
    />
    <Path
      fill="#151F6D"
      fillRule="evenodd"
      d="M0 120h640v120H0V120Z"
      clipRule="evenodd"
    />
    <Path
      fill="#EE2737"
      fillRule="evenodd"
      d="M0 0h640v120H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFCD00"
      fillRule="evenodd"
      d="M0 240h640v120H0V240Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMuFlag;
