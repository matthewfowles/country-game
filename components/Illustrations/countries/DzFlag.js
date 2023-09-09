import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDzFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M320 0h320v480H320V0Z" />
    <Path fill="#006233" d="M0 0h320v480H0V0Z" />
    <Path
      fill="#D21034"
      d="M424.001 180a120 120 0 1 0 0 120 96.005 96.005 0 0 1-48.497 32.287 96.005 96.005 0 0 1-104.763-36.772A95.999 95.999 0 0 1 424.001 180Zm4 60-108-35.2 67.2 92V183.2l-67.2 92 108-35.2Z"
    />
  </Svg>
);
export default SvgDzFlag;
