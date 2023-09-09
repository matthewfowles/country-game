import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgAgFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 642 480"
    {...props}
  >
    <Mask
      id="AG_Flag_svg__a"
      width={642}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.984 0h640.032v480H.984V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#AG_Flag_svg__a)">
      <Path fill="#fff" d="M1 0h640.003v480H1V0Z" />
      <Path fill="#000" d="M1.084 0h639.919v192H1L1.084 0Z" />
      <Path fill="#0072C6" d="M95.672 190.5h450v105h-450v-105Z" />
      <Path
        fill="#CE1126"
        d="M641.003.094V480H320.95L641.003 0v.094ZM1 .094V480h319.959L1 0v.094Z"
      />
      <Path
        fill="#FCD116"
        d="M488.578 190.594 416.953 172.5l60.844-45.938-74.719 10.688 38.438-65.156-66.282 38.437 12-75.844L342.328 94.5l-18.094-69.375-20.343 71.531-44.813-60.937 12.844 78-66.375-40.594 38.437 65.156-72.562-11.719 59.812 44.813-74.906 19.219h332.25Z"
      />
    </G>
  </Svg>
);
export default SvgAgFlag;
