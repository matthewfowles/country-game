import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNeFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#0DB02B" d="M0 0h640v480H0V0Z" />
    <Path fill="#fff" d="M0 0h640v320H0V0Z" />
    <Path
      fill="#E05206"
      d="M0 0h640v160H0V0ZM320 308c37.555 0 68-30.445 68-68s-30.445-68-68-68-68 30.445-68 68 30.445 68 68 68Z"
    />
  </Svg>
);
export default SvgNeFlag;
