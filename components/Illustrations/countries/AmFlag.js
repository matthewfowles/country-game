import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAmFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#D90012" d="M0 0h640v160H0V0Z" />
    <Path fill="#0033A0" d="M0 160h640v160H0V160Z" />
    <Path fill="#F2A800" d="M0 320h640v160H0V320Z" />
  </Svg>
);
export default SvgAmFlag;
