import React from "react";
import { styled } from "../styles/theme";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { MapAnimation } from "../components/MapAnimation";

const Container = styled("View", {
  paddingTop: 150,
  paddingBottom: 64,
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
  justifyContent: "space-between",
  gap: 16,
});

const Main = (props) => {
  return (
    <Container>
      <MapAnimation />
      <Text type="title">Country Game</Text>
      <ButtonContainer>
        <Button onPress={() => props.navigation.navigate("Play")}>Play</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
