import { View, Text, Image } from "react-native";
import React, { use, useEffect, useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";
import styles from "./styles";
import { Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { getStoredValue } from "../../../utils/Methods";

export default function StartQuestionaire() {
  const navigation = useNavigation();
  const [childData, setChildData] = useState();
  const [loading, setLoading] = useState(true);

  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    console.log("Child Data Response", childDataRes);

    setChildData(childDataRes);
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);

  const handleBegan = () => {
    navigation.navigate(ScreensName.PARENTQUESTIONAIRE);
  };
  return (
    <StatusBarWrapper>
      <Image source={Images.QUESTIONAIRE} style={styles.imageStyle} />

      <Text style={styles.startText}>Start Questionnaire</Text>

      <Text style={styles.hisText}>
        This helps us understand {childData?.name}’s needs. It only takes about 5
        minutes. You can pause and return anytime.
      </Text>

      <Button title={"Began"} onPress={handleBegan} />
    </StatusBarWrapper>
  );
}
