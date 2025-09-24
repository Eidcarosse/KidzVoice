import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";

export default function Quiz() {
  return (
    <StatusBarWrapper>
      <View>
        <Text>Quiz</Text>
      </View>
    </StatusBarWrapper>
  );
}
