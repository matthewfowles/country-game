import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCdFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#007FFF" d="M0 0h640v480H0V0Z" />
    <Path
      fill="#F7D618"
      d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2L28.8 96ZM600 0 0 360v120h40l600-360V0h-40Z"
    />
    <Path fill="#CE1021" d="M640 0 0 384v96L640 96V0Z" />
  </Svg>
);
export default SvgCdFlag;
