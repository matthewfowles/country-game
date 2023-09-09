import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgNrCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 682 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m680.927 353.061.087-.151-.026-.172-37.694-252.579-.04-.27-.25-.112L423.121 1.543l-.188-.084-.193.074L90.632 127.894l-.236.089-.068.243-88.81 318.116-.046.164.065.158 121.649 299.411.103.253.268.051 299.268 56.112.349.066.177-.308 257.576-449.188Z"
    />
    <Mask
      id="NR_Country_svg__a"
      width={680}
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
        d="M680.494 352.812 422.917 802l-299.268-56.113L2 446.476l88.81-318.115L422.917 2 642.8 100.233l37.694 252.579Z"
      />
    </Mask>
    <G mask="url(#NR_Country_svg__a)">
      <Mask
        id="NR_Country_svg__b"
        width={1067}
        height={800}
        x={-192}
        y={2}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M-192 2H874.719v800H-192V2Z" />
      </Mask>
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#NR_Country_svg__b)">
        <Path fill="#002170" d="M-325.281 2H1274.72v800H-325.281V2Z" />
        <Path
          fill="#FFB20D"
          d="M-325.281 367.781H1274.72v68.594H-325.281v-68.594Z"
        />
        <Path
          fill="#fff"
          d="m146.281 686.375-51.562-51.563-16.406 70.938-18.75-70.313-49.844 53.125 18.906-70.312-69.531 21.094 51.562-51.563-70.937-16.562 70.312-18.75-53.125-49.688 70.313 18.75L5.969 452l51.562 51.562 16.563-70.937 18.75 70.312 49.687-53.125-18.75 70.313 69.531-21.094-51.562 51.563L212.688 567l-70.313 18.75 53.125 50-70.312-19.063 21.093 69.688Z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgNrCountry;
