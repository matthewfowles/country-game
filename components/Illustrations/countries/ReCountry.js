import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgReCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 804 712"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m747.081 669.379.262-.059.096-.252 32.925-87.007.022-.058.007-.062 22.104-195.659.023-.206-.13-.162-131.684-164.577L568.672 59.575l-.082-.13-.141-.062-86.548-37.633-.071-.03-.076-.008-192.817-20.21-.099-.01-.095.029-183.43 54.54-.189.057-.1.17-80.893 138.276-.032.054-.017.06L1.52 273.217l-.05.178.077.169L104.054 496.98l.029.065.047.054 68.664 79.486.07.081.098.046 257.26 119.444.074.034.079.009 129.808 15.042.084.01.083-.019 186.731-41.853Z"
    />
    <Mask
      id="RE_Country_svg__a"
      width={802}
      height={710}
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
        d="M746.971 668.892 560.24 710.745l-129.807-15.042-257.261-119.445-68.664-79.486L2 273.355l22.563-78.539 80.892-138.275L288.885 2l192.816 20.209 86.548 37.633 102.049 161.786L802 386.226l-22.103 195.658-32.926 87.008Z"
      />
    </Mask>
    <G mask="url(#RE_Country_svg__a)">
      <Path fill="#fff" d="M-131-44H935.667v800H-131V-44Z" />
      <Path fill="#002654" d="M-131-44h355.5v800H-131V-44Z" />
      <Path fill="#CE1126" d="M580.164-44h355.5v800h-355.5V-44Z" />
    </G>
  </Svg>
);
export default SvgReCountry;
