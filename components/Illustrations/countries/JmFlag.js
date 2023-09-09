import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgJmFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="m0 0 320 240L0 480V0Zm640 0L320 240l320 240V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#090"
      fillRule="evenodd"
      d="m0 0 320 240L640 0H0Zm0 480 320-240 320 240H0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FC0"
      fillRule="evenodd"
      d="M640 0h-59.6L0 435.3V480h59.6L640 44.7V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FC0"
      fillRule="evenodd"
      d="M0 0v44.7L580.4 480H640v-44.7L59.6 0H0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgJmFlag;
