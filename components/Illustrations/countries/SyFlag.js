import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSyFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#000" d="M0 0h640v480H0V0Z" />
    <Path fill="#fff" d="M0 0h640v320H0V0Z" />
    <Path fill="#CE1126" d="M0 0h640v160H0V0Z" />
    <Path
      fill="#007A3D"
      d="m161 300 39-120 39 120-102-74.2h126M401 300l39-120 39 120-102-74.2h126"
    />
  </Svg>
);
export default SvgSyFlag;
