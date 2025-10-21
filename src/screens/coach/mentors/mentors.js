import { View, Text } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { useTranslation } from "react-i18next";

export default function Mentors() {
  const { t } = useTranslation();
  return (
    <StatusBarWrapper>
      <View>
        <Text>{t(`mentors.mentor`)}</Text>
      </View>
    </StatusBarWrapper>
  );
}
