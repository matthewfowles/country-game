import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgLbFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 480"
    {...props}
  >
    <Mask
      id="LB_Flag_svg__a"
      width={640}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M.031 0H639.97v480H.031V0Z" />
    </Mask>
    <G mask="url(#LB_Flag_svg__a)">
      <Path
        fill="#EE161F"
        fillRule="evenodd"
        d="M-40 360h720v120H-40V360Zm0-360h720v120H-40V0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M-40 120h720v240H-40V120Z"
        clipRule="evenodd"
      />
      <Path
        fill="#00A850"
        d="M316.344 121.875c-7.313 14.531-12.188 14.531-24.375 24.375-4.875 4.781-12.188 7.219-2.438 12.188-9.843 4.781-14.718 7.218-19.593 16.968l2.437 2.438s9.375-4.5 9.75-2.438c1.688 1.969-12.187 9.375-13.969 10.594l-10.312 6.562c-12.281 9.657-19.688 7.219-26.906 21.844l24.375-2.437c4.875 17.062-12.188 19.5-24.375 26.812l-19.594 12.188c4.969 17.062 19.594 7.312 31.781 2.437l2.438 2.438v4.875l-24.375 12.187s-28.875 16.5-29.344 17.063c-.188.937 0 4.875 0 4.875 9.75 2.437 24.375 4.875 34.219 0 12.187-4.875 14.625-9.75 29.25-9.75a94.323 94.323 0 0 1-48.75 19.5v9.75c14.625 0 24.375 0 36.562-2.438l31.688-9.75c7.312 0 14.718 7.313 12.187 14.625-7.219 26.813-36.562 21.938-46.312 43.875l39-14.718c9.75-4.876 19.5-9.657 31.687-7.219C326 343.594 326 353.344 345.5 358.219l-4.875-12.188c4.875 2.438 9.75 2.438 14.719 4.875 12.187 4.875 14.625 9.75 29.25 7.313-12.188-14.625-14.625-12.188-24.375-21.938-9.75-14.625-14.719-36.562 0-39l17.062 4.875c17.063 2.438 17.063-2.437 41.438 7.313 14.719 4.875 19.593 12.187 36.562 7.312-7.219-17.062-34.031-29.25-51.187-34.125 19.594-12.187 14.625 4.875 41.531-2.437v-4.875c-19.406-14.719-26.813-26.906-53.625-26.906l41.531-4.876v-4.874S392.562 228 391.625 227.531c.281-1.219 1.313-3.093 4.031-4.219 7.782 5.063 31.219 4.5 32.625 4.407-.75-6-11.906-10.969-21.562-15.844 0 0-41.906-25.781-42.094-28.031.844-6.563 17.156 1.031 34.688 6.094-4.875-9.75-14.625-14.626-24.375-17.063l14.625-2.437c-9.75-21.938-34.125-19.5-48.75-29.25-9.844-7.313-9.844-12.188-24.469-19.407v.094Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M290 284.062c1.781-5.718 4.125-10.875-6.75-15.843-10.875-4.969 5.437 19.781 6.75 15.937v-.094Zm12.844-11.531c-2.157.281-3.375 8.25 1.031 10.5 4.875.75.937-10.406-1.031-10.5Zm12.656-.937c-2.25.75-2.344 12 5.625 9.937 8.063-1.969 0-10.781-5.625-9.844v-.093Zm14.812-28.782c1.688-2.812-.093-14.062-6.937-9.375-6.937 4.782 4.687 10.125 6.937 9.375Zm-15-9.375c2.157-.843 2.344-7.781-3.75-5.906-5.906 1.781 2.157 7.313 3.75 5.906Zm-13.499 2.719s-4.219-5.812-7.5-4.594c-4.032 3.938 7.781 4.688 7.5 4.594Zm-46.501 18.563c1.782.187 15-2.157 19.594-7.313 4.594-5.156-23.531 2.156-23.531 2.25 0 .094 2.625 4.594 3.937 5.063Zm132.282-32.813c.656-1.219-7.031-6.656-11.625-4.5-1.219 4.031 11.625 5.344 11.625 4.5Zm-26.063-13.125c1.5-2.062-3.281-10.594-12.843-5.812-9.563 4.687 10.031 9.187 12.843 5.906v-.094Zm-30.093-4.969s2.343-7.687 8.062-6.187c6.562 4.969-7.781 6.469-8.062 6.187ZM325.813 198c-.938-2.156-6.844-.938-13.688 3.656-6.937 4.406 15.75 1.313 13.688-3.75V198Zm17.531-20.719s6.093-2.812 7.968 0c2.532 4.031-8.062 0-7.968 0Zm-5.157-2.719c-1.218-2.437-7.968-2.718-7.781.938-1.125 2.812 8.813 2.25 7.781-.938Zm-16.124 0c-.657-1.406-10.313 0-13.126 5.813 4.688 2.25 15.282-2.156 13.126-5.813Zm-20.626 5.907s-12.562 7.781-13.406 13.406c.375 4.875 15.75-8.813 15.75-8.813s1.313-5.437-2.25-4.593h-.094Zm-13.968-7.032c.375-1.593 6.281-5.25 6.75-4.968.468 1.593-4.781 5.906-6.75 4.968Zm4.031 29.625c.281-2.343-15-2.156-9.281 4.875 4.875 5.907 10.312-3.843 9.281-4.875Zm-14.062 10.032c-.75-1.5-1.876-5.625-3.938-6-1.781 0-10.969 1.875-11.719 3.375-.375 1.218 3.844 8.812 5.25 9 1.688.656 10.219-5.625 10.5-6.375h-.093Zm82.874 51.75c.469-1.688 16.219-7.032 21.563-1.875 6.375 8.718-21.937 4.687-21.563 1.875Zm43.126 10.218c3.468-5.812-10.594-12.75-16.501-6.093 2.063 7.968 13.688 10.875 16.501 6.093Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgLbFlag;
