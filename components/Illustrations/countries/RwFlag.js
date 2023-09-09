import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRwFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#20603D" d="M0 0h640v480H0V0Z" />
    <Path fill="#FAD201" d="M0 0h640v360H0V0Z" />
    <Path fill="#00A1DE" d="M0 0h640v240H0V0Z" />
    <Path
      fill="#E5BE01"
      d="m588.403 125.4-53.6 3.133 50.933 16.934-52.533-10.867 44.867 29.467-48.001-24.134 35.601 40.201-40.067-35.667 24.133 48-29.533-44.867 10.8 52.467-16.867-50.867-3.133 53.6-.667-78.067 78.067.667Z"
    />
    <Path
      fill="#E5BE01"
      d="m588.403 125.4-53.6-3.134 50.933-16.933-52.533 10.867 44.867-29.467-48.001 24.133 35.601-40.2-40.067 35.667 24.133-48-29.533 44.867 10.8-52.467-16.867 50.867-3.133-53.6-.667 78.066 78.067-.666Z"
    />
    <Path
      fill="#E5BE01"
      d="m433.601 125.4 53.6 3.133-50.933 16.934 52.533-10.867-44.867 29.467 48.001-24.134-35.601 40.201 40.067-35.667-24.133 48 29.533-44.867-10.8 52.467 16.867-50.867 3.133 53.6.667-78.067-78.067.667Z"
    />
    <Path
      fill="#E5BE01"
      d="m433.601 125.4 53.6-3.134-50.933-16.933 52.533 10.867-44.867-29.467 48.001 24.133-35.601-40.2 40.067 35.667-24.133-48 29.533 44.867-10.8-52.467 16.867 50.867 3.133-53.6.667 78.066-78.067-.666Z"
    />
    <Path
      fill="#E5BE01"
      stroke="#00A1DE"
      strokeWidth={2.267}
      d="M511.003 148.267c12.629 0 22.867-10.238 22.867-22.867 0-12.629-10.238-22.867-22.867-22.867-12.628 0-22.866 10.238-22.866 22.867 0 12.629 10.238 22.867 22.866 22.867Z"
    />
  </Svg>
);
export default SvgRwFlag;