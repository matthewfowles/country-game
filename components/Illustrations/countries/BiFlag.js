import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgBiFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="BI_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.055 0h639.843v480H.055V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#BI_Flag_svg__a)">
      <Path
        fill="#18B637"
        d="m-81.977 0 402 240-402 240V0Zm804 0-402 240 402 240V0Z"
      />
      <Path
        fill="#CF0921"
        d="m-81.977 0 402 240 402-240h-804Zm0 480 402-240 402 240h-804Z"
      />
      <Path
        fill="#fff"
        d="M722.023 0h-74.906L-81.977 435.281V480H-7.07L722.023 44.719V0Z"
      />
      <Path
        fill="#fff"
        d="M458.867 240a138.797 138.797 0 1 1-277.594 0 138.753 138.753 0 0 1 138.75-138.75A138.751 138.751 0 0 1 458.773 240h.094Z"
      />
      <Path
        fill="#fff"
        d="M-81.977 0v44.719L647.117 480h74.906v-44.719L-7.07 0h-74.907Z"
      />
      <Path
        fill="#CF0921"
        stroke="#18B637"
        strokeWidth={3.656}
        d="m347.398 187.687-18.093.282-9.375 15.375-9.282-15.375-18-.375 8.719-15.844-8.625-15.75 18-.375 9.375-15.375 9.281 15.469 18 .375-8.718 15.75 8.718 15.843Zm-60.562 104.625-18 .282-9.375 15.375-9.281-15.375-18-.375 8.718-15.844-8.625-15.75 18-.375 9.375-15.375 9.282 15.469 18 .375-8.719 15.75 8.625 15.843Zm122.437 0-18 .282-9.375 15.375-9.375-15.375-17.906-.375 8.719-15.844-8.719-15.75 18-.375 9.375-15.375 9.375 15.469 18 .375-8.812 15.75 8.718 15.843Z"
      />
    </G>
  </Svg>
);
export default SvgBiFlag;
