import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgMvCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 119 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m105.179 67.7.19-.1.058-.209 4.79-17.435.009-.033.004-.034 2.52-19.102 3.94-14.595.012-.045.004-.046.841-10.688.028-.362-.335-.14-8.156-3.373-.299-.124-.236.223-10.696 10.13-.082.078-.04.106-7.299 19.084-10.673 17.68-.013.021-.01.022-6.456 13.504-.103.217.104.216 4.499 9.28.106.219.237.052 12.928 2.815.18.04.161-.087 13.787-7.313ZM29.323 801.09l.188-.015.13-.136 14.628-15.186.082-.085.035-.112 5.906-18.852.09-.285-.209-.213-11.812-12.096-.156-.159-.223.009-20.534.85-.2.008-.14.145-13.22 13.778-.116.122-.02.167-2.249 19.409-.023.202.124.161 10.404 13.503.167.216.27-.023 16.878-1.408Z"
    />
    <Mask
      id="MV_Country_svg__a"
      width={117}
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
        d="m104.944 67.259-13.786 7.314-12.928-2.816-4.499-9.28 6.456-13.503 10.696-17.718 7.314-19.126L108.893 2l8.155 3.374-.841 10.687-3.949 14.628-2.523 19.135-4.791 17.435ZM29.281 800.592 12.404 802 2 788.497l2.25-19.41 13.22-13.778 20.533-.85 11.812 12.096-5.906 18.851-14.628 15.186Z"
      />
    </Mask>
    <G mask="url(#MV_Country_svg__a)">
      <Path fill="#D21034" d="M-416 2H650.667v800H-416V2Z" />
      <Path fill="#007E3A" d="M-216 202h666.667v400H-216V202Z" />
      <Path
        fill="#fff"
        d="M167.333 535.333c73.638 0 133.334-59.695 133.334-133.333s-59.696-133.333-133.334-133.333S34 328.362 34 402s59.695 133.333 133.333 133.333Z"
      />
      <Path
        fill="#007E3A"
        d="M217.333 535.333c73.638 0 133.334-59.695 133.334-133.333s-59.696-133.333-133.334-133.333S84 328.362 84 402s59.695 133.333 133.333 133.333Z"
      />
    </G>
  </Svg>
);
export default SvgMvCountry;
