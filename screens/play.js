import React from "react";
import { RadioProvider } from "../components/RadioGroup";
import { RadioButton } from "../components/RadioButton";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { styled } from "../styles/theme";

const Container = styled("View", {
  paddingTop: 112,
  paddingBottom: 240,
  paddingRight: 24,
  paddingLeft: 24,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  backgroundColor: "$blue2",
});

const ButtonContainer = styled("View", {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  gap: 16,
});

const Play = (props) => {
  const [mode, setMode] = React.useState("easy");

  return (
    <Container>
      <Text type="subtitle">Pick a game mode</Text>
      <ButtonContainer>
        <RadioProvider
          initialValue={"easy"}
          onChange={(value) => setMode(value)}
        >
          <RadioButton name="easy">Easy</RadioButton>
          <RadioButton name={"medium"}>Medium</RadioButton>
          <RadioButton name={"hard"}>Hard</RadioButton>
        </RadioProvider>
      </ButtonContainer>
      <Text type="subtitle">Lets play</Text>
      <ButtonContainer>
        <Button
          onPress={() => props.navigation.navigate("Game", { mode: mode })}
        >
          Play game
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Play;
