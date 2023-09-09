import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGyFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#399408"
      fillRule="evenodd"
      d="M2.4 0H640v480H2.4V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M.2 0c-.9 0 619.6 241.5 619.6 241.5L0 479.8.2 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFDE08"
      fillRule="evenodd"
      d="M.3 20.2c3.4 0 559.001 217.9 555.901 220l-554.3 223L.3 20.3v-.1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M1.9.8c1.8 0 290.901 240.9 290.901 240.9L1.801 477V.8h.1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#DE2110"
      fillRule="evenodd"
      d="M.3 33.9c1.6-15 260.899 208.4 260.899 208.4l-261 209.4V33.9h.1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgGyFlag;
