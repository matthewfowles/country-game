import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgIlFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 643 482"
    {...props}
  >
    <Mask
      id="IL_Flag_svg__a"
      width={643}
      height={482}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.756 0H642.4v481.28H.756V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#IL_Flag_svg__a)">
      <Path fill="#fff" d="M665.336 481.28H-22.18V0h687.516v481.28Z" />
      <Path
        fill="#0038B8"
        d="M665.336 108.288H-22.18V45.12h687.516v63.168Zm0 329.47H-22.18V374.59h687.516v63.168Zm-454.02-258.5L314.81 359.362l105.75-179.258-209.244-.752v-.094Z"
      />
      <Path
        fill="#fff"
        d="m295.352 298.732 19.646 33.37 20.116-33.182-39.856-.188h.094Z"
      />
      <Path
        fill="#0038B8"
        d="M210.939 301.364 314.527 121.26l105.656 179.352-209.244.752Z"
      />
      <Path
        fill="#fff"
        d="m295.353 180.104 19.646-33.37 20.116 33.276-39.856.094h.094Zm-41.172 74.73-20.398 33.84 38.54-.094-18.142-33.84v.094Zm-20.022-62.51 38.728.282-18.612 34.122-20.116-34.404Zm142.128 62.98 19.646 33.37-39.198-.47 19.552-32.9Zm19.27-62.98-38.728.282 18.612 34.122 20.116-34.404Zm-107.442 0-26.696 48.316 27.072 47.282 49.632 1.128 30.08-48.41-27.824-48.88-52.264.47v.094Z"
      />
    </G>
  </Svg>
);
export default SvgIlFlag;
