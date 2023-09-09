import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBfFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#DE0000"
      fillRule="evenodd"
      d="M639.998 479.6H.398V0h639.6v479.6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#35A100"
      fillRule="evenodd"
      d="M639.6 480H0V240.2h639.6V480Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFF300"
      fillRule="evenodd"
      d="m254.602 276.2-106-72.4h131l40.4-117.2 40.4 117.4 131-.1-106 72.4 40.5 117.3-106-72.6-105.9 72.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBfFlag;
