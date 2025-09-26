import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../components/customStatusbar";
import { Button, RoleSelection, SocialLogin } from "../../components";
import styles from "./styles";
import Images from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { setUserRole } from "../../utils/Methods";
import ScreensName from "../../routes/routes";

export default function SignIn() {
  const navigation = useNavigation();
  const [selectedRole, setSelectedRole] = useState(null);

  const onSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleGoogleLogIn = () => {
    console.log("Google Login");
  };

  const handleFacebookLogIn = () => {
    console.log("Facebook Login");
  };

  const handleAppeLogIn = () => {
    console.log("Apple Login");
  };

  const handleXLogIn = () => {
    console.log("X Login");
  };

  const handleSignIn = async () => {
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

  const handleGuest = () => {
    console.log("Guest Mode");
  };
  return (
    <StatusBarWrapper>
      <Text style={styles.welcomeText}>Welcome! Tell us who you are 👋</Text>

      <RoleSelection selected={selectedRole} onSelection={setSelectedRole} />

      <SocialLogin
        title="Continue with google"
        image={Images.GOOGLE}
        onPress={handleGoogleLogIn}
      />
      <SocialLogin
        title="Continue with Facebook"
        image={Images.FACEBOOK}
        onPress={handleFacebookLogIn}
      />

      <SocialLogin
        title="Continue with Apple"
        image={Images.APPLE}
        onPress={handleAppeLogIn}
      />

      <SocialLogin
        title="Continue with X"
        image={Images.X}
        onPress={handleXLogIn}
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
