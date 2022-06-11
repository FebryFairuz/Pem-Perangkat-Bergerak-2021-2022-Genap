import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import colors from "./src/consts/colors";
import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import MainComponent from "./src/views/navigation/MainComponent";
import DetailAttendance from "./src/views/screens/Attendance/Widgets/DetailAttendance";
import Authentifications from "./src/views/screens/Authentifications";

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
          <Stack.Screen
            name="AuthentificationsScreen"
            component={Authentifications}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainComponent}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="DetailAttendance"
            component={DetailAttendance}
            options={{
              headerTitle: "Detail Attendance",
              headerShown: true,
              gestureEnabled: true,
              headerBackTitle: "Back",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
