import { View, Text, FlatList } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Header } from "../../../components";
import styles from "./styles";
import { teachers } from "../../../utils/Data";
import TeacherCard from "../../../components/teacherCard/teacherCard";

export default function Requests() {
  return (
    <StatusBarWrapper>
      <Header title="Requests" />

      <Text style={styles.requestText}>15 new requests for availability</Text>

      <FlatList
        data={teachers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TeacherCard item={item} isTeacher={true} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, marginHorizontal: 16 }}
      />
    </StatusBarWrapper>
  );
}
