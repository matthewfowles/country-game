import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const SvgKnCountry = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 788 804"
    {...props}
  >
    <Path
      fill="#CCC"
      stroke="#fff"
      d="m535.621 432.358.356-.227-.165-.389-24.497-58.046-.047-.111-.092-.078-89.73-75.235-96.091-165.013-.061-.104-.102-.065L119.275 1.579l-.242-.155-.256.132-82.516 42.628-.133.069-.073.13-31.75 56.247-.057.101-.007.116-2.74 48.054-.003.057.01.057 3.626 20.871.039.226.197.118 161.462 96.135.066.039.074.018 186.662 44.412 116.012 163.107.275.388.401-.256 65.299-41.715Zm251.19 313.88.313-.137-.015-.342-5.453-127.912-.01-.229-.18-.142-103.387-81.631-.148-.117-.188.01-103.415 5.453-.415.022-.055.412-24.497 184.132-.04.301.249.174 108.84 76.178.231.161.257-.113 127.913-56.22Z"
    />
    <Mask
      id="KN_Country_svg__a"
      width={786}
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
        d="m535.352 431.937-65.299 41.714-116.121-163.26-186.844-44.456L5.626 169.8 2 148.929l2.74-48.054 31.75-56.247L119.006 2l205.917 131.511 96.135 165.088 89.796 75.291 24.498 58.047ZM786.61 745.78 658.697 802l-108.84-76.177 24.497-184.132 103.415-5.453 103.387 81.63 5.454 127.912Z"
      />
    </Mask>
    <G mask="url(#KN_Country_svg__a)">
      <Mask
        id="KN_Country_svg__b"
        width={1067}
        height={800}
        x={-139}
        y={2}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill="#fff" d="M-139 2H927.719v800H-139V2Z" />
      </Mask>
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#KN_Country_svg__b)">
        <Path
          fill="#FFE900"
          d="M-182.281 2.313h1152.5v798.906h-1152.5V2.312Z"
        />
        <Path
          fill="#35A100"
          d="m-182.906 2.313 1.25 575.937L715.219 2l-898.125.313Z"
        />
        <Path
          fill="#C70000"
          d="m971.625 801.219-2.188-598.75L64.75 801.688l906.875-.469Z"
        />
        <Path
          fill="#000"
          d="m-182.438 621.687.782 180.313 195.781-.313 955.781-640.781-.937-156.719-193.438-1.875-957.812 619.375h-.157Z"
        />
        <Path
          fill="#fff"
          d="m580.531 246.688-15.312-65.938 52.031 42.187 59.375-38.437-27.188 64.531 52.188 42.188-69.063-2.344-27.031 64.531-15.469-65.937-68.906-2.344 59.375-38.437Zm-430 279.687-15.468-66.094 52.031 42.188 59.375-38.438-27.188 64.532 52.188 42.187-68.906-2.344-27.188 64.531L160.063 567l-68.907-2.344 59.375-38.281Z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgKnCountry;