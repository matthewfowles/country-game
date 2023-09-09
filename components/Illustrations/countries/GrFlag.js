import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGrFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#0D5EAF"
      fillRule="evenodd"
      d="M0 0h640v53.3H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 53.3h640v53.4H0V53.3Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0D5EAF"
      fillRule="evenodd"
      d="M0 106.7h640V160H0v-53.3Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 160h640v53.3H0V160Z"
      clipRule="evenodd"
    />
    <Path fill="#0D5EAF" d="M0 0h266.7v266.7H0V0Z" />
    <Path
      fill="#0D5EAF"
      fillRule="evenodd"
      d="M0 213.3h640v53.4H0v-53.4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 266.7h640V320H0v-53.3Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0D5EAF"
      fillRule="evenodd"
      d="M0 320h640v53.3H0V320Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 373.3h640v53.4H0v-53.4ZM106.699 0h53.3v266.7h-53.3V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 106.7h266.7V160H0v-53.3Z"
      clipRule="evenodd"
    />
    <Path fill="#0D5EAF" d="M0 426.7h640V480H0v-53.3Z" />
  </Svg>
);
export default SvgGrFlag;
