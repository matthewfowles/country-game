import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { styled } from "../../styles/theme";
import * as CountryIllustrations from "../../components/Illustrations/countries";
import { camelCase, capitalize, shuffle } from "lodash";
import { Alert, TouchableHighlight } from "react-native";
import { CrossIcon } from "../../components/CrossIcon";

const Container = styled("View", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

const QuestionContainer = styled("View", {
  height: "50%",
  flex: 1,
  backgroundColor: "$blue1",
  padding: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
});
const AnswerContainer = styled("View", {
  height: "50%",
  width: "100%",
  borderTopColor: "$blue6",
  borderTopWidth: 1,
  backgroundColor: "$blue2",
  paddingTop: 12,

  flex: 1,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",
});

const ButtonContainer = styled("View", {
  width: "100%",
  padding: 12,
  variants: {
    width: {
      full: {
        width: "100%",
      },
      half: {
        width: "50%",
      },
    },
  },
});

const Header = styled("View", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 24,
  paddingVertical: 12,
});

const CountryIllustration = ({ country, type = "shape", ...props }) => {
  const Component =
    CountryIllustrations[`${country}${type === "flag" ? "Flag" : "Country"}`];
  return Component ? <Component {...props} /> : null;
};

export function Flag({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
  endGame,
}) {
  const onSelection = (option) => {
    if (option.code === question.data.code) {
      Alert.alert("Correct!", `You were right it was ${question.data.name}`, [
        {
          text: "Next Question",
          onPress: () => onAnswer({ ...option, outcome: true }),
        },
      ]);
    }
    if (option.code !== question.data.code) {
      Alert.alert(
        "Incorrect!",
        `Try again, the correct answer was ${question.data.name}`,
        [
          {
            text: "Next Question",
            onPress: () => onAnswer({ ...option, outcome: false }),
          },
        ]
      );
    }
  };

  const onClose = () => {
    Alert.alert("End Game", "Are you sure you want to end your game?", [
      { text: "End game", onPress: () => endGame() },
      { text: "cancel", onPress: () => false },
    ]);
  };

  return (
    <Container>
      <Header>
        <Text type="subtitle">{`${currentQuestion} / ${totalQuestions}`}</Text>
        <TouchableHighlight onPress={onClose}>
          <CrossIcon />
        </TouchableHighlight>
      </Header>
      <QuestionContainer>
        <Text type={"subtitle"}>Name the country?</Text>
        <CountryIllustration
          country={capitalize(camelCase(question.data.code))}
          type="flag"
          width={260}
          height={260}
        />
      </QuestionContainer>
      <AnswerContainer>
        {shuffle([...question.game.options, question.data]).map((option) => {
          return (
            <ButtonContainer
              width={
                question.game.difficulty === 1 || question.game.difficulty === 3
                  ? "half"
                  : "full"
              }
              key={option.code}
            >
              <Button onPress={() => onSelection(option)}>{option.name}</Button>
            </ButtonContainer>
          );
        })}
      </AnswerContainer>
    </Container>
  );
}
