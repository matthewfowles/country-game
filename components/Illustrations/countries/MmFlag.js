import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMmFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#FECB00" d="M0 0h640v480H0V0Z" />
    <Path fill="#34B233" d="M0 160h640v320H0V160Z" />
    <Path fill="#EA2839" d="M0 320h640v160H0V320Z" />
    <Path fill="#fff" d="m320.001 80.02 53.064 176.88H266.938l53.063-176.88Z" />
    <Path
      fill="#fff"
      d="m216.039 399.999 61.038-174.289 85.859 62.38-146.897 111.909Z"
    />
    <Path
      fill="#fff"
      d="m151.78 202.241 184.621 4.192-32.795 100.934L151.78 202.241Z"
    />
    <Path
      fill="#fff"
      d="M488.226 202.241 336.401 307.367l-32.796-100.934 184.621-4.192Z"
    />
    <Path
      fill="#fff"
      d="M423.969 399.999 277.072 288.09l85.859-62.38 61.038 174.289Z"
    />
  </Svg>
);
export default SvgMmFlag;
