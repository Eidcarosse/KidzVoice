import { View, Text } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Header } from "../../../components";
import { useTranslation } from "react-i18next";

export default function ChildProfile() {
  const { t } = useTranslation();
  return (
    <StatusBarWrapper>
      <Header title={"Stephane Maarek"} />
    </StatusBarWrapper>
  );
}
