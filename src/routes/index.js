import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  AccountSetupScreen,
  AddChild,
  AiLiveExample,
  AiLiveQuestion,
  AiLiveSection,
  AiLiveVedio,
  ChildDashboard,
  ApplicationStatus,
  Assignment,
  Certification,
  CoachAccount,
  CreateChildProfile,
  DigitalContract,
  GenerateChild,
  Home,
  HomeScreen,
  LearnerQuestionScreen,
  MagicBackpackScreen,
  ParentQuestionaire,
  PayoutSetup,
  ProfileInfo,
  Questionnaire,
  Quiz,
  SignIn,
  StartQuestionaire,
  StartQuiz,
  StartTraining,
  Training,
  Welcome,
  WelcomeScreen,
  AiLiveVedioView,
  ChildProgress,
} from "../screens";
import ScreensName from "./routes";
import AiGame from "../screens/child/aiGame/aiGame";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialState={ScreensName.WELCOME}
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
          name={ScreensName.VIDEOVIEW}
          component={AiLiveVedioView}
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
        <Stack.Screen
          name={ScreensName.AILIVEQUESTIONAIR}
          component={AiLiveQuestion}
        />
        <Stack.Screen name={ScreensName.AIGAME} component={AiGame} />
        <Stack.Screen
          name={ScreensName.AILIVEEXAMPLE}
          component={AiLiveExample}
        />
        <Stack.Screen name={ScreensName.HOME} component={Home} />
        <Stack.Screen
          name={ScreensName.ACCOUNT}
          component={AccountSetupScreen}
        />
        <Stack.Screen
          name={ScreensName.MAGICBACKPACK}
          component={MagicBackpackScreen}
        />
        <Stack.Screen
          name={ScreensName.QUESTIONAIRE}
          component={Questionnaire}
        />
        <Stack.Screen
          name={ScreensName.AILIVESECTION}
          component={AiLiveSection}
        />
        <Stack.Screen
          name={ScreensName.ChildDashboard}
          component={ChildDashboard}
        />
        {/* <Stack.Screen
        <Stack.Screen
          name={ScreensName.ACCOUNT}
          component={AccountSetupScreen}
        />
        <Stack.Screen
          name={ScreensName.MAGICBACKPACK}
          component={MagicBackpackScreen}
        />
        <Stack.Screen
          name={ScreensName.QUESTIONAIRE}
          component={Questionnaire}
        />
        <Stack.Screen
          name={ScreensName.AILIVESECTION}
          component={AiLiveSection}
        />
        <Stack.Screen
          name={ScreensName.LEARNER_QUESTIONAIR}
          component={LearnerQuestionScreen}
        /> */}

        <Stack.Screen
          name={ScreensName.COACHACCOUNT}
          component={CoachAccount}
        />

        <Stack.Screen
          name={ScreensName.APPLICATIONSTATUS}
          component={ApplicationStatus}
        />

        <Stack.Screen
          name={ScreensName.DIGITALCONTRACT}
          component={DigitalContract}
        />

        <Stack.Screen name={ScreensName.PAYOUTSETUP} component={PayoutSetup} />
        <Stack.Screen name={ScreensName.TRAINING} component={Training} />
        <Stack.Screen
          name={ScreensName.STARTTRAINING}
          component={StartTraining}
        />

        <Stack.Screen name={ScreensName.STARTQUIZ} component={StartQuiz} />
        <Stack.Screen name={ScreensName.QUIZ} component={Quiz} />
        <Stack.Screen name={ScreensName.ASSIGNMENT} component={Assignment} />
        <Stack.Screen
          name={ScreensName.CERTIFICATION}
          component={Certification}
        />

        <Stack.Screen
          name={ScreensName.CHILDPROGRESS}
          component={ChildProgress}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
