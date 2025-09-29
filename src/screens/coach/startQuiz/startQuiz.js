import { View, Text, Image } from "react-native";
import React, { useRef } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Button, Header } from "../../../components";
import styles from "./styles";
import Images from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";

export default function StartQuiz() {
  const navigation = useNavigation();

  const handleStartQuiz = () => {
    navigation.navigate(ScreensName.QUIZ);
  };
  return (
    <StatusBarWrapper>
      <Header title={"Start Quiz"} />

      <Image
        source={Images.STARTQUIZ}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.readyText}>Ready to practice?</Text>
      <Text style={styles.okayText}>Okay, Show us what you can do!</Text>

      <Button
        title={"Start Quiz"}
        btnStyle={styles.startBtn}
        onPress={handleStartQuiz}
      />
    </StatusBarWrapper>
  );
}
