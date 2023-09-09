import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSiFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#EF2B2D" d="M0 0h640v480H0V0Z" />
    <Path fill="#fff" d="M180 0h120v480H180V0Z" />
    <Path fill="#fff" d="M0 180h640v120H0V180Z" />
    <Path fill="#002868" d="M210 0h60v480h-60V0Z" />
    <Path fill="#002868" d="M0 210h640v60H0v-60Z" />
  </Svg>
);
export default SvgSiFlag;
