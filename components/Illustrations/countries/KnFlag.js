import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgKnFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="KN_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.006 0h640.032v480H.006V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#KN_Flag_svg__a)">
      <Path fill="#FFE900" d="M-25.962.188h691.5V479.53h-691.5V.187Z" />
      <Path fill="#35A100" d="m-26.337.188.75 345.562L512.538 0-26.337.188Z" />
      <Path
        fill="#C70000"
        d="m666.381 479.531-1.312-359.25-542.813 359.531 544.125-.281Z"
      />
      <Path
        fill="#000"
        d="M-26.056 371.812-25.587 480l117.468-.188L665.35 95.344l-.562-94.031L548.725.188-25.962 371.812h-.094Z"
      />
      <Path
        fill="#fff"
        d="m431.725 146.813-9.187-39.563 31.218 25.312 35.625-23.062-16.312 38.719 31.312 25.312-41.437-1.406-16.219 38.719-9.281-39.563-41.344-1.406 35.625-23.062Zm-258 167.812-9.281-39.656 31.219 25.312 35.625-23.062-16.313 38.719 31.313 25.312-41.344-1.406-16.313 38.718L179.444 339l-41.344-1.406 35.625-22.969Z"
      />
    </G>
  </Svg>
);
export default SvgKnFlag;
