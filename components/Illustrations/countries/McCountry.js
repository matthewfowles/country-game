import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgMcCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 804 715"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m802.196 371.976.345-.147-.044-.372-23.274-196.466-.029-.246-.214-.126L484.138 1.569l-.213-.125-.229.093-252.579 102.945-.104.042-.076.084-196.61 215.17-.114.126-.014.17L1.502 713.149l-.07.827.764-.326 800-341.674Z"
    />
    <Mask
      id="MC_Country_svg__a"
      width={802}
      height={713}
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
        d="M802 371.516 2 713.19l32.697-393.075 196.609-215.17L483.885 2l294.842 173.05L802 371.516Z"
      />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#MC_Country_svg__a)">
      <Path fill="#F31830" d="M-131-42H935.667v400H-131V-42Z" />
      <Path fill="#fff" d="M-131 358H935.667v400H-131V358Z" />
    </G>
  </Svg>
);
export default SvgMcCountry;
