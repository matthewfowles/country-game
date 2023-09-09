import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgLrFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="LR_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h640.031v480H0V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#LR_Flag_svg__a)">
      <Path fill="#fff" d="M0 0h719.906v480H0V0Z" />
      <Path fill="#006" d="M0 0h218.156v218.25H0V0Z" />
      <Path fill="#C00" d="M0 435.844h719.906V480H0v-44.156Z" />
      <Path
        fill="#C00"
        d="M0 436.312h719.906V480H0v-43.688Zm0-87.093h719.906v43.312H0v-43.312Zm0-87.375h718.125v43.781H0v-43.781ZM218.156 0h501.656v43.594H218.156V0Zm0 174.375h501.656v43.875H218.156v-43.875Zm0-86.906h501.656v43.593H218.156V87.469Z"
      />
      <Path
        fill="#fff"
        d="m155.906 166.406-47.531-29.062-47.25 29.343 17.531-47.718L31.5 89.531l58.406-.375L108 41.625l18.562 47.438h58.407L138 118.78l17.906 47.625Z"
      />
    </G>
  </Svg>
);
export default SvgLrFlag;
