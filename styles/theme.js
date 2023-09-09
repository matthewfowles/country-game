import { createStitches } from "stitches-native";
import { blueDark } from "@radix-ui/colors";

// Create your theme
const { ThemeProvider, theme, styled } = createStitches({
  theme: {
    colors: {
      ...blueDark,
    },
    fonts: {
      light: "Montserrat-light",
      regular: "Montserrat-regular",
    },
  },
});

export { ThemeProvider, theme, styled };
