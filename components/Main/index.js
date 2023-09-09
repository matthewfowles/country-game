import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "../../styles/theme";

const MainWrapper = styled(SafeAreaView, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,

  variants: {
    background: {
      light: {
        backgroundColor: "$blue2",
      },
      dark: {
        backgroundColor: "$blue1",
      },
    },
  },
});

export function Main({ children, background = "dark" }) {
  return (
    <MainWrapper edges={["top", "right", "left"]} background={background}>
      {children}
    </MainWrapper>
  );
}
