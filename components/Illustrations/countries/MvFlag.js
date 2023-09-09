import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMvFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#D21034" d="M0 0h640v480H0V0Z" />
    <Path fill="#007E3A" d="M120 120h400v240H120V120Z" />
    <Path
      fill="#fff"
      d="M350 320c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80Z"
    />
    <Path
      fill="#007E3A"
      d="M380 320c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80Z"
    />
  </Svg>
);
export default SvgMvFlag;
