import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgAgCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 219 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m150.846 802.494.289.044.18-.231 34.307-44.219 22.827-13.318.149-.087.064-.161 9.171-23.284.034-.085.001-.092.385-31.697.004-.371-.353-.112-23.93-7.591-32.363-37.324-.08-.092-.113-.045-84.394-33.597-.315-.125-.233.246-74.84 79.045-.164.174.033.238 5.349 38.946.009.068.027.063 24.053 55.366.11.254.274.041 119.519 17.946Zm1.666-644.832.065-.117-.004-.134-2.295-96.608-.005-.186-.125-.137-29.401-32.467-.119-.131-.174-.027-46.12-7.235L39.66 1.562l-.281-.155-.258.192L24.228 12.68l-.171.127-.027.211-2.669 21-.012.098.026.095 26.721 99.66.052.194.171.104 87.448 53.082.448.271.251-.459 16.046-29.402Z"
    />
    <Mask
      id="AG_Country_svg__a"
      width={218}
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
        d="M185.286 757.705 150.92 802 31.402 784.054 7.349 728.688 2 689.742l74.839-79.046 84.394 33.597 32.455 37.431 24.065 7.633-.385 31.698-9.171 23.284-22.911 13.366Zm-33.212-600.282-16.047 29.401-87.448-53.081-26.721-99.661 2.668-21L39.42 2 74.17 21.1l46.206 7.248 29.402 32.467 2.296 96.608Z"
      />
    </Mask>
    <G mask="url(#AG_Country_svg__a)">
      <Mask
        id="AG_Country_svg__b"
        width={1067}
        height={800}
        x={-423}
        y={2}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M-423 2H643.719v800H-423V2Z" />
      </Mask>
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#AG_Country_svg__b)">
        <Path fill="#fff" d="M-422.969 2H643.703v800H-422.969V2Z" />
        <Path fill="#000" d="M-422.828 2H643.703v320H-422.969l.141-320Z" />
        <Path fill="#0072C6" d="M-265.18 319.5h750v175h-750v-175Z" />
        <Path
          fill="#CE1126"
          d="M643.703 2.156V802H110.281L643.703 2v.156Zm-1066.672 0V802h533.266L-422.969 2v.156Z"
        />
        <Path
          fill="#FCD116"
          d="M389.664 319.656 270.289 289.5l101.406-76.563-124.531 17.813 64.063-108.594-110.469 64.063 20-126.406-74.844 99.687-30.156-115.625-33.906 119.219L7.164 61.531l21.406 130-110.625-67.656 64.063 108.594-120.938-19.532 99.688 74.688-124.844 32.031h553.75Z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgAgCountry;
