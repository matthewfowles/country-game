import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTtFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    <Path
      fill="#E00000"
      fillRule="evenodd"
      d="M463.7 480 0 1v478.8l463.7.2ZM176.3 0 640 479V.2L176.3 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M27.7.2h118.599l468.2 479.3h-122.3L27.699.2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTtFlag;
