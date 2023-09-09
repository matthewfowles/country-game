import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgToFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#C10000"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 0h250v200.3H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#C10000"
      fillRule="evenodd"
      d="M102.801 31.2h39.9v139.6h-39.8l-.1-139.6Z"
      clipRule="evenodd"
    />
    <Path
      fill="#C10000"
      fillRule="evenodd"
      d="M192.6 81v40H53V81h139.6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgToFlag;
