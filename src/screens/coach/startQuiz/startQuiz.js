import { View, Text, Image } from "react-native";
import React, { useRef } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Button, Header } from "../../../components";
import styles from "./styles";
import Images from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { useTranslation } from "react-i18next";

export default function StartQuiz() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleStartQuiz = () => {
    navigation.navigate(ScreensName.QUIZ);
  };
  return (
    <StatusBarWrapper>
      <Header title={t(`startQuiz.startQuiz`)} />

      <Image
        source={Images.STARTQUIZ}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.readyText}>{t(`startQuiz.readyText`)}</Text>
      <Text style={styles.okayText}>{t(`startQuiz.okayText`)}</Text>

      <Button
        title={t(`startQuiz.startQuiz`)}
        btnStyle={styles.startBtn}
        onPress={handleStartQuiz}
      />
    </StatusBarWrapper>
  );
}
