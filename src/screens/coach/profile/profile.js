import { View, Text } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";

export default function Profile() {
  return (
    <StatusBarWrapper>
      <View>
        <Text>Profile</Text>
      </View>
    </StatusBarWrapper>
  );
}
