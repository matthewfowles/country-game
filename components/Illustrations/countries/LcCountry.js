import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgLcCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 391 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m372.416 579.81.053-.099.004-.112 17.785-402.602.004-.074-.019-.072L345.759 1.877l-.162-.638-.571.327-76.366 43.738-.08.046-.059.07-108.247 131.984-.014.017-.012.018L21.589 380.585l-.059.086-.02.103L1.51 486.804l-.016.081.012.082 25.207 175.722.033.232.2.123 227.628 139.382.455.279.248-.472 117.14-222.423Z"
    />
    <Mask
      id="LC_Country_svg__a"
      width={390}
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
        d="M371.974 579.577 254.834 802 27.207 662.618 2 486.896l20.002-106.03L160.66 177.721 268.908 45.738 345.274 2l44.485 174.975-17.785 402.602Z"
      />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#LC_Country_svg__a)">
      <Path fill="#65CFFF" d="M-337 2H729.667v800H-337V2Z" />
      <Path fill="#fff" d="m194.5 72 271.167 658.833-537.667 1.5L194.5 72Z" />
      <Path
        fill="#000"
        d="M194.667 162.833 429.333 729.5l-465 1.333 230.334-568Z"
      />
      <Path
        fill="#FFCE00"
        d="M194.5 402.167 465.667 731.5-72 732.333l266.5-330.166Z"
      />
    </G>
  </Svg>
);
export default SvgLcCountry;
