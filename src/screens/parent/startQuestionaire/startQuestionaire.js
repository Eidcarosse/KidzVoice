import { View, Text, Image } from "react-native";
import React, { use } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";
import styles from "./styles";
import { Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";

export default function StartQuestionaire() {
  const navigation = useNavigation();

  const handleBegan = () => {
    navigation.navigate(ScreensName.PARENTQUESTIONAIRE);
  };
  return (
    <StatusBarWrapper>
      <Image source={Images.QUESTIONAIRE} style={styles.imageStyle} />

      <Text style={styles.startText}>Start Questionnaire</Text>

      <Text style={styles.hisText}>
        his helps us understand Max’s needs. It only takes about 5 minutes. You
        can pause and return anytime.
      </Text>

      <Button title={"Began"} onPress={handleBegan} />
    </StatusBarWrapper>
  );
}
