import { View, Text } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Header } from "../../../components";
import styles from "./styles";

export default function Requests() {
  return (
    <StatusBarWrapper>
      <Header title="Requests" />

      <Text style={styles.requestText}>15 new requests for availability</Text>
    </StatusBarWrapper>
  );
}
