import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Main from "./screens/main";
import Play from "./screens/play";
import { NavigationContainer } from "@react-navigation/native";
import Game from "./screens/game";

// Define your navigation hierarchy
const Router = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {(stackProps) => <Main {...stackProps} />}
        </Stack.Screen>
        <Stack.Screen name="Play" options={{ headerShown: false }}>
          {(stackProps) => <Play {...stackProps} />}
        </Stack.Screen>
        <Stack.Screen name="Game" options={{ headerShown: false }}>
          {(stackProps) => <Game {...stackProps} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
