import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Header } from "../../../components";

export default function Training() {
  return (
    <StatusBarWrapper>
      <Header title={"Training"} />

      <Text style={styles.modulesText}>Modules</Text>
    </StatusBarWrapper>
  );
}
