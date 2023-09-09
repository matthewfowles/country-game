import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMrFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#CD2A3E" d="M0 0h640v480H0V0Z" />
    <Path fill="#006233" d="M0 72h640v336H0V72Z" />
    <Path
      fill="#FFC400"
      d="M470 154.6a149.996 149.996 0 0 1-150 150 150 150 0 0 1-150-150 154.914 154.914 0 0 0-5 39.2 154.997 154.997 0 0 0 155 155 155 155 0 0 0 155-155 154.408 154.408 0 0 0-5-39.2Z"
    />
    <Path
      fill="#FFC400"
      d="m320 93.8-13.5 41.5H263l35.3 25.6-13.5 41.4 35.3-25.6 35.3 25.6-13.5-41.4 35.3-25.6h-43.6L320 93.8Z"
    />
  </Svg>
);
export default SvgMrFlag;
