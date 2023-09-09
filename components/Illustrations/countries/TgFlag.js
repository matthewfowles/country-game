import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgTgFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="TG_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h640.031v480H0V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#TG_Flag_svg__a)">
      <Path fill="#FFE300" d="M0 0h719.625v480H0V0Z" />
      <Path
        fill="#118600"
        d="M0 195.094h719.625v96.468H0v-96.468ZM0 .188h719.625v96.468H0V.187Z"
      />
      <Path fill="#D80000" d="M0 .281h287.344V291.47H0V.281Z" />
      <Path
        fill="#fff"
        d="M126 120.375c0-.75 17.719-49.688 17.719-49.688l15.937 48.938s53.813 1.594 53.813.75c0-.844-42.469 32.156-42.469 32.156s20.062 56.25 19.219 54.563c-.75-1.594-46.5-33.75-46.5-33.75S97.125 205.5 97.969 205.5c.75 0 17.625-52.969 17.625-52.969l-41.719-31.312 52.125-.844Z"
      />
      <Path fill="#118600" d="M0 383.625h719.625V480H0v-96.375Z" />
    </G>
  </Svg>
);
export default SvgTgFlag;
