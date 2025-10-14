import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { studentMeetings } from "../../../utils/Data";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import colors from "../../../utils/AppColors";

export default function CoachDashboard() {
  const navigation = useNavigation();

  const handleNewRequestsPress = () => {
    navigation.navigate(ScreensName.REQUESTS);
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
        <Ionicons name="notifications-outline" size={24} color={colors.black} />
      </View>

      <Text style={styles.sectionTitle}>
        Suggested Students according to you
      </Text>

      <TouchableOpacity
        style={styles.newRequestCard}
        onPress={handleNewRequestsPress}
      >
        <Ionicons name="notifications" size={30} color={colors.white} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.newRequestTitle}>New requests</Text>
          <Text style={styles.newRequestSubtitle}>
            upto 15 students request for your availability
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
          <View style={{ marginTop: 5, marginLeft: 10 }}>
            <Text style={styles.smallCardTitle}>Students</Text>
            <Text style={styles.smallCardSubtitle}>
              30 students in your class
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.smallCard]}>
          <Ionicons
            name="calendar-outline"
            size={28}
            color={colors.selectiveYellow}
          />
          <View style={{ marginTop: 5, marginLeft: 10 }}>
            <Text style={styles.smallCardTitle}>Schedule</Text>
            <Text style={styles.smallCardSubtitle}>
              5 meeting have upcoming
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recent students meeting</Text>

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
