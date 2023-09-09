import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMaFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#C1272D" d="M640 0H0v480h640V0Z" />
    <Path
      stroke="#006233"
      strokeWidth={11.7}
      d="m319.998 179.4-35.6 109.6 93.2-67.6h-115.2l93.2 67.6-35.6-109.6Z"
    />
  </Svg>
);
export default SvgMaFlag;
