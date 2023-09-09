import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgNaFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="NA_Flag_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#NA_Flag_svg__a)">
      <Path fill="#fff" d="M0 0h640v480H0V0Z" />
      <Path fill="#3662A2" d="m-26.398.2.8 345.6L512.502 0l-538.9.2Z" />
      <Path
        fill="#38A100"
        d="m666.405 479.6-1.4-359.3-542.7 359.5 544-.2h.1Z"
      />
      <Path
        fill="#C70000"
        d="m-26 371.8.4 108.2 117.5-.1L665.4 95.4l-.7-94.1-116-1L-26 371.7v.1Z"
      />
      <Path
        fill="#FFE700"
        d="m219.605 172-21.8-13.2-12.6 22.1-12.2-22.2-22 12.9.6-25.4-25.4.2 13.2-21.8-22.1-12.5 22.2-12.3-12.8-22 25.4.6-.1-25.5 21.7 13.2 12.6-22.1 12.2 22.2 22-12.9-.6 25.4 25.4-.2-13.2 21.8 22.1 12.5-22.2 12.3 12.8 22-25.4-.6.2 25.5Z"
      />
      <Path
        fill="#3662A2"
        d="M232.403 112.4c0 25.6-20.9 46.3-46.6 46.3-25.7 0-46.6-20.7-46.6-46.3 0-25.6 20.8-46.2 46.6-46.2s46.6 20.7 46.6 46.2Z"
      />
      <Path
        fill="#FFE700"
        d="M222.305 112.4a36.5 36.5 0 1 1-73-.002 36.5 36.5 0 0 1 73 .002Z"
      />
    </G>
  </Svg>
);
export default SvgNaFlag;
