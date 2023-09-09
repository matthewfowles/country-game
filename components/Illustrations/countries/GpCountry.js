import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgGpCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 779 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m583.175 358.547.017-.002.017-.002 192.684-31.974 1.329-.221-1.151-.7-227.669-138.457-50.484-64.646-12.849-70.912-.04-.22-.19-.117-80.802-49.722-.291-.179-.273.206-49.275 37.285-.111.084-.051.129-22.64 56.388-.072.18.068.181 35.423 94.769-49.143 77.923-.112.178.049.205 22.192 92.346.082.34.347.04 96.342 11.096.053.006.053-.005 146.497-14.199ZM256.631 646.601l.111-.063.067-.109 32.408-52.825.082-.134-.009-.157-13.758-231.164 27.918-56.269.223-.448-.448-.222-55.448-27.507-55.454-43.472-.077-.061-.094-.027-132.747-37.732-.247-.07-.2.16-23.968 19.09-.063.05-.044.068-33.302 51.05-.102.157.026.185L44.56 575.203l.013.091.045.081 61.265 110.988.091.165.177.064 49.289 17.762.218.078.2-.115 100.772-57.716Zm447.287 151.007.211-.015.136-.161 33.749-39.954.16-.19-.054-.242-11.11-49.722-.024-.11-.069-.088-46.606-59.938-.233-.299-.351.143-31.527 12.885-.092.037-.071.071-53.719 53.272-.173.172.029.242 9.321 77.239.037.306.289.104 30.633 11.11.1.036.106-.007 69.258-4.891Z"
    />
    <Mask
      id="GP_Country_svg__a"
      width={776}
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
        d="m583.127 358.049-146.498 14.199-96.342-11.096-22.192-92.345 49.276-78.133-35.511-95.001 22.64-56.388L403.775 2l80.802 49.722 12.871 71.034 50.616 64.815 227.747 138.504-192.684 31.974ZM256.383 646.167l-100.772 57.716-49.289-17.762-61.266-110.987L2 267.032l33.302-51.05 23.967-19.09 132.746 37.732 55.494 43.504 55.494 27.53-27.978 56.388 13.765 231.297-32.407 52.824Zm447.5 150.942L634.624 802l-30.632-11.11-9.322-77.238 53.719-53.272 31.527-12.885 46.606 59.938 11.11 49.722-33.749 39.954Z"
      />
    </Mask>
    <G mask="url(#GP_Country_svg__a)">
      <Path fill="#fff" d="M-144 2H922.667v800H-144V2Z" />
      <Path fill="#002654" d="M-144 2h355.5v800H-144V2Z" />
      <Path fill="#CE1126" d="M567.164 2h355.5v800h-355.5V2Z" />
    </G>
  </Svg>
);
export default SvgGpCountry;
