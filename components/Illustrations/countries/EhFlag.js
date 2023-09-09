import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgEhFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 643 482"
    {...props}
  >
    <Mask
      id="EH_Flag_svg__a"
      width={643}
      height={482}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.621 0H642.36v481.28H.621V0Z" />
    </Mask>
    <G mask="url(#EH_Flag_svg__a)">
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M.996 0h640.046v239.982H.996V0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#007A3D"
        fillRule="evenodd"
        d="M.996 239.982h640.046v239.982H.996V239.982Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M.996 139.966h640.046v200.032H.996V139.966Z"
        clipRule="evenodd"
      />
      <Path
        fill="#C4111B"
        fillRule="evenodd"
        d="m.996 0 319.976 239.982L.996 479.964V0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#C4111B"
        d="M480.959 303.996c35.354 0 64.014-28.66 64.014-64.014s-28.66-64.014-64.014-64.014-64.014 28.66-64.014 64.014 28.66 64.014 64.014 64.014Z"
      />
      <Path
        fill="#fff"
        d="M505.026 303.996c35.354 0 64.014-28.66 64.014-64.014s-28.66-64.014-64.014-64.014-64.014 28.66-64.014 64.014 28.66 64.014 64.014 64.014Z"
      />
      <Path
        fill="#C4111B"
        fillRule="evenodd"
        d="m463.759 278.71 27.354-19.458 27.072 19.74-10.152-31.96 27.26-19.646-33.558-.188-10.34-31.96-10.528 31.866-33.558-.188 26.978 19.928-10.434 31.96-.094-.094Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgEhFlag;
