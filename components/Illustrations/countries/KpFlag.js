import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgKpFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 481"
    {...props}
  >
    <Mask
      id="KP_Flag_svg__a"
      width={641}
      height={481}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.888.994H640.95v479.998H.982L.888.994Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#KP_Flag_svg__a)">
      <Path
        fill="#fff"
        stroke="#000"
        strokeWidth={0.938}
        d="M723.839 480.523H-75.064V1.369h798.903v479.154Z"
      />
      <Path
        fill="#3E5698"
        d="M723.839 393.788H-75.064v86.735h798.903v-86.735Z"
      />
      <Path
        fill="#C60000"
        d="M723.839 373.721H-75.064V108.17h798.903v265.551Z"
      />
      <Path fill="#3E5698" d="M723.839 1.462H-75.064v86.642h798.903V1.462Z" />
      <Path
        fill="#fff"
        d="M304.228 240.946c0 59.543-49.697 107.833-111.209 107.833S81.81 300.489 81.81 240.946 131.507 133.3 193.02 133.3c61.418 0 111.209 48.197 111.209 107.74v-.094Z"
      />
      <Path
        fill="#C40000"
        d="m161.044 254.636-53.448-38.164 66.575-.187 21.286-62.262 19.785 61.981 66.575-.375-54.292 38.632 19.973 61.981-53.448-38.164-54.385 38.726 21.379-62.168Z"
      />
    </G>
  </Svg>
);
export default SvgKpFlag;
