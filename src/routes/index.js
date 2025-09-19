import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  AccountSetupScreen,
  AddChild,
  AiLiveSection,
  AiLiveVedio,
  CreateChildProfile,
  GenerateChild,
  Home,
  HomeScreen,
  LearnerQuestionScreen,
  MagicBackpackScreen,
  ParentQuestionaire,
  ProfileInfo,
  Questionnaire,
  SignIn,
  StartQuestionaire,
  Welcome,
  WelcomeScreen,
} from "../screens";
import ScreensName from "./routes";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialState={ScreensName.LEARNER_QUESTIONAIR}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={ScreensName.WELCOME} component={Welcome} />
        <Stack.Screen name={ScreensName.SIGNIN} component={SignIn} />
        <Stack.Screen
          name={ScreensName.PARENTPROFILENFO}
          component={ProfileInfo}
        />

        <Stack.Screen name={ScreensName.ADDCHILD} component={AddChild} />
        <Stack.Screen
          name={ScreensName.CREATECHILDPROFILE}
          component={CreateChildProfile}
        />

        <Stack.Screen
          name={ScreensName.STARTQUESTIONAIRE}
          component={StartQuestionaire}
        />

        <Stack.Screen
          name={ScreensName.PARENTQUESTIONAIRE}
          component={ParentQuestionaire}
        />
        <Stack.Screen
          name={ScreensName.AILIVEVEDIOSECTION}
          component={AiLiveVedio}
        />
        <Stack.Screen
          name={ScreensName.GENERATECHILD}
          component={GenerateChild}
        />
        <Stack.Screen name={ScreensName.HOME} component={Home} />
        <Stack.Screen name={ScreensName.ACCOUNT} component={AccountSetupScreen} />
        <Stack.Screen name={ScreensName.MAGICBACKPACK} component={MagicBackpackScreen} />
        <Stack.Screen name={ScreensName.QUESTIONAIRE} component={Questionnaire} />
        <Stack.Screen name={ScreensName.AILIVESECTION} component={AiLiveSection} />
        <Stack.Screen
          name={ScreensName.LEARNER_QUESTIONAIR}
          component={LearnerQuestionScreen}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
