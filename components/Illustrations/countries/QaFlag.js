import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgQaFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#8D1B3D" d="M0 0h640v480H0V0Z" />
    <Path
      fill="#fff"
      d="M0 0v480h158.4l97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6 97.7-26.7-97.7-26.7 97.7-26.6-97.7-26.7 97.8-26.7-97.8-26.6L256.1 80l-97.7-26.7 97.8-26.6L158.3 0H0Z"
    />
  </Svg>
);
export default SvgQaFlag;
