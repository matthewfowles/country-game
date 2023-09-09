import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMkFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#D20000" d="M0 0h640v480H0V0Z" />
    <Path
      fill="#FFE600"
      d="M0 0h96l224 231.4L544 0h96L0 480h96l224-231.4L544 480h96L0 0Zm640 192v96L0 192v96l640-96ZM280 0l40 205.7L360 0h-80Zm0 480 40-205.7L360 480h-80Z"
    />
    <Path
      fill="#FFE600"
      stroke="#D20000"
      strokeWidth={17.1}
      d="M319.998 317.1c42.582 0 77.1-34.519 77.1-77.1 0-42.581-34.518-77.1-77.1-77.1-42.581 0-77.1 34.519-77.1 77.1 0 42.581 34.519 77.1 77.1 77.1Z"
    />
  </Svg>
);
export default SvgMkFlag;
