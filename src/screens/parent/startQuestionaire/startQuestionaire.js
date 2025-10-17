import { View, Text, Image } from "react-native";
import React, { use, useEffect, useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";
import styles from "./styles";
import { Button } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { getStoredValue } from "../../../utils/Methods";
import { useTranslation } from "react-i18next";

export default function StartQuestionaire() {
  const navigation = useNavigation();
  const { t } = useTranslation();
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

      <Text style={styles.startText}>
        {t(`startQuestionaire.startQuestionaire`)}
      </Text>

      <Text style={styles.hisText}>
        {t(`startQuestionaire.underStand`)} {childData?.name}’s{" "}
        {t(`startQuestionaire.childNeed`)}
      </Text>

      <Button
        title={t(`startQuestionaire.beganButton`)}
        onPress={handleBegan}
      />
    </StatusBarWrapper>
  );
}
