import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgSoFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="SO_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.031 0H639.97v480H.031V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#SO_Flag_svg__a)">
      <Path fill="#40A6FF" d="M-40 0h720v480H-40V0Z" />
      <Path
        fill="#fff"
        d="m395.469 357.375-77.344-50.156-76.969 50.625 28.594-82.219-76.875-50.813 95.25-.75 29.437-82.031 30.094 81.844 95.063.094-76.407 51.281 29.251 82.125h-.094Z"
      />
    </G>
  </Svg>
);
export default SvgSoFlag;
