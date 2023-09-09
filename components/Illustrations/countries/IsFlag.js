import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgIsFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="IS_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#IS_Flag_svg__a)">
      <Path fill="#003897" d="M0 0h666.7v480H0V0Z" />
      <Path
        fill="#fff"
        d="M0 186.7h186.7V0h106.6v186.7h373.4v106.6H293.3V480H186.7V293.3H0V186.7Z"
      />
      <Path
        fill="#D72828"
        d="M0 213.3h213.3V0h53.4v213.3h400v53.4h-400V480h-53.4V266.7H0v-53.4Z"
      />
    </G>
  </Svg>
);
export default SvgIsFlag;
