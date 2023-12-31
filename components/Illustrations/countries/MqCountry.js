import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgMqCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 686 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m685.026 680.3.023-.13-.044-.124-75.43-212.066-.018-.048-.026-.044-33.376-55.016-.034-.056-.047-.045-77.06-73.975 25.875-87.496.05-.171-.069-.165-14.829-35.243-.123-.293-.317-.013-43.714-1.841L336.822 88.825l-.055-.053-.069-.035-174.35-87.184-.12-.06-.134.008-92.108 5.566-.147.009-.118.086-56.884 41.432-.171.124-.03.21-11.131 79.128-.022.156.07.139 136.636 270.78.044.087.073.064 63.676 55.639.098.085.126.028 160.417 34.42-136.542 127.945-.173.162.017.237 2.471 35.866.008.116.059.101 43.903 75.412.152.26.301-.012 284.746-11.725 64.745 84.488.241.315.361-.163 43.904-19.792.241-.108.046-.261L685.026 680.3Z"
    />
    <Mask
      id="MQ_Country_svg__a"
      width={684}
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
        d="M684.534 680.213 666.61 782.208 622.707 802l-64.903-84.694-285.005 11.735-43.904-75.411-2.472-35.867 137.239-128.597-161.351-34.621-63.676-55.639L2 128.126l11.132-79.128L70.016 7.566 162.125 2l174.35 87.185 129.201 124.88 43.904 1.849 14.829 35.244-25.961 87.788 77.28 74.186 33.375 55.016 75.431 212.065Z"
      />
    </Mask>
    <G mask="url(#MQ_Country_svg__a)">
      <Path fill="#fff" d="M-190 2H876.667v800H-190V2Z" />
      <Path fill="#002654" d="M-190 2h355.5v800H-190V2Z" />
      <Path fill="#CE1126" d="M521.172 2h355.5v800h-355.5V2Z" />
    </G>
  </Svg>
);
export default SvgMqCountry;
