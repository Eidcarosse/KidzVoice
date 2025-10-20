import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t } = useTranslation();
  return (
    <StatusBarWrapper>
      <View>
        <Text>{t(`resume.resume`)}</Text>
      </View>
    </StatusBarWrapper>
  );
}
