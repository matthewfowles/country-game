import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSnFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#0B7226"
      fillRule="evenodd"
      d="M0 0h213.3v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FF0"
      fillRule="evenodd"
      d="M213.301 0h213.3v480h-213.3V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#BC0000"
      fillRule="evenodd"
      d="M426.602 0h213.4v480h-213.4V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0B7226"
      d="M342.001 218.8h71.8l-56.6 43.6 20.7 69.3-56.6-43.6-56.6 41.6 20.7-67.3-56.6-43.6h69.8l22.7-71.3 20.7 71.3Z"
    />
  </Svg>
);
export default SvgSnFlag;
