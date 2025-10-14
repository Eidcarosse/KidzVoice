import { View, Text } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Header } from "../../../components";

export default function ChildProfile() {
  return (
    <StatusBarWrapper>
      <Header title={"Stephane Maarek"} />
    </StatusBarWrapper>
  );
}
