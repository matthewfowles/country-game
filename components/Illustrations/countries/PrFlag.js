import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgPrFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="PR_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.031 0h640.031v480H.032V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#PR_Flag_svg__a)">
      <Path fill="#ED0000" d="M.031 0h720v480h-720V0Z" />
      <Path fill="#fff" d="M.031 96h720v96h-720V96Zm0 192h720v96h-720v-96Z" />
      <Path fill="#0050F0" d="m.031 0 413.156 239.719L.031 479.062V0Z" />
      <Path
        fill="#fff"
        d="m181.625 305.156-44.437-33.281-44.25 33.562 16.5-54.468-44.25-33.75 54.656-.375 16.968-54.375 17.344 54.187 54.656.094-43.968 34.031 16.875 54.375h-.094Z"
      />
    </G>
  </Svg>
);
export default SvgPrFlag;
