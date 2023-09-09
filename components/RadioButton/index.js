import { Path, Svg } from "react-native-svg";
import { styled, theme } from "../../styles/theme";
import { Text } from "../Text";
import { useRadio } from "../RadioGroup";

const ButtonWrraper = styled("TouchableOpacity", {
  borderColor: "$blue7",
  borderWidth: 1,
  borderRadius: 6,
  backgroundColor: "$blue3",
  textAlign: "center",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  position: "relative",
  overflow: "hidden",
});

const TickBox = styled("View", {
  backgroundColor: "$blue4",
  width: 60,
  height: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 1,
  borderTopLeftRadius: 6,
  borderBottomLeftRadius: 6,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const TextBox = styled("View", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  flex: 1,
});

function Tick({ active = false }) {
  return active ? (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 15 15"
      width="36pt"
      height="36pt"
    >
      <Path
        fill={theme.colors.blue12.value}
        fillRule="evenodd"
        d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007 3.849-5.886a.625.625 0 0 1 .865-.181Z"
        clipRule="evenodd"
      />
    </Svg>
  ) : null;
}

export function RadioButton({ name, children }) {
  const { value, setValue } = useRadio();

  return (
    <ButtonWrraper onPress={() => setValue(name)}>
      <TickBox>
        <Tick active={name === value} />
      </TickBox>
      <TextBox>
        <Text type={"button"}>{children}</Text>
      </TextBox>
    </ButtonWrraper>
  );
}
