import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGwFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#CE1126" d="M0 0h220v480H0V0Z" />
    <Path fill="#FCD116" d="M220 0h420v240H220V0Z" />
    <Path fill="#009E49" d="M220 240h420v240H220V240Z" />
    <Path fill="#000" d="m110 160-24.721 76.085 38.042 12.36" />
    <Path fill="#000" d="m110 160 24.721 76.085-38.042 12.36" />
    <Path fill="#000" d="M186.084 215.279h-80v40" />
    <Path fill="#000" d="m186.084 215.279-64.721 47.023-23.512-32.361" />
    <Path fill="#000" d="M157.021 304.721 132.3 228.637l-38.042 12.36" />
    <Path fill="#000" d="m157.021 304.721-64.72-47.023 23.511-32.36" />
    <Path fill="#000" d="m62.977 304.721 64.721-47.022-23.511-32.361" />
    <Path fill="#000" d="m62.977 304.721 24.72-76.084 38.043 12.361" />
    <Path fill="#000" d="m33.916 215.279 64.721 47.022 23.512-32.36" />
    <Path fill="#000" d="M33.916 215.279h80v40" />
  </Svg>
);
export default SvgGwFlag;
