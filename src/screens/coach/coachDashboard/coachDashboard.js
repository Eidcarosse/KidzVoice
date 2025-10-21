import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { studentMeetings } from "../../../utils/Data";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import colors from "../../../utils/AppColors";
import { infoToastMessage } from "../../../utils/Methods";
import { useTranslation } from "react-i18next";

export default function CoachDashboard() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleNewRequestsPress = () => {
    navigation.navigate(ScreensName.REQUESTS);
  };

  const handleNotificationPress = () => {
    console.log("Guest Mode");
    infoToastMessage(
      t(`coachDashboard.notification`),
      t(`coachDashboard.notificationComing`)
    );
  };
  return (
    <StatusBarWrapper>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/68.jpg" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Nadine Zimet</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleNotificationPress}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        {t("coachDashboard.suggestedStudents")}
      </Text>

      <TouchableOpacity
        style={styles.newRequestCard}
        onPress={handleNewRequestsPress}
      >
        <Ionicons name="notifications" size={30} color={colors.white} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.newRequestTitle}>
            {t("coachDashboard.newRequests")}
          </Text>
          <Text style={styles.newRequestSubtitle}>
            {t("coachDashboard.upTo")} 15 {t("coachDashboard.studentsRequests")}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.smallCardsContainer}>
        <TouchableOpacity style={[styles.smallCard]}>
          <MaterialCommunityIcons
            name="account-group"
            size={28}
            color={colors.purpleHeart}
          />
          <Pressable
            onPress={() => navigation.navigate(ScreensName.STUDENTS)}
            style={{ marginTop: 5, marginLeft: 10 }}
          >
            <Text style={styles.smallCardTitle}>
              {t("coachDashboard.students")}
            </Text>
            <Text style={styles.smallCardSubtitle}>
              30 {t("coachDashboard.studentsClass")}
            </Text>
          </Pressable>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.smallCard]}>
          <Ionicons
            name="calendar-outline"
            size={28}
            color={colors.selectiveYellow}
          />
          <Pressable
            onPress={() =>
              infoToastMessage(
                t("coachDashboard.schedule"),
                t("coachDashboard.scheduleComing")
              )
            }
            style={{ marginTop: 5, marginLeft: 10 }}
          >
            <Text style={styles.smallCardTitle}>
              {t("coachDashboard.schedule")}
            </Text>
            <Text style={styles.smallCardSubtitle}>
              5 {t("coachDashboard.comingMeetings")}
            </Text>
          </Pressable>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        {" "}
        {t("coachDashboard.recentMeeting")}
      </Text>

      <FlatList
        data={studentMeetings}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.studentCard}>
            <Image source={{ uri: item.image }} style={styles.studentImage} />
            <View style={styles.studentInfo}>
              <Text style={styles.studentName}>{item.name}</Text>
              <Text style={styles.studentRole}>{item.role}</Text>
              <View style={styles.classInfo}>
                <Ionicons
                  name="school-outline"
                  size={14}
                  color={colors.ebonyClay}
                />
                <Text style={styles.classText}>{item.classes}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(index) => index.toString()}
      />
    </StatusBarWrapper>
  );
}
