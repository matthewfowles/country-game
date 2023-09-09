import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgScFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    <Path fill="#D92223" d="M0 480V0h640v160L0 480Z" />
    <Path fill="#FCD955" d="M0 480V0h426.7L0 480Z" />
    <Path fill="#003D88" d="M0 480V0h213.3L0 480Z" />
    <Path fill="#007A39" d="m0 480 640-160v160H0Z" />
  </Svg>
);
export default SvgScFlag;
