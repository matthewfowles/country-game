import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgPkFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="PK_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.969 0h639.937v480H.969V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#PK_Flag_svg__a)">
      <Path fill="#0C590B" d="M-39.063 0h720.001v480h-720V0Z" />
      <Path
        fill="#fff"
        d="M-39.063 0h180.469v480H-39.063V0ZM428.469 211.312l-29.25-6.187-15.375 25.594-3.188-29.625-29.062-6.75 27.187-12.188-2.531-29.718 20.062 22.124 27.469-11.625-14.906 25.875 19.687 22.5h-.093Z"
      />
      <Path
        fill="#fff"
        d="M439.437 286.875a113.618 113.618 0 0 1-107.984 66.192 113.617 113.617 0 0 1-43.235-10.505 114.469 114.469 0 0 1-55.781-151.968 111.197 111.197 0 0 1 66.938-60.282 146.668 146.668 0 0 0-11.063 10.219 105.284 105.284 0 0 0 4.924 146.212 105.284 105.284 0 0 0 146.295.132h-.094Z"
      />
    </G>
  </Svg>
);
export default SvgPkFlag;
