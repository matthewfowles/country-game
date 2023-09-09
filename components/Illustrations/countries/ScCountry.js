import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgScCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 568 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m556.473 475.169-.004-.136-.072-.115L258.577 1.734l-.279-.443-.429.298L1.715 179.495l-.446.31.345.419 118.604 143.865.044.054.057.039 226.96 157.617 47.937 210.526.046.199.171.111L565.792 802.42l.8.516-.03-.951-10.089-326.816Z"
    />
    <Mask
      id="SC_Country_svg__a"
      width={566}
      height={802}
      x={1}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path
        fill="#CCC"
        stroke="#fff"
        strokeWidth={0.5}
        d="M555.974 475.184 566.063 802 395.704 692.214l-47.981-210.715-227.119-157.728L2 179.906 258.154 2l297.82 473.184Z"
      />
    </Mask>
    <G mask="url(#SC_Country_svg__a)">
      <Path fill="#fff" d="M-249 2H817.667v800H-249V2Z" />
      <Path fill="#D92223" d="M-249 802V2H817.667v266.667L-249 802Z" />
      <Path fill="#FCD955" d="M-249 802V2h711.167L-249 802Z" />
      <Path fill="#003D88" d="M-249 802V2h355.5L-249 802Z" />
      <Path fill="#007A39" d="M-249 802 817.667 535.333V802H-249Z" />
    </G>
  </Svg>
);
export default SvgScCountry;
