import { View, Text, FlatList } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Header } from "../../../components";
import styles from "./styles";
import { students, teachers } from "../../../utils/Data";
import TeacherCard from "../../../components/teacherCard/teacherCard";
import { useTranslation } from "react-i18next";

export default function Requests() {
  const { t } = useTranslation();
  return (
    <StatusBarWrapper>
      <Header title={t(`request.requests`)} />

      <Text style={styles.requestText}>15 {t(`request.newRequest`)} </Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TeacherCard item={item} isTeacher={true} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30, marginHorizontal: 16 }}
      />
    </StatusBarWrapper>
  );
}
