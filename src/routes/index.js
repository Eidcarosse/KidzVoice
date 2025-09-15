import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen, LearnerQuestionScreen, WelcomeScreen } from "../screens";
import ScreensName from "./routes";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialState={ScreensName.LEARNER_QUESTIONAIR} screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name={ScreensName.WELCOME} component={WelcomeScreen} /> */}
        {/* <Stack.Screen name={ScreensName.HOME} component={HomeScreen} /> */}
        <Stack.Screen name={ScreensName.LEARNER_QUESTIONAIR} component={LearnerQuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
