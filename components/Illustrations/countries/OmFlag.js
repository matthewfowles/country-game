import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgOmFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="OM_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h640v480H0V0Z" />
    </Mask>
    <G mask="url(#OM_Flag_svg__a)">
      <Path
        fill="#EF2D29"
        fillRule="evenodd"
        d="M-3.3-21.6h702.299v553h-702.3v-553Z"
        clipRule="evenodd"
      />
      <Path
        fill="#009025"
        fillRule="evenodd"
        d="M174.598 317.3h535.7V525h-535.7V317.3Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M174.6-35.4h564.9v190h-565l.1-190Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.263}
        d="M139.996 69.589h-22.945c-1.238 0-2.242.937-2.242 2.094v10.894c0 1.157 1.004 2.094 2.242 2.094h22.945c1.238 0 2.243-.937 2.243-2.094V71.683c0-1.157-1.005-2.094-2.243-2.094Z"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="M139.42 70.228h-21.773c-1.173 0-2.124.866-2.124 1.934v9.972c0 1.068.951 1.934 2.124 1.934h21.773c1.173 0 2.124-.866 2.124-1.934v-9.972c0-1.069-.951-1.934-2.124-1.934Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.154}
        d="m127.624 73.978 1.311.052.054.603 1.081.55.838-.696 1.014.55-.946.603.23.83 1.189-.051v1.09l-.946-.041-.486.685 1.081.779-.838.643-.906-.685-1.311.27.067 1.007-1.432.104-.19-.976-1.189-.498-.663.685-1.014-.509.595-.779-.716-.498h-1.014l-.054-1.423 1.014.094.716-.83-.838-.645 1.082-.727.77.592 1.311-.187.19-.591Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.166}
        d="M127.997 78.207c.801 0 1.45-.552 1.45-1.234 0-.681-.649-1.233-1.45-1.233-.801 0-1.45.552-1.45 1.233 0 .682.649 1.234 1.45 1.234Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m119.038 70.849-2.124 1.88 2.124-1.88Zm1.409 0-2.123 1.88 2.123-1.88Zm1.39 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.41 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.409 0-2.124 1.88 2.124-1.88Zm1.409 0-2.143 1.88 2.143-1.88Zm1.37 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm-5.617 0-2.084 1.88 2.084-1.88Zm7.046 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.41 0-2.104 1.88 2.104-1.88Zm-2.104 0 2.104 1.88-2.104-1.88Zm-1.41 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm-1.41 0 2.124 1.88-2.124-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm-1.429 0 2.124 1.88-2.124-1.88Zm-1.389 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.103 1.88-2.103-1.88Zm-1.41 0 2.104 1.88-2.104-1.88Zm5.637 0 2.104 1.88-2.104-1.88Zm-7.026 0 2.084 1.88-2.084-1.88Zm-1.429 0 2.124 1.88-2.124-1.88Zm-1.409 0 2.123 1.88-2.123-1.88Zm-1.409 0 2.143 1.88-2.143-1.88Zm2.143 10.681-2.104 1.9 2.104-1.9Zm1.389 0-2.123 1.9 2.123-1.9Zm1.43 0-2.124 1.9 2.124-1.9Zm1.389 0-2.104 1.9 2.104-1.9Zm1.409 0-2.104 1.9 2.104-1.9Zm1.409 0-2.104 1.9 2.104-1.9Zm1.41 0-2.085 1.9 2.085-1.9Zm1.409 0-2.104 1.9 2.104-1.9Zm1.409 0-2.124 1.9 2.124-1.9Zm1.389 0-2.123 1.9 2.123-1.9Zm1.449 0-2.124 1.9 2.124-1.9Zm1.39 0-2.104 1.9 2.104-1.9Zm-5.637 0-2.104 1.9 2.104-1.9Zm7.026 0-2.104 1.9 2.104-1.9Zm1.409 0-2.104 1.9 2.104-1.9Zm1.409 0-2.104 1.9 2.104-1.9Zm1.41 0-2.104 1.9 2.104-1.9Zm-2.104 0 2.104 1.9-2.104-1.9Zm-1.41 0 2.104 1.9-2.104-1.9Zm-1.409 0 2.104 1.9-2.104-1.9Zm-1.409 0 2.104 1.9-2.104-1.9Zm-1.409 0 2.104 1.9-2.104-1.9Zm-1.409 0 2.123 1.9-2.123-1.9Zm-1.429 0 2.123 1.9-2.123-1.9Zm-1.39 0 2.104 1.9-2.104-1.9Zm-1.389 0 2.104 1.9-2.104-1.9Zm-1.409 0 2.104 1.9-2.104-1.9Zm-1.41 0 2.104 1.9-2.104-1.9Zm-1.409 0 2.104 1.9-2.104-1.9Zm5.637 0 2.104 1.9-2.104-1.9Zm-7.026 0 2.084 1.9-2.084-1.9Zm-1.429 0 2.124 1.9-2.124-1.9Zm-1.409 0 2.123 1.9-2.123-1.9Zm-1.39 0 2.104 1.9-2.104-1.9Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="m119.038 70.849-2.124 1.88m3.533-1.88-2.123 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.514-1.88-2.104 1.88m3.513-1.88-2.104 1.88 2.084-1.88m1.429 0-2.124 1.88m3.533-1.88-2.143 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.533-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.514-1.88-2.104 1.88m0-1.88 2.104 1.88m-3.514-1.88 2.104 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.104 1.88m-3.514-1.88 2.124 1.88m-3.533-1.88 2.104 1.88m-3.533-1.88 2.124 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.103 1.88m-3.513-1.88 2.104 1.88m-3.493-1.88 2.084 1.88m-3.513-1.88 2.124 1.88m-3.533-1.88 2.123 1.88m-3.532-1.88 2.143 1.88m0 8.802-2.104 1.898m3.493-1.898-2.123 1.898m3.553-1.898-2.124 1.898m3.513-1.898-2.104 1.898m3.513-1.898-2.104 1.898m3.513-1.898-2.104 1.898m3.514-1.898-2.085 1.898m3.494-1.898-2.104 1.898m3.513-1.898-2.124 1.898m3.513-1.898-2.123 1.898m3.572-1.898-2.124 1.898m3.514-1.898-2.104 1.898m3.493-1.898-2.104 1.898m3.513-1.898-2.104 1.898m3.513-1.898-2.104 1.898m3.514-1.898-2.104 1.898m0-1.898 2.104 1.898m-3.514-1.898 2.104 1.898m-3.513-1.898 2.104 1.898m-3.513-1.898 2.104 1.898m-3.513-1.898 2.104 1.898m-3.513-1.898 2.123 1.898m-3.552-1.898 2.123 1.898m-3.513-1.898 2.104 1.898m-3.493-1.898 2.104 1.898m-3.513-1.898 2.104 1.898m-3.514-1.898 2.104 1.898m-3.513-1.898 2.104 1.898m3.533-1.898 2.104 1.898m-9.13-1.898 2.084 1.898m-3.513-1.898 2.124 1.898m-3.533-1.898 2.123 1.898m-3.513-1.898 2.104 1.898"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.263}
        d="M47.797 68.989H24.852c-1.239 0-2.243.937-2.243 2.094v10.894c0 1.157 1.004 2.094 2.243 2.094h22.945c1.238 0 2.242-.937 2.242-2.094V71.083c0-1.157-1.004-2.094-2.242-2.094Z"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="M47.221 69.627H25.448c-1.173 0-2.124.866-2.124 1.934v9.973c0 1.068.951 1.934 2.124 1.934h21.773c1.173 0 2.124-.866 2.124-1.934V71.56c0-1.068-.95-1.934-2.124-1.934Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.154}
        d="m35.424 73.378 1.312.052.054.603 1.081.55.838-.696 1.014.55-.946.603.23.83 1.19-.051v1.09l-.947-.042-.487.686 1.082.779-.838.643-.906-.685-1.311.27.067 1.007-1.433.104-.189-.976-1.19-.498-.662.685-1.014-.509.595-.779-.716-.498h-1.014l-.054-1.423 1.014.094.716-.831-.838-.644 1.081-.727.77.592 1.312-.187.19-.592Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.166}
        d="M35.798 77.607c.8 0 1.45-.552 1.45-1.234 0-.681-.65-1.233-1.45-1.233-.801 0-1.45.552-1.45 1.233s.649 1.234 1.45 1.234Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m26.839 70.249-2.124 1.88 2.124-1.88Zm1.41 0-2.125 1.88 2.124-1.88Zm1.389 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.41 0-2.105 1.88 2.104-1.88Zm1.408 0-2.104 1.88 2.104-1.88Zm1.41 0-2.104 1.88 2.104-1.88Zm1.409 0-2.124 1.88 2.124-1.88Zm1.409 0-2.144 1.88 2.144-1.88Zm1.37 0-2.105 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm-5.617 0-2.084 1.88 2.084-1.88Zm7.046 0-2.104 1.88 2.104-1.88Zm1.409 0-2.104 1.88 2.104-1.88Zm1.41 0-2.105 1.88 2.104-1.88Zm1.408 0-2.104 1.88 2.104-1.88Zm-2.104 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm-1.41 0 2.105 1.88-2.104-1.88Zm-1.408 0 2.103 1.88-2.103-1.88Zm-1.41 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.124 1.88-2.124-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm-1.43 0 2.125 1.88-2.124-1.88Zm-1.388 0 2.103 1.88-2.103-1.88Zm-1.41 0 2.104 1.88-2.104-1.88Zm-1.409 0 2.104 1.88-2.104-1.88Zm5.637 0 2.104 1.88-2.104-1.88Zm-7.026 0 2.084 1.88-2.084-1.88Zm-1.43 0 2.124 1.88-2.123-1.88Zm-1.409 0 2.124 1.88-2.123-1.88Zm-1.409 0 2.144 1.88-2.144-1.88ZM26.84 80.93l-2.104 1.899 2.104-1.899Zm1.39 0-2.124 1.899 2.123-1.899Zm1.428 0-2.123 1.899 2.123-1.899Zm1.39 0-2.104 1.899 2.104-1.899Zm1.409 0-2.104 1.899 2.104-1.899Zm1.41 0L31.76 82.83l2.104-1.899Zm1.408 0L33.19 82.83l2.084-1.899Zm1.41 0L34.58 82.83l2.104-1.899Zm1.409 0-2.124 1.899 2.124-1.899Zm1.39 0-2.125 1.899 2.124-1.899Zm1.448 0-2.124 1.899 2.124-1.899Zm1.39 0-2.105 1.899 2.104-1.899Zm-5.637 0L34.58 82.83l2.104-1.899Zm7.026 0-2.104 1.899 2.104-1.899Zm1.409 0-2.104 1.899 2.104-1.899Zm1.41 0-2.105 1.899 2.104-1.899Zm1.408 0-2.104 1.899 2.104-1.899Zm-2.104 0 2.104 1.899-2.104-1.899Zm-1.409 0 2.104 1.899-2.104-1.899Zm-1.409 0 2.104 1.899-2.104-1.899Zm-1.41 0 2.105 1.899-2.104-1.899Zm-1.408 0L42.3 82.83l-2.103-1.899Zm-1.41 0 2.124 1.899-2.124-1.899Zm-1.429 0 2.124 1.899-2.124-1.899Zm-1.389 0 2.104 1.899-2.104-1.899Zm-1.39 0 2.105 1.899-2.104-1.899Zm-1.409 0 2.104 1.899-2.104-1.899Zm-1.409 0 2.104 1.899-2.104-1.899Zm-1.409 0 2.104 1.899-2.104-1.899Zm5.637 0 2.104 1.899-2.104-1.899Zm-7.026 0 2.084 1.899-2.084-1.899Zm-1.43 0 2.124 1.899-2.123-1.899Zm-1.409 0 2.124 1.899-2.124-1.899Zm-1.389 0 2.104 1.899-2.104-1.899Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="m26.839 70.249-2.124 1.88m3.533-1.88-2.124 1.88m3.514-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.514-1.88-2.104 1.88 2.084-1.88m1.429 0-2.124 1.88m3.533-1.88-2.144 1.88m3.513-1.88-2.104 1.88m3.514-1.88-2.104 1.88m3.533-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m3.513-1.88-2.104 1.88m0-1.88 2.104 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.103 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.124 1.88m-3.533-1.88 2.104 1.88m-3.533-1.88 2.124 1.88m-3.513-1.88 2.103 1.88m-3.513-1.88 2.104 1.88m-3.513-1.88 2.104 1.88m-3.493-1.88 2.084 1.88m-3.513-1.88 2.123 1.88m-3.532-1.88 2.123 1.88m-3.533-1.88 2.144 1.88m0 8.801-2.104 1.899m3.493-1.899-2.123 1.899m3.552-1.899-2.123 1.899m3.513-1.899-2.104 1.899m3.513-1.899-2.104 1.899m3.513-1.899-2.104 1.899m3.513-1.899L33.19 82.83m3.494-1.899L34.58 82.83m3.513-1.899-2.124 1.899m3.513-1.899-2.124 1.899m3.573-1.899-2.124 1.899m3.513-1.899-2.104 1.899m3.494-1.899-2.104 1.899m3.513-1.899-2.104 1.899m3.513-1.899-2.104 1.899m3.513-1.899-2.104 1.899m0-1.899 2.104 1.899m-3.513-1.899 2.104 1.899m-3.513-1.899 2.104 1.899m-3.513-1.899 2.104 1.899m-3.513-1.899L42.3 82.83m-3.513-1.899 2.124 1.899m-3.553-1.899 2.124 1.899M35.97 80.93l2.104 1.899M34.58 80.93l2.104 1.899M33.17 80.93l2.104 1.899m-3.513-1.899 2.104 1.899m-3.513-1.899 2.104 1.899m3.533-1.899 2.104 1.899m-9.13-1.899 2.084 1.899m-3.513-1.899 2.123 1.899m-3.533-1.899 2.124 1.899m-3.513-1.899 2.104 1.899"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.408}
        d="M65.673 100.559c-34.13 33.473-48.689 37.701-41.844 40.403 6.845 2.701 28.817-14.578 51.676-37.508 22.86-22.931 36.861-43.356 30.016-46.057-6.845-2.702-3.538 7.592-39.848 43.162Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.225}
        d="m36.989 124.915 11.968 3.141c-11.254 10.699-23.917 15.082-27.43 13.201-3.513-1.881 6.332-6.281 15.481-16.324l-.02-.018Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.236}
        d="m36.983 126.161 9.86 2.508c-10.962 10.289-21.808 13.206-24.611 11.944-2.823-1.246 5.858-4.778 14.751-14.452Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.237}
        d="M73.64 99.13c-.027.161-.111.881-.181 1.167 0 .397-.042.695-.084 1.005-.112.273-.098.522-.433.621a1.347 1.347 0 0 1-.7.546c-.268.192-.564.35-.88.472-.33.128-.7.154-1.048.074-.308-.186-.531-.384-.783-.546-.056-.248-.112-.608-.182-.856.11.331.17.673.182 1.018-.028.372-.182.546-.35.844M70.468 104.327l-.084-.075c.21.186.126.1-.35-.161-.335-.149-.698-.224-1.132-.298h-1.23c-.475 0-.796.062-1.132.149-.252.223-.615.348-.88.546a1.394 1.394 0 0 0-.518.621c-.237.211-.391.534-.615.695-.098.36-.293.348-.433.621.42.025.74.074.964.31.364.161-.307-.161-.447-.31-.28-.075-.35-.149-.783-.149-.391-.124-.643.087-1.048.149-.238.124-.308.161-.615.161M65.762 108.19c-.182 0-.993.136-1.314 0-.364-.087-.56-.249-.783-.547-.112-.211 0 .373 0 .621-.042.459-.196.459-.447.77-.252.149-.518.347-.783.471-.233.169-.498.3-.783.385-.28.124-.573.224-.783.385-.293.186-.28.41-.447.708.042.372.112.596.35.769.111.261.335.522.53.696.21.372.462.533-.083.62-.308.124-.475.025-.797 0M60.219 113.599a21.437 21.437 0 0 1-1.314-.385h-1.23c-.461.038-.56.162-.95.311-.266.236-.434.397-.797.546-.182.211-.56.583-.7.856a2.843 2.843 0 0 0-.167.994c0 .459.14.546.168.943.098.341.279.659.53.931.043.099.07.124.169.149"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.227}
        d="M56.098 118.956c-.04 0-.12.196-.248.363-.288.294-.318.313-.745.313-.397-.019-.347-.156-.625-.245-.129-.196-.288-.352-.437-.617-.099-.157-.188-.402-.297-.549-.12-.186-.258-.323-.377-.49-.12-.049-.16-.098-.318-.127.357.059.397.186.625.372.113.178.215.361.308.549.04.265.119.47.129.794 0 .343 0 .578-.13.862-.148.147-.247.304-.436.431a3.68 3.68 0 0 0-.426.49l-.566.363a1.565 1.565 0 0 1-.675.245c-.367-.03-.476-.128-.744-.245-.239-.167-.417-.275-.626-.431a2.083 2.083 0 0 1-.436-.49c-.328-.079-.546-.049-.744.127a1.623 1.623 0 0 0-.427.431c-.1.049-.278.196-.377.245"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.233}
        d="M49.238 121.547c.099.037.47.293.617.379.099.33.26.501.309.856.086.318.086.685.086 1.064-.086.391-.247.673-.395.978-.247.171-.37.294-.69.465a6.074 6.074 0 0 1-1 .086c-.247.073-.691.11-.925 0-.346-.049-.605-.184-.852-.306-.284-.159-.456-.318-.765-.465-.16-.22-.395-.428-.617-.685-.197-.257-.333-.403-.468-.685.123.318.283.612.382.918.185.318.284.44.308.831.124.318.087.71.087 1.076-.037.245-.05.71-.16.918v.232"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.225}
        d="M37.859 128.41v.124c0-.301 0-.159.139.444.218.249.793.319 1.23.213.397-.302.397-.532 1.112-.657.714.036.992.213 1.389.444.422.14.774.411.992.763.14.373.219.639-.258.781a3.246 3.246 0 0 1-1.389.443c-.556 0-.973-.053-1.23.231-.398.355-.358.568-.358 1.207-.139.195-.159.78-.258 1.011a2.307 2.307 0 0 1-1.111.213c-.14-.355-.278-.958-.377-1.331-.1-.39-.12-.958-.378-1.224a3.135 3.135 0 0 0-.853-.781 1.63 1.63 0 0 0-.754-.426c.496.213.555.462.615.994-.417.177-.536.319-1.23.337-.695-.053-.854-.213-1.112-.568-.06.568-.258.746-.397 1.242-.238.32-.337.657-.596 1.1.1.533.338.551.358 1.207.159.444.159.852.496 1.118.159.177.278.195.635.213-.714 0-1.151-.071-1.627-.32-.358-.212-.636-.461-.993-.674a4.986 4.986 0 0 0-1.488-.674c-.576 0-.993-.053-1.231.231-.357.23-.595.621-.754 1.117-.1.568-.159.959.139 1.331.198.426.258.586 0 1.1-.298.355-.715.409-1.39.55a4.665 4.665 0 0 1-1.23-.212"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.31}
        d="M104.655 70.378c15.135-26.198 25.174-48.523 22.437-49.787-2.765-1.276-17.29 18.977-32.426 45.175l9.989 4.612Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M103.654 69.936c14.602-25.274 24.657-46.64 22.468-47.65-2.212-1.022-15.857 18.686-30.459 43.96"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.272}
        d="M103.654 69.936c14.602-25.274 24.657-46.64 22.468-47.65-2.212-1.022-15.857 18.686-30.459 43.96"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.309}
        d="M101.149 56.75c-1.778 2.954-3.661 6.339-5.483 9.492l8.013 3.7c1.822-3.153 3.818-6.485 5.483-9.491l-8.013-3.7Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.309}
        d="M101.845 57.772c-1.787 2.97-3.015 5.218-4.846 8.387l5.982 2.762c1.822-3.153 3.18-5.382 4.845-8.387l-5.981-2.762Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m106.191 61.197-4.006-1.85-3.553 6.148 4.007 1.85 3.552-6.148Zm0 0-7.559 4.298 7.559-4.298Zm-3.552 6.148-.454-7.998.454 7.998Zm21.623-37.426-4.007-1.85 4.007 1.85Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.309}
        d="m106.191 61.197-4.006-1.85m4.006 1.85-3.552 6.148m3.552-6.148-7.559 4.298m3.553-6.148-3.553 6.148m3.553-6.148.454 7.998m-4.007-1.85 4.007 1.85m21.623-37.426-4.007-1.85"
      />
      <Path
        fill="#EF0000"
        stroke="#EF2D28"
        strokeWidth={0.401}
        d="M124.24 27.01c-.616.155-1.227-.157-1.366-.699-.139-.541.247-1.107.863-1.262.616-.156 1.227.157 1.366.698.139.542-.247 1.107-.863 1.263Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.408}
        d="M98.722 99.959c34.129 33.473 48.689 37.701 41.844 40.402-6.845 2.702-28.817-14.577-51.677-37.508-22.859-22.93-36.86-43.355-30.016-46.056 6.845-2.702 3.538 7.592 39.849 43.162Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.225}
        d="m127.41 124.315-11.969 3.141c11.254 10.699 23.917 15.082 27.43 13.201 3.513-1.881-6.331-6.281-15.481-16.324l.02-.018Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.236}
        d="m127.411 125.461-9.86 2.509c10.962 10.288 21.809 13.206 24.612 11.943 2.823-1.246-5.858-4.777-14.752-14.452Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.237}
        d="M90.754 98.43c.028.161.112.881.182 1.167 0 .397.042.695.083 1.005.112.273.098.522.434.621.155.248.402.441.699.546.268.191.564.35.88.472.33.127.7.154 1.049.074.307-.186.53-.385.782-.546.056-.248.112-.608.182-.857-.109.332-.17.674-.182 1.018.028.373.182.547.35.845M93.927 103.627l.084-.075c-.21.186-.126.099.349-.161.335-.149.699-.224 1.132-.298h1.23c.476 0 .797.062 1.133.149.251.223.614.347.88.546.236.158.416.374.517.621.238.211.392.533.615.695.098.36.294.347.434.621-.42.024-.741.074-.965.31-.363.161.308-.161.448-.31.279-.075.349-.149.782-.149.392-.125.643.086 1.049.149.237.124.307.161.615.161M98.637 107.589c.181 0 .992.137 1.314 0 .363-.086.559-.248.782-.546.112-.211 0 .373 0 .621.042.459.196.459.448.77.251.149.517.347.782.471.233.169.499.299.783.385.28.124.573.224.783.385.294.186.28.41.447.708-.042.372-.112.595-.349.769-.112.261-.336.522-.531.695-.21.373-.462.534.084.621.307.124.475.025.796 0M104.176 112.999c.223-.05.978-.273 1.314-.385h1.23c.461.037.559.162.95.311.266.235.434.397.797.546.182.211.559.583.699.856.115.321.172.657.168.994 0 .459-.14.546-.168.943a2.311 2.311 0 0 1-.531.931c-.042.099-.07.124-.168.149"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.227}
        d="M108.398 118.356c.04 0 .12.196.249.363.287.294.317.313.744.313.397-.019.347-.156.625-.245.129-.196.288-.352.437-.617.099-.157.188-.402.297-.549.12-.186.258-.323.378-.49.119-.049.158-.098.317-.127-.357.059-.397.186-.625.372a5.918 5.918 0 0 0-.308.549c-.039.265-.119.47-.129.794 0 .343 0 .578.129.862.149.147.248.304.437.431.157.151.3.315.427.49l.565.363c.179.107.387.215.675.245.367-.03.476-.128.744-.245.239-.167.417-.275.626-.431.171-.14.318-.305.436-.49.328-.079.546-.049.745.127.168.116.313.262.426.431.1.049.278.196.377.245"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.233}
        d="M115.156 120.847c-.098.037-.469.294-.617.379-.098.33-.259.502-.308.856-.086.318-.086.685-.086 1.064.086.392.246.673.394.979.247.171.37.293.691.464.309.049.617.086 1 .086.246.073.691.11.925 0 .345-.049.605-.184.851-.306.284-.159.457-.318.765-.465.161-.22.395-.428.617-.684.198-.257.333-.404.469-.685-.123.318-.284.611-.382.917-.186.318-.284.44-.309.832-.123.317-.086.709-.086 1.076.037.244.049.709.16.917v.232"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.225}
        d="M126.536 127.81v.124c0-.301 0-.159-.139.444-.218.248-.794.319-1.231.213-.397-.302-.397-.532-1.111-.657-.715.036-.992.213-1.389.444-.422.14-.775.411-.993.763-.139.373-.218.639.258.781.415.248.893.401 1.39.443.555 0 .972-.053 1.23.231.397.355.357.568.357 1.207.139.195.159.78.258 1.011.342.161.727.234 1.112.213.139-.355.278-.958.377-1.331.099-.39.119-.958.377-1.224.228-.306.517-.571.854-.781.2-.203.462-.351.754-.426-.496.213-.556.462-.615.994.416.177.535.319 1.23.337.695-.053.854-.213 1.112-.568.059.568.258.745.397 1.242.238.32.337.657.595 1.1-.099.533-.337.55-.357 1.207-.159.444-.159.852-.496 1.118-.159.177-.278.195-.636.213.715 0 1.152-.071 1.628-.32.357-.213.635-.461.992-.674.448-.302.952-.53 1.489-.674.576 0 .992-.053 1.231.231.357.23.595.621.754 1.117.099.568.159.959-.139 1.331-.199.426-.258.586 0 1.1.298.355.714.408 1.389.55a4.626 4.626 0 0 0 1.231-.213"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.31}
        d="M59.74 69.778C44.604 43.58 34.566 21.255 37.303 19.991c2.765-1.276 17.29 18.977 32.425 45.175l-9.988 4.612Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M60.74 69.336c-14.601-25.274-24.657-46.64-22.467-47.65 2.212-1.022 15.857 18.686 30.458 43.96"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.272}
        d="M60.74 69.336c-14.601-25.274-24.657-46.64-22.467-47.65 2.212-1.022 15.857 18.686 30.458 43.96"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.309}
        d="M63.245 56.15c1.778 2.954 3.662 6.338 5.483 9.491l-8.013 3.7c-1.822-3.153-3.818-6.485-5.483-9.49l8.013-3.7Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.309}
        d="M62.55 57.172c1.787 2.97 3.015 5.218 4.845 8.387l-5.981 2.762c-1.822-3.153-3.181-5.382-4.846-8.387l5.982-2.762Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m58.203 60.597 4.007-1.85 3.552 6.148-4.007 1.85-3.552-6.148Zm0 0 7.559 4.298-7.559-4.298Zm3.552 6.148.455-7.998-.455 7.998ZM40.133 29.318l4.006-1.85-4.006 1.85Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.309}
        d="m58.203 60.597 4.007-1.85m-4.007 1.85 3.552 6.148m-3.552-6.148 7.559 4.298m-3.552-6.148 3.552 6.148m-3.552-6.148-.455 7.998m4.007-1.85-4.007 1.85M40.133 29.318l4.006-1.85"
      />
      <Path
        fill="#EF0000"
        stroke="#EF2D28"
        strokeWidth={0.401}
        d="M40.154 26.41c.616.155 1.228-.157 1.367-.699.139-.541-.248-1.107-.863-1.262-.616-.156-1.228.157-1.367.698-.139.542.248 1.107.864 1.263Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.282}
        d="M71.843 56.426c0 22.002.132 30.289-1.482 31.424-1.535 1.225-44.22 0-44.22 6.282 0 6.281 35.143 12.598 45.702 12.598 14.078 0 21.091-6.299 21.091-18.88V56.444H71.843v-.018Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="M71.852 62.706v3.141a71.193 71.193 0 0 0 21.078 0v-3.14a71.186 71.186 0 0 1-21.078 0ZM71.852 56.425v3.141a71.193 71.193 0 0 0 21.078 0v-3.14a71.193 71.193 0 0 1-21.078 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="M71.852 59.566v3.14a71.193 71.193 0 0 0 21.078 0v-3.14a71.186 71.186 0 0 1-21.078 0ZM71.852 65.847v3.14a71.186 71.186 0 0 0 21.078 0v-3.14a71.193 71.193 0 0 1-21.078 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.231}
        d="M72.811 62.023c.532 0 .964-.304.964-.679 0-.375-.432-.678-.964-.678s-.963.303-.963.678c0 .375.431.68.963.68ZM76.643 62.362c.532 0 .964-.304.964-.68 0-.374-.432-.678-.964-.678s-.963.304-.963.679c0 .375.431.679.963.679ZM80.487 62.707c.532 0 .964-.304.964-.679 0-.375-.432-.679-.964-.679s-.964.304-.964.679c0 .375.432.679.964.679ZM84.319 62.707c.532 0 .963-.304.963-.679 0-.375-.43-.679-.963-.679-.532 0-.963.304-.963.679 0 .375.43.679.963.679ZM88.151 62.362c.532 0 .964-.304.964-.68 0-.374-.432-.678-.964-.678s-.963.304-.963.679c0 .375.43.679.963.679ZM91.995 62.023c.532 0 .963-.304.963-.679 0-.375-.431-.678-.963-.678s-.964.303-.964.678c0 .375.432.68.964.68Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m71.85 72.13 21.08 16.98-21.08-16.98Zm2.105 0 18.994 15.082-18.995-15.083Zm2.798.638 16.196 12.58-16.196-12.58Zm2.104-.018 14.092 10.7-14.092-10.7Zm2.124.018 11.948 8.801-11.948-8.8Zm2.104 0 9.844 6.92-9.844-6.92Zm2.104 0 7.74 5.022-7.74-5.022Zm2.143 0 5.637 3.762-5.637-3.762Zm2.084 0 3.533 2.52-3.533-2.52Zm2.124 0 1.39 1.242-1.39-1.242ZM71.85 74.01 92.93 91.01 71.85 74.01Zm21.08-1.863L69.706 90.991l23.222-18.844Zm-2.125-.018L70.422 88.49l20.383-16.36Zm-2.798.64L71.83 85.33l16.176-12.563Zm-2.124 0L71.831 83.45l14.052-10.682Zm-2.084 0-11.948 8.8 11.948-8.8Zm-2.104 0-9.844 6.92 9.844-6.92Zm-2.104 0-7.74 5.02 7.74-5.02Zm-2.143 0-5.617 3.76 5.617-3.76Zm-2.104 0-3.513 2.519 3.513-2.52Zm-2.124 0-1.39 1.241 1.39-1.242Zm19.71 1.241L69.706 92.908 92.929 74.01Zm0 1.917L69.706 94.77l23.222-18.844Zm0 1.863L69.706 96.652 92.929 77.79Zm0 1.88L69.706 98.569l23.222-18.897Zm0 1.917L69.706 100.43l23.222-18.844Zm0 1.863-23.223 18.862L92.929 83.45Zm0 1.88-23.223 18.863 23.222-18.862Zm0 1.9L69.706 106.09 92.929 87.23Zm0 1.88-21.814 17.602L92.93 89.11Zm0 1.881-19.69 15.721 19.69-15.72Zm-.715 2.52-15.482 12.58 15.482-12.58Zm-.675 2.502-12.663 10.061L91.54 96.013Zm-1.41 3.14-6.35 5.022 6.35-5.022ZM71.85 75.891l20.385 16.342L71.85 75.891Zm0 1.881 20.385 16.36-20.384-16.36Zm0 1.916 19.69 15.704-19.69-15.704Zm0 1.864L91.54 97.29 71.85 81.551Zm0 1.898 18.975 15.082L71.851 83.45Zm-.714 1.26 18.995 15.082L71.136 84.71Zm0 1.899 17.585 13.84-17.585-13.84Zm-.695 1.242 17.586 13.84-17.586-13.84Zm-.734 1.242 16.87 13.201-16.87-13.201Zm0 1.88 16.176 12.581-16.176-12.58Zm0 1.9 14.092 11.302-14.092-11.303Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="m71.85 72.13 21.08 16.98-21.814 17.602m2.838-34.583L92.95 87.212M76.753 72.768l16.196 12.58M78.857 72.75l14.092 10.7M80.981 72.768l11.948 8.801m-9.844-8.8 9.844 6.92m-7.74-6.92 7.74 5.02-23.222 18.863m17.625-23.884 5.637 3.762m-3.553-3.762 3.533 2.52m-1.41-2.52 1.39 1.242-23.222 18.898m2.144-18.898L92.929 91.01m0-18.862L69.707 90.991M90.806 72.13 70.421 88.49m17.585-15.72L71.83 85.33m14.052-12.563L71.831 83.45m11.968-10.682L71.851 81.57m9.844-8.8-9.844 6.92L91.54 95.391M79.59 72.768l-7.74 5.022m5.597-5.022L71.83 76.53m3.513-3.762-3.513 2.52m1.39-2.52-1.39 1.242m21.098 1.917L69.707 94.77m23.222-15.1L69.707 98.568m23.222-16.981L69.707 100.43m23.222-16.98-23.222 18.861m23.222-16.981-23.222 18.862M92.929 87.23 69.707 106.09m23.222-15.1L73.24 106.712m18.975-13.201-15.482 12.58M91.54 96.013l-12.663 10.061m11.254-6.92-6.352 5.021M71.851 75.891l20.383 16.342M71.852 77.772l20.383 16.36m-20.383-12.58L91.54 97.29M71.85 83.45l18.975 15.082M71.136 84.71l18.995 15.082M71.136 86.61l17.585 13.84m-18.28-12.598 17.586 13.84m-18.32-12.598 16.87 13.201m-16.87-11.32 16.176 12.58M69.707 92.872l14.092 11.303"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="M71.852 69.006v3.14a71.186 71.186 0 0 0 21.078 0v-3.14a71.193 71.193 0 0 1-21.078 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m69.727 94.771 12.663 10.061-12.663-10.061Zm0 1.899 11.254 8.783-11.254-8.783Zm0 1.863 9.844 7.559-9.844-7.56Zm0 1.881 7.046 5.678-7.046-5.678Zm-.02 1.898 5.637 4.401-5.637-4.401Zm0 1.881 3.513 2.52-3.513-2.52Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="m69.727 94.771 12.663 10.061M69.727 96.67l11.254 8.783m-11.254-6.92 9.844 7.559m-9.844-5.678 7.046 5.678m-7.066-3.78 5.637 4.401m-5.637-2.52 3.513 2.52"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.231}
        d="M72.811 71.463c.532 0 .964-.304.964-.679 0-.375-.432-.678-.964-.678s-.963.303-.963.678c0 .375.431.68.963.68ZM76.643 71.802c.532 0 .964-.304.964-.68 0-.374-.432-.678-.964-.678s-.963.304-.963.679c0 .375.431.679.963.679ZM80.487 72.129c.532 0 .964-.304.964-.68 0-.374-.432-.678-.964-.678s-.964.304-.964.679c0 .375.432.679.964.679ZM84.319 72.129c.532 0 .963-.304.963-.68 0-.374-.43-.678-.963-.678-.532 0-.963.304-.963.679 0 .375.43.679.963.679ZM88.151 71.802c.532 0 .964-.304.964-.68 0-.374-.432-.678-.964-.678s-.963.304-.963.679c0 .375.43.679.963.679ZM91.995 71.463c.532 0 .963-.304.963-.679 0-.375-.431-.678-.963-.678s-.964.303-.964.678c0 .375.432.68.964.68Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m41.603 101.691 25.306-13.202-25.306 13.202Zm-1.41-.639 23.918-12.563-23.917 12.563Zm-.694-1.26L61.292 88.49 39.5 99.792Zm-.715-1.242L57.78 88.49 38.784 98.55Zm-1.428-1.26 17.585-8.8-17.586 8.8Zm.714-1.88 11.949-6.3-11.949 6.3Zm-.715-1.278 9.13-5.022-9.13 5.022Zm0-1.881 6.352-3.14-6.352 3.14Zm6.352 10.061 23.897-12.58-23.897 12.58Zm2.124.621 22.487-11.942-22.487 11.942Zm2.103.639 21.099-11.321-21.099 11.321Zm2.104.621 17.586-9.422-17.586 9.422Zm2.799 0 15.481-8.162-15.481 8.162Zm2.104.638 13.358-6.92-13.358 6.92Zm2.104.622 10.559-5.66-10.56 5.66Zm2.818.017 8.436-4.418-8.436 4.418Zm2.819.621 5.636-3.158-5.636 3.158Zm2.858 0 3.513-1.881-3.513 1.881Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="m41.603 101.691 25.306-13.202m-26.715 12.563L64.11 88.489M39.499 99.792 61.292 88.49M38.784 98.55 57.78 88.49m-20.424 8.8 17.586-8.8M38.07 95.41l11.949-6.3m-12.663 5.022 9.13-5.022m-9.13 3.141 6.35-3.14m0 13.201 23.898-12.58M45.83 102.932l22.487-11.942m-20.383 12.581 21.098-11.321m-18.995 11.942 17.586-9.422m-14.787 9.422 15.481-8.162m-13.377 8.8 13.358-6.92m-11.254 7.542 10.559-5.66m-7.74 5.677 8.435-4.418m-5.618 5.039 5.637-3.158m-2.778 3.158 3.513-1.881"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="M70.422 87.868h-3.513a51.025 51.025 0 0 0 0 18.844h3.513a51.021 51.021 0 0 1 0-18.844Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m28.941 96.651 8.436-6.28-8.436 6.28Zm0-4.4 8.436 7.541-8.436-7.541Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.244}
        d="m28.941 96.651 8.436-6.28m-8.436 1.88 8.436 7.541"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.174}
        d="m41.602 89.098-4.224.629c-.937 3.99-.937 7.338 0 11.328l4.224 1.247c-.937-3.978-.937-9.215 0-13.204Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.299}
        d="M92.932 57.668v-3.176c-3.182.035-5.293-1.863-5.293-3.762l-10.528.018c0 1.88-2.081 3.78-5.263 3.78v3.14h21.084Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M77.844 46.986h9.05v3.78h-9.05v-3.78Zm.774-3.78h7.522v3.78h-7.542l.02-3.78Zm0-3.76h7.522v3.76h-7.542l.02-3.76Zm.754-5.04h6.014v5.04h-6.014v-5.04Zm-.258-4.4h6.55v4.4h-6.55v-4.4Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#EF2D28"
        strokeWidth={0.263}
        d="M86.14 43.207h-7.522l-.02 3.78h7.542v-3.78Zm0 0v-3.762h-7.522l-.02 3.762h7.542Zm-8.296 3.78h9.05v3.779h-9.05v-3.78Zm1.528-12.581h6.014v5.04h-6.014v-5.04Zm-.258-4.4h6.55v4.4h-6.55v-4.4Z"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.248}
        d="M82.728 31.904c4.814 0 8.716-2.677 8.716-5.98 0-3.302-3.902-5.98-8.716-5.98-4.814 0-8.716 2.678-8.716 5.98 0 3.303 3.902 5.98 8.716 5.98Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.248}
        d="M87.098 25.605c0 1.65 2.174 4.4 2.174 4.4-1.579 1.1-4.143 1.899-6.542 1.899-2.4 0-5.394-.462-6.543-1.899 0 0 2.174-2.733 2.174-4.383s-2.174-3.78-2.174-3.78c1.904-1.21 4.201-1.868 6.563-1.88 2.38 0 4.922.798 6.522 1.88 0 0-2.174 2.13-2.174 3.78v-.017Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.248}
        d="M85.643 25.605c0 1.65 2.174 5.039 2.174 5.039-1.58 1.064-2.666 1.242-5.086 1.242-2.42 0-3.938.195-5.087-1.242 0 0 2.174-3.372 2.174-5.04 0-1.667-2.174-4.4-2.174-4.4 1.58-1.065 2.667-1.242 5.087-1.242 2.4 0 3.507.177 5.086 1.242 0 0-2.174 2.75-2.174 4.4Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.248}
        d="M74.014 28.107c1.2 0 2.174-.843 2.174-1.881 0-1.04-.974-1.881-2.174-1.881s-2.174.842-2.174 1.88c0 1.04.973 1.881 2.174 1.881ZM91.46 28.107c1.2 0 2.173-.843 2.173-1.881 0-1.04-.973-1.881-2.174-1.881-1.2 0-2.174.842-2.174 1.88 0 1.04.974 1.881 2.174 1.881ZM82.744 28.107c1.2 0 2.174-.843 2.174-1.881 0-1.04-.973-1.881-2.174-1.881-1.2 0-2.174.842-2.174 1.88 0 1.04.974 1.881 2.174 1.881ZM82.744 21.825c1.2 0 2.174-.842 2.174-1.88 0-1.04-.973-1.881-2.174-1.881-1.2 0-2.174.842-2.174 1.88 0 1.04.974 1.881 2.174 1.881Z"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.252}
        d="M76.373 57.668c1.243 0 2.251-.842 2.251-1.88 0-1.04-1.008-1.882-2.251-1.882-1.244 0-2.252.842-2.252 1.881 0 1.039 1.008 1.881 2.252 1.881ZM88.4 57.668c1.243 0 2.252-.842 2.252-1.88 0-1.04-1.008-1.882-2.252-1.882-1.244 0-2.252.842-2.252 1.881 0 1.039 1.008 1.881 2.252 1.881Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.252}
        d="M77.117 50.748h10.536l-5.268 5.66-5.268-5.66Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.337}
        d="M82.377 57.655c1.658 0 3.002-1.123 3.002-2.508s-1.344-2.507-3.002-2.507c-1.658 0-3.002 1.122-3.002 2.507s1.344 2.508 3.002 2.508Z"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.225}
        d="M86.162 73.95H71.694c-.471 0-.853.294-.853.656v2.467c0 .362.382.656.853.656h14.47c.47 0 .853-.294.853-.656v-2.467c0-.362-.382-.656-.854-.656Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.225}
        d="M91.939 70.81c-1.945 0-3.513 1.472-3.513 3.282v2.857c-.013.422.067.843.237 1.237.17.394.426.754.753 1.06.327.305.718.55 1.15.719.434.169.9.26 1.373.266a3.937 3.937 0 0 0 1.372-.266c.433-.17.825-.414 1.151-.72.327-.305.583-.665.753-1.06.17-.393.25-.814.237-1.236v-2.84a2.89 2.89 0 0 0-.231-1.242 3.17 3.17 0 0 0-.751-1.066 3.605 3.605 0 0 0-1.154-.724 3.934 3.934 0 0 0-1.377-.268Zm0 1.241c-1.171 0-2.104 1.19-2.104 2.644v1.65c0 1.455.933 2.626 2.104 2.626s2.104-1.17 2.104-2.626v-1.65c0-1.455-.933-2.626-2.104-2.626v-.018Zm-18.28-.62c-1.19 0-2.104 1.17-2.104 2.643v2.91c0 1.455.933 2.626 2.104 2.626s2.104-1.17 2.104-2.626v-2.928c0-1.472-.933-2.644-2.104-2.644v.018Zm0-1.243a3.934 3.934 0 0 0-1.372.267c-.433.169-.825.413-1.151.719a3.172 3.172 0 0 0-.753 1.06c-.17.394-.25.814-.237 1.237v4.116c-.013.423.067.843.237 1.238.17.394.426.754.753 1.06.327.305.718.55 1.15.718.434.17.9.26 1.373.267 1.945 0 3.513-1.473 3.513-3.283v-4.116a2.89 2.89 0 0 0-.231-1.243 3.17 3.17 0 0 0-.751-1.066 3.605 3.605 0 0 0-1.154-.723 3.936 3.936 0 0 0-1.377-.269v.018Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.225}
        d="M68.018 72.69c-1.17 0-2.103 1.171-2.103 2.626v.692c0 1.455.932 2.626 2.103 2.626 1.191 0 2.124-1.17 2.124-2.626v-.692c0-1.455-.953-2.626-2.124-2.626Zm0-1.242a3.934 3.934 0 0 0-1.372.267c-.433.169-.824.413-1.15.718a3.173 3.173 0 0 0-.753 1.06c-.17.395-.25.815-.238 1.238v1.88c-.013.423.068.843.238 1.238.17.394.425.754.752 1.06.327.305.718.55 1.151.718.433.17.9.26 1.372.267 1.945 0 3.533-1.473 3.533-3.283v-1.88a2.892 2.892 0 0 0-.233-1.247 3.172 3.172 0 0 0-.756-1.068 3.606 3.606 0 0 0-1.16-.723 3.938 3.938 0 0 0-1.384-.263v.018Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EF2D28"
        strokeWidth={0.24}
        d="M59.609 70.954c-2.144 0-3.823 1.31-3.823 2.935v3.272c0 1.607 1.715 2.935 3.823 2.935 2.072 0 3.787-1.309 3.787-2.955V73.89c0-1.626-1.715-2.935-3.787-2.935Zm0-1.388c-.85.005-1.691.104-2.472.29a7.877 7.877 0 0 0-2.08.798c-.592.339-1.056.74-1.366 1.18-.31.44-.46.909-.441 1.381v4.6c-.029.475.113.947.416 1.39.304.443.764.848 1.352 1.19.589.344 1.295.62 2.077.81.782.19 1.624.292 2.478.3 3.537 0 6.36-1.647 6.36-3.69v-4.6c.023-.472-.122-.942-.428-1.383-.306-.44-.766-.843-1.354-1.184-.588-.341-1.293-.614-2.072-.804-.78-.189-1.62-.29-2.47-.298v.02ZM105.32 71.576c-2.144 0-3.823 1.308-3.823 2.934v3.272c0 1.607 1.715 2.935 3.823 2.935 2.072 0 3.787-1.308 3.787-2.954V74.51c0-1.626-1.715-2.934-3.787-2.934Zm0-1.389c-.851.005-1.691.104-2.472.29-.782.188-1.489.458-2.08.798-.592.34-1.056.74-1.366 1.18-.31.44-.46.91-.441 1.381v4.6c-.029.475.113.947.416 1.39.304.443.764.848 1.352 1.191.589.343 1.295.618 2.077.809.782.19 1.624.292 2.478.3 3.537 0 6.36-1.647 6.36-3.69v-4.6c.023-.472-.122-.942-.428-1.383-.306-.44-.766-.843-1.354-1.184-.588-.341-1.293-.614-2.072-.803-.78-.19-1.619-.29-2.47-.298v.02Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        stroke="#EF2D28"
        strokeWidth={0.225}
        d="M101.327 73.95h-7.523c-.252 0-.456.294-.456.656v2.467c0 .362.204.656.456.656h7.523c.252 0 .456-.294.456-.656v-2.467c0-.362-.204-.656-.456-.656ZM90.27 73.329h-4.406c-.143 0-.258.389-.258.87v3.3c0 .48.115.869.258.869h4.406c.142 0 .258-.39.258-.87v-3.3c0-.48-.116-.87-.258-.87ZM67.067 73.329H62.66c-.142 0-.258.389-.258.87v3.3c0 .48.116.869.258.869h4.407c.142 0 .258-.39.258-.87v-3.3c0-.48-.116-.87-.258-.87ZM56.25 72.69h-8.812c-.285 0-.516.484-.516 1.082v4.117c0 .598.23 1.082.516 1.082h8.812c.285 0 .517-.484.517-1.082v-4.117c0-.598-.232-1.082-.517-1.082ZM116.767 73.329h-8.158c-.274 0-.496.484-.496 1.082v4.117c0 .597.222 1.082.496 1.082h8.158c.274 0 .496-.485.496-1.082V74.41c0-.598-.222-1.082-.496-1.082Z"
      />
    </G>
  </Svg>
);
export default SvgOmFlag;