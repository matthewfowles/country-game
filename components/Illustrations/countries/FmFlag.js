import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgFmFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 643 482"
    {...props}
  >
    <Mask
      id="FM_Flag_svg__a"
      width={643}
      height={482}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.879 0h641.644v481.28H.879V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#FM_Flag_svg__a)">
      <Path fill="#6797D6" d="M-159.578 0h962.56v481.28h-962.56V0Z" />
      <Path
        fill="#fff"
        d="m321.514 115.62-30.456 20.868 11.656-33.746-30.55-20.868h37.694l11.656-33.746 11.656 33.84h37.6l-30.456 20.774 11.656 33.746M321.514 366.6l-30.456-20.868 11.656 33.84-30.55 20.774h37.694l11.656 33.746 11.656-33.84 37.6.094-30.456-20.868 11.656-33.746m-177.096-86.856-23.03 28.764 1.316-35.72-35.25-10.998 36.096-10.998 1.222-35.72 20.962 28.952 36.096-11.092-23.124 28.858 21.056 28.858m257.748-10.998 23.124 28.858-1.316-35.72 35.25-10.998-36.096-10.998-1.222-35.72-20.962 28.952-36.096-11.092 23.124 28.858-21.056 28.858"
      />
    </G>
  </Svg>
);
export default SvgFmFlag;
