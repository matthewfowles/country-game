import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSeFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#005293" d="M0 0h640v480H0V0Z" />
    <Path
      fill="#FECB00"
      d="M176 0v192H0v96h176v192h96V288h368v-96H272V0h-96Z"
    />
  </Svg>
);
export default SvgSeFlag;
