import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Header, TrainingCard } from "../../../components";
import { modules } from "../../../utils/Data";

export default function Training() {
  return (
    <StatusBarWrapper>
      <Header title={"Training"} />

      <Text style={styles.modulesText}>Modules</Text>

      <FlatList
        data={modules}
        renderItem={({ item }) => <TrainingCard module={item} />}
        keyExtractor={({ index }) => index?.toString()}
      />
    </StatusBarWrapper>
  );
}
