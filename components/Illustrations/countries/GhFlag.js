import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGhFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#006B3F" d="M0 0h640v480H0V0Z" />
    <Path fill="#FCD116" d="M0 0h640v320H0V0Z" />
    <Path fill="#CE1126" d="M0 0h640v160H0V0Z" />
    <Path
      fill="#000"
      d="m319.998 160 52 160-136.1-98.9h168.1l-136 98.9 52-160Z"
    />
  </Svg>
);
export default SvgGhFlag;
