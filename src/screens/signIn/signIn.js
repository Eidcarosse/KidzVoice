import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import StatusBarWrapper from "../../components/customStatusbar";
import { Button, RoleSelection, SocialLogin } from "../../components";
import styles from "./styles";
import Images from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import {
  getStoredValue,
  infoToastMessage,
  setUserRole,
  storeValue,
} from "../../utils/Methods";
import ScreensName from "../../routes/routes";

export default function SignIn() {
  const navigation = useNavigation();
  const [selectedRole, setSelectedRole] = useState(null);

  const [childData, setChildData] = useState();
  const [parentData, setParentData] = useState();

  const [loading, setLoading] = useState(true);

  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    const parentRes = await getStoredValue("parentData");
    console.log(
      "Child Data Response",
      childDataRes,
      "   Parent Data",
      parentRes
    );

    setChildData(childDataRes);
    setParentData(parentRes);
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);

  const onSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleGoogleLogIn = async () => {
    console.log("Google Login");

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        navigation.navigate(ScreensName.PARENTPROFILENFO);
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleFacebookLogIn = async () => {
    console.log("Facebook Login");

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        navigation.navigate(ScreensName.PARENTPROFILENFO);
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleAppeLogIn = async () => {
    console.log("Apple Login");

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        navigation.navigate(ScreensName.PARENTPROFILENFO);
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleXLogIn = async () => {
    console.log("Simple Sign In", selectedRole);

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        navigation.navigate(ScreensName.PARENTPROFILENFO);
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleSignIn = async () => {
    console.log("Simple Sign In", selectedRole);

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        if (childData?.id && parentData?.isLogin) {
          navigation.navigate(ScreensName.CHILDPROGRESS);
        } else {
          navigation.navigate(ScreensName.PARENTPROFILENFO);
        }
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleGuest = () => {
    console.log("Guest Mode");
    infoToastMessage("Guest Mode", "Guest Mode Coming Soon");
  };
  return (
    <StatusBarWrapper>
      <Text style={styles.welcomeText}>Welcome! Tell us who you are 👋</Text>

      <RoleSelection selected={selectedRole} onSelection={setSelectedRole} />

      <SocialLogin
        title="Continue with google"
        image={Images.GOOGLE}
        onPress={handleSignIn}
      />
      <SocialLogin
        title="Continue with Facebook"
        image={Images.FACEBOOK}
        onPress={handleSignIn}
      />

      <SocialLogin
        title="Continue with Apple"
        image={Images.APPLE}
        onPress={handleSignIn}
      />

      <SocialLogin
        title="Continue with X"
        image={Images.X}
        onPress={handleSignIn}
      />

      <Text style={styles.alreadyText}>Already User?</Text>
      <Button title={"Sign in"} onPress={handleSignIn} />
      <Button
        title={"Continue as Guest"}
        onPress={handleGuest}
        btnStyle={styles.guestBtnStyle}
        textStyle={styles.guestBtnText}
      />
    </StatusBarWrapper>
  );
}
