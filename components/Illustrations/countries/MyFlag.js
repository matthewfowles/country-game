import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgMyFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="MY_Flag_svg__a"
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
    <G mask="url(#MY_Flag_svg__a)">
      <Path fill="#C00" d="M0 0h640v480H0V0Z" />
      <Path fill="#C00" d="M0 0h640v34.3H0V0Z" />
      <Path fill="#fff" d="M0 34.3h640v34.3H0V34.3Z" />
      <Path fill="#C00" d="M0 68.6h640v34.3H0V68.6Z" />
      <Path fill="#fff" d="M0 102.9h640V137H0v-34.1Z" />
      <Path fill="#C00" d="M0 137.1h640v34.3H0v-34.3Z" />
      <Path fill="#fff" d="M0 171.4h640v34.3H0v-34.3Z" />
      <Path fill="#C00" d="M0 205.7h640V240H0v-34.3Z" />
      <Path fill="#fff" d="M0 240h640v34.3H0V240Z" />
      <Path fill="#C00" d="M0 274.3h640v34.3H0v-34.3Z" />
      <Path fill="#fff" d="M0 308.6h640v34.3H0v-34.3Z" />
      <Path fill="#C00" d="M0 342.9h640V377H0v-34.1Z" />
      <Path fill="#fff" d="M0 377.1h640v34.3H0v-34.3Z" />
      <Path fill="#C00" d="M0 411.4h640v34.3H0v-34.3Z" />
      <Path fill="#fff" d="M0 445.7h640V480H0v-34.3Z" />
      <Path fill="#006" d="M0 .5h320v274.3H0V.5Z" />
      <Path
        fill="#FC0"
        d="m207.502 73.8 6 40.7 23-34-12.4 39.2 35.5-20.8-28.1 30 41-3.2-38.3 14.8 38.3 14.8-41-3.2 28.1 30-35.5-20.8 12.3 39.3-23-34.1-6 40.7-5.9-40.7-23 34 12.4-39.2-35.5 20.8 28-30-41 3.2 38.4-14.8-38.3-14.8 41 3.2-28.1-30 35.5 20.8-12.4-39.3 23 34.1 6-40.7Zm-33.3 1.7a71.104 71.104 0 0 0-91.4 31.065 71.1 71.1 0 0 0-8.6 33.935 71.097 71.097 0 0 0 65.496 70.917 71.106 71.106 0 0 0 34.504-5.917 80.005 80.005 0 0 1-83.2 6.2 80 80 0 0 1-43.4-71.2 80 80 0 0 1 126.6-65Z"
      />
    </G>
  </Svg>
);
export default SvgMyFlag;
