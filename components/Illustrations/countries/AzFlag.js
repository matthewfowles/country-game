import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAzFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Path fill="#3F9C35" d="M.102 0h640v480h-640V0Z" />
    <Path fill="#ED2939" d="M.102 0h640v320h-640V0Z" />
    <Path fill="#00B9E4" d="M.102 0h640v160h-640V0Z" />
    <Path
      fill="#fff"
      d="M304 312c39.765 0 72-32.235 72-72s-32.235-72-72-72-72 32.235-72 72 32.235 72 72 72Z"
    />
    <Path
      fill="#ED2939"
      d="M320 300c33.137 0 60-26.863 60-60s-26.863-60-60-60-60 26.863-60 60 26.863 60 60 60Z"
    />
    <Path
      fill="#fff"
      d="m384 200 7.7 21.5 20.6-9.8-9.8 20.7L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8L384 200Z"
    />
  </Svg>
);
export default SvgAzFlag;
