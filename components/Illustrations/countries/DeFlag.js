import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDeFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#FFCE00" d="M0 320h640v160H0V320Z" />
    <Path fill="#000" d="M0 0h640v160H0V0Z" />
    <Path fill="#D00" d="M0 160h640v160H0V160Z" />
  </Svg>
);
export default SvgDeFlag;
