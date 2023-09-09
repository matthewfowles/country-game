import { styled } from "../../styles/theme";
import { PlayIcon } from "../PlayIcon";
import { Text } from "../Text";

const ButtonWrraper = styled("TouchableOpacity", {
  borderColor: "$blue7",
  borderWidth: 1,
  borderRadius: 6,
  backgroundColor: "$blue3",
  textAlign: "center",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  padding: 16,
  margin: 0,

  variants: {
    type: {
      orange: {
        borderColor: "#E6702F",
        backgroundColor: "#EF8742",
      },
    },
  },
});

const IconBox = styled("View", {
  width: 60,
  height: 48,
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export function Button({
  children,
  onPress = () => null,
  type,
  icon,
  width = "full",
}) {
  return (
    <ButtonWrraper type={type} onPress={onPress}>
      {icon === "play" && (
        <IconBox>
          <PlayIcon />
        </IconBox>
      )}
      <Text type={"button"}>{children}</Text>
    </ButtonWrraper>
  );
}
