import * as React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";
const SvgMzFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 641 480"
    {...props}
  >
    <Mask
      id="MZ_Flag_svg__a"
      width={641}
      height={480}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path fill="#fff" d="M0 0h640.031v480H0V0Z" />
    </Mask>
    <G mask="url(#MZ_Flag_svg__a)">
      <Path
        fill="#009A00"
        fillRule="evenodd"
        d="M0 0h720v150H0V0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M0 150h720v15H0v-15Z"
        clipRule="evenodd"
      />
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M0 165h720v150H0V165Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M0 315h720v15H0v-15Z"
        clipRule="evenodd"
      />
      <Path
        fill="#FFCA00"
        fillRule="evenodd"
        d="M0 330h720v150H0V330Z"
        clipRule="evenodd"
      />
      <Path
        fill="red"
        fillRule="evenodd"
        d="M0 0v480l315-240L0 0Z"
        clipRule="evenodd"
      />
      <Path
        fill="#FFCA00"
        fillRule="evenodd"
        d="m186.094 312.188-48-35.157-48 35.157 18.656-56.532-48.281-34.781 59.531.188 18.094-56.625 18.187 56.718 59.531-.281-48.281 34.781 18.563 56.532Z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.031}
        d="M96.375 272.719h34.688c2.812 3.093 8.906 4.406 14.812 0 10.875-6 31.875 0 31.875 0l4.125-4.406-10.031-33.001-3.657-3.937s-7.781-4.687-22.5-3.094c-14.718 1.594-19.875-.469-19.875-.469s-12.843 1.501-16.5 3.376l-4.125 4.124-8.812 37.407Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.031}
        d="M103.406 264.188s33-4.125 42.563 8.531c-5.344 3.75-10.125 4.031-15.188.281.75-1.406 11.813-12.937 40.031-9.094"
      />
      <Path
        stroke="#000"
        strokeWidth={1.125}
        d="m138.75 231.188-.281 36.374m29.718-35.906 6.188 28.969"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.031}
        d="m109.687 231.188-3.468 15"
      />
      <Path
        fill="#000"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.031}
        d="m73.969 276.656 8.062 9.563c.938.562 1.875.562 2.719 0l12-14.438 5.062-6.281c.844-.937 1.032-1.969.938-2.812l9.75-8.719 2.062.187c-.937-.187-1.593-.656-.937-1.687l2.25-1.688 1.687 2.156s-2.437 3.188-2.718 3.188h-2.625l-5.063 4.594 2.25 1.875 3.281 9.187 4.125-2.906-2.624-9.375 5.718-6.281-2.156-3.375 1.5-1.875s19.969 12.562 27.75 9.187c.188 0 .469-9 .469-9s-20.813-2.156-21.281-6.281c-.469-4.125 4.687-4.687 4.687-4.687l-2.25-3 .469-1.688 3.656 4.5 8.156-6.938L189.187 285c2.625-1.031 3.188-1.688 3.375-4.313l-47.25-54.281 3.563-3.844c.75-.843.937-1.124.937-2.437l5.626-4.781a6.848 6.848 0 0 1 3.562 2.812l15.375-12.844c.375.376 1.594.75 2.437.375l25.219-24.281-27.469 19.406-.937-.656c0-.844.937-.937 0-2.437-1.125-1.313-2.719 1.218-2.906 1.218-.281 0-4.032-1.312-4.875-2.999l-.188 4.406-7.031 6.562-5.344-.281-7.687 7.5-.938 2.812 1.219 2.532s-4.125 3.562-4.125 3.375c0-.282-.844-1.125-.938-1.219l3.563-3.187.469-2.157-1.125-1.875c-.375.281-4.875 5.063-5.157 4.5l-13.124-14.531.75-2.719-8.157-8.906c-3-1.031-7.781-1.219-8.719 5.344-.75 1.5-6.937.187-6.937.187l-3.375.75-19.125 26.907 10.594 12.75 21.75-27.469.656-7.781 4.5 5.062c1.594.187 3 .281 4.406-.469l12.844 14.344-2.156 2.156 1.875 2.063 2.25-1.5.844 1.218c-1.032.563-1.876 1.407-2.907 1.969-1.687-1.125-3.375-2.531-3.281-4.687l-7.219 6-.281 1.125-21.469 17.812-1.875.281-.469 5.625 13.969-11.625v-1.687l1.406 1.219 10.876-8.719s.75.937.468.937c-.281 0-9.656 8.719-9.656 8.719l-.188.938-1.687 1.5-.937-.75-13.126 11.625h-1.874l-7.22 7.218c-1.874.188-3.468.375-5.062 1.407L73.97 276.656Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgMzFlag;
