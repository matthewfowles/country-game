import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgWsFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path
      fill="#CE1126"
      fillRule="evenodd"
      d="M0 0h640v480H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#002B7F"
      fillRule="evenodd"
      d="M0 0h320v240H0V0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m180 229.3-20.7-14-19.9 14.1 6.5-24.9-19-15.2 24.5-1.5 8.1-23.6 8.8 24 24 .7-19 16.3 6.7 24.1Zm-3.6-165.6L159.8 53l-16 10.4 4.4-20-14.6-12.7 19.4-1.6 7.2-18.6 7.4 18.7 19.1 1.7L172 44.3l4.4 19.4Zm-73 59.5-16-11-16.7 11 5.2-19.4L60.8 91 80 90l7-19 6.8 18.9 19.6 1.1-15 12.5 5 19.7ZM250 110l-15.4-10-15 10 4.4-18.3-14-11.8 18.3-1.5 6.3-17.2 7 17.4 17.7 1-13.7 12.3L250 110Zm-43.1 43.4-10.3-6.4-10.3 6.6 2.7-12.3-9.2-8.3 12-1 4.6-11.6 4.9 11.6 11.9 1-9.1 8.3 2.8 12.1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWsFlag;
