import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVcFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#F4F100"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#199A00"
      fillRule="evenodd"
      d="M490 0h150v480H490V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0058AA"
      fillRule="evenodd"
      d="M0 0h150v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#199A00"
      fillRule="evenodd"
      d="m259.3 130-46.4 71.3 44.7 74.4 43.8-73.7-42.1-72Zm121.2 0-46.3 71.3 44.7 74.4 43.8-73.7-42.2-72Zm-61.2 97.3-46.4 71.4 44.8 74.4 43.8-73.7-42.2-72v-.1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgVcFlag;
