import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLcFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#65CFFF"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m318.9 42 162.7 395.3-322.6.9L318.9 42Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="m319 96.5 140.8 340-279 .8L319 96.5Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFCE00"
      fillRule="evenodd"
      d="m318.9 240.1 162.7 197.6-322.6.5 159.9-198.1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLcFlag;
