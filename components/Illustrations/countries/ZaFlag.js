import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgZaFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 642 480"
    {...props}
  >
    <Mask
      id="ZA_Flag_svg__a"
      width={642}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.995 0h640.018v479.99H.995V0Z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#ZA_Flag_svg__a)">
      <Path
        fill="#000"
        d="M.995 382.304V97.873l211.777 142.216L.902 382.304h.093Z"
      />
      <Path
        fill="#000C8A"
        d="m145.461 480.083 237.745-159.934h337.68V479.99H145.461v.093Z"
      />
      <Path
        fill="#E1392D"
        d="M130.274 0h590.612v160.122H383.112S133.367-1.594 130.274 0Z"
      />
      <Path
        fill="#FFB915"
        d="M.995 59.998v37.875l211.777 142.122L.902 382.304v37.781l266.712-179.997L.901 59.998h.094Z"
      />
      <Path
        fill="#007847"
        d="M.995 59.999V0h89.06l282.37 191.246H720.98v97.685H372.425L89.962 479.99H.995v-59.905l266.619-179.996L1.089 59.999H.995Z"
      />
      <Path
        fill="#fff"
        d="M89.962 0h55.499l237.745 160.028h337.68v31.218H372.425L89.962.094V0Zm0 480.083h55.499l237.745-159.934h337.68v-31.124H372.425L89.962 479.99v.093Z"
      />
    </G>
  </Svg>
);
export default SvgZaFlag;
