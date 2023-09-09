import React from "react";
import { Text } from "../components/Text";
import { Main } from "../components/Main";
import { Shape } from "./gameTypes/Shape";
import { useGenerateQuestions } from "../contexts/data";
import { Flag } from "./gameTypes/Flag";

const Game = (props) => {
  const [settings, setSettings] = React.useState({
    questions: useGenerateQuestions(props.route.params.mode),
    mode: props.route.params.mode,
    answers: [],
    currentQuestion: 0,
  });

  const getComponent = () => {
    if (settings.questions[settings.currentQuestion].game.type === "shape") {
      return Shape;
    }

    if (settings.questions[settings.currentQuestion].game.type === "flag") {
      return Flag;
    }

    return Shape;
  };

  const endGame = () => {
    props.navigation.navigate("Main");
  };

  const Component = getComponent();

  const onAnswer = (answer) => {
    setSettings({
      ...settings,
      currentQuestion: settings.currentQuestion + 1,
      answers: [...settings.answers, answer],
    });
  };

  return (
    <Main>
      {settings.currentQuestion <= 29 && (
        <Component
          question={settings.questions[settings.currentQuestion]}
          currentQuestion={settings.currentQuestion + 1}
          totalQuestions={settings.questions.length + 1}
          onAnswer={onAnswer}
          endGame={endGame}
        />
      )}
      {settings.currentQuestion > 29 && <Text>Game finished</Text>}
    </Main>
  );
};

export default Game;
