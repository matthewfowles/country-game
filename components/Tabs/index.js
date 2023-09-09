import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeaderboardPage from "../../screens/Leaderboard";
import GamePage from "../../screens/Game";
import SettingsPage from "../../screens/Settings";
import HelpPage from "../../screens/Help";

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Leaderboard" component={LeaderboardPage} />
      <Tab.Screen name="Game" component={GamePage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
      <Tab.Screen name="Help" component={HelpPage} />
    </Tab.Navigator>
  );
}
