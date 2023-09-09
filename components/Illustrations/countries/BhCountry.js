import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgBhCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 275 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m257.224 663.38.027-.069.005-.073 16.407-216.688.003-.034-.002-.033-12.904-221.961-.008-.13-.069-.109-85.338-134.446 46.132-77.035.331-.554-.619-.183L185.444 1.52l-.121-.035-.123.026L30.601 33.735l-.258.054-.101.244-28.704 69.096-.063.152.04.161 60.273 241.183-38.614 168.548-.041.183.088.165 128.862 240.12.038.07.058.055 50.937 48.596.543.518.269-.701 53.296-138.799Z"
    />
    <Mask
      id="BH_Country_svg__a"
      width={273}
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
        d="M256.757 663.201 203.461 802l-50.937-48.596-128.862-240.12 38.64-168.664L2 103.32l28.704-69.095L185.302 2l35.746 10.545-46.29 77.3 85.503 134.706 12.904 221.961-16.408 216.689Z"
      />
    </Mask>
    <G mask="url(#BH_Country_svg__a)">
      <Path fill="#fff" d="M-395 2H671.667v800H-395" />
      <Path
        fill="#CE1126"
        d="M671.667 2H-235l184.5 80-184.5 80 184.5 80-184.5 80 184.5 80-184.5 80 184.5 80-184.5 80 184.5 80-184.5 80h906.667"
      />
    </G>
  </Svg>
);
export default SvgBhCountry;
