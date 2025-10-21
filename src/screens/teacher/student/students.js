import React, { useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import StatusBarWrapper from "../../../components/customStatusbar";
import StudentCard from "../../../components/studentCard/studentCard";
import CustomHeader from "../../../components/customHeader/header";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { infoToastMessage } from "../../../utils/Methods";
// import { students } from "../../../utils/Data";

export default function Students() {
  const { t } = useTranslation();
  const [activeStudentId, setActiveStudentId] = useState(null);

  const handleSelectStudent = (id) => {
    setActiveStudentId(id);
  };
  const students = [
    {
      id: "1",
      name: "Stephane Maarek",
      title: "CBT | Diagnosis | Crisis Care  ",
      level: "1",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: "2",
      name: "John Doe",
      title: "Behavioral Therapy | Emotional Support  ",
      level: "2",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: "3",
      name: "Sarah Johnson",
      title: "Mental Health | Crisis Management  ",
      level: "3",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: "4",
      name: "David Brown",
      title: "Depression Support | Stress Control  ",
      level: "2",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: "5",
      name: "Emily Carter",
      title: "Trauma Recovery | Self-Esteem  ",
      level: "1",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  const handleNotificationPress = () => {
    console.log("Guest Mode");
    infoToastMessage(
      t(`coachDashboard.notification`),
      t(`coachDashboard.notificationComing`)
    );
  };

  return (
    <StatusBarWrapper>
      <View style={styles.container}>
        <CustomHeader
          title={t(`students.students`)}
          rightIcon={
            <Ionicons name="notifications-outline" size={24} color="#000" />
          }
          onPressRightIcon={handleNotificationPress}
        />

        <FlatList
          data={students}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleSelectStudent(item.id)}
            >
              <StudentCard
                index={index}
                name={item.name}
                title={item.title}
                level={item.level}
                image={item.image}
                highlighted={activeStudentId === item.id}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </View>
    </StatusBarWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});
