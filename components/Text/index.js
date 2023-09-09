import { styled } from "../../styles/theme";

const TextWrraper = styled("Text", {
  color: "$blue12",
  textAlign: "center",
  letterSpacing: 0.5,
  variants: {
    type: {
      button: {
        fontSize: 16,
        fontFamily: "$regular",
      },
      tab: {
        fontSize: 16,
        fontFamily: "$regular",
      },
      title: {
        fontSize: 64,
        fontFamily: "$light",
      },
      smallTitle: {
        fontSize: 48,
        fontFamily: "$light",
      },
      subtitle: {
        fontSize: 24,
        fontFamily: "$regular",
      },
      body: {
        fontSize: 16,
        fontFamily: "$regular",
      },
    },
  },
});

export function Text({ type = "button", children }) {
  return <TextWrraper type={type}>{children}</TextWrraper>;
}
