import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLuFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#00A1DE" d="M0 240h640v240H0V240Z" />
    <Path fill="#ED2939" d="M0 0h640v240H0V0Z" />
    <Path fill="#fff" d="M0 160h640v160H0V160Z" />
  </Svg>
);
export default SvgLuFlag;
