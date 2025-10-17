import { View, Text, Image } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Button } from "../../../components";
import Images from "../../../assets/images";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import { useTranslation } from "react-i18next";

export default function AddChild() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleAddChild = () => {
    navigation.navigate(ScreensName.CREATECHILDPROFILE);
  };
  return (
    <StatusBarWrapper>
      <Image
        source={Images.ADDCHILD}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.addText}>{t(`addChild.addChild`)}</Text>

      <Text style={styles.loremText}>{t(`addChild.childInfo`)}</Text>

      <Button title={t(`addChild.addChild`)} onPress={handleAddChild} />
    </StatusBarWrapper>
  );
}
