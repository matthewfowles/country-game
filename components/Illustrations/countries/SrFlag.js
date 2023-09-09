import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSrFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Path fill="#377E3F" d="M.102 0h640v480h-640V0Z" />
    <Path fill="#fff" d="M.102 96h640v288h-640V96Z" />
    <Path fill="#B40A2D" d="M.102 144h640v192h-640V144Z" />
    <Path
      fill="#ECC81D"
      d="m319.999 153.2 56.4 173.6-147.7-107.3h182.6l-147.7 107.3 56.4-173.6Z"
    />
  </Svg>
);
export default SvgSrFlag;
