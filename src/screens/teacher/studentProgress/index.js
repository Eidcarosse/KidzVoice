import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { childProgreeData } from "../../../utils/Data";
import styles from "./styles";
import ScreensName from "../../../routes/routes";
import {
  getStoredValue,
  infoToastMessage,
  storeValue,
} from "../../../utils/Methods";
import StatusBarWrapper from "../../../components/customStatusbar";
import ProgressChart from "../../parent/childProgress/progressChart";
import colors from "../../../utils/AppColors";
import { Button } from "../../../components";
import { useTranslation } from "react-i18next";

export default function TeacherStudentProgress() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [childData, setChildData] = useState();
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { item } = route.params || {};

  console.log("Selected Student", item);

  const handleNotificationPress = () => {
    console.log("Guest Mode");
    infoToastMessage(
      t(`childProgress.notification`),
      t(`childProgress.notificationComing`)
    );
  };

  const handleStartLiveSession = () => {
    console.log("Guest Mode ww");
  };

  const handleStudentActivities = () => {
    console.log("Guest Mode");
    infoToastMessage(
      t(`teacherChildProgress.activities`),
      t(`teacherChildProgress.activitiesComing`)
    );
  };

  const handleChatKid = () => {
    console.log("Guest Mode");
    infoToastMessage(
      t(`teacherChildProgress.chatKid`),
      t(`teacherChildProgress.chatKidComing`)
    );
  };

  const handleAssignment = () => {
    console.log("Guest Mode");
    infoToastMessage(
      t(`teacherChildProgress.assignment`),
      t(`teacherChildProgress.assignmentComing`)
    );
  };

  const handleChatParent = () => {
    console.log("Guest Mode");

    infoToastMessage(
      t(`teacherChildProgress.chatParent`),
      t(`teacherChildProgress.chatParentComing`)
    );
  };

  const handleOtherTasks = () => {
    console.log("Guest Mode");
    infoToastMessage(
      t(`childProgress.otherTask`),
      t(`childProgress.otherTaskComing`)
    );
  };

  return (
    <StatusBarWrapper>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Image
            source={{ uri: item?.image || "https://via.placeholder.com/150" }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>{item?.name || "Unknown Student"}</Text>
          <TouchableOpacity
            style={styles.notificationBtn}
            onPress={handleNotificationPress}
          >
            <Ionicons name="notifications-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.progressHeaderView}>
            <Text style={styles.progressText}>
              {t(`teacherChildProgress.progress`)}
            </Text>
            <Text style={styles.viewDetailsText}>
              {t(`teacherChildProgress.viewDetailsReport`)}
            </Text>
          </View>

          <View style={styles.progressHeaderView}>
            <ProgressChart data={childProgreeData} />

            <View>
              {childProgreeData?.map((item, index) => {
                return (
                  <View key={index} style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: item?.color,
                        borderRadius: 6,
                        marginTop: 5,
                        marginRight: 5,
                      }}
                    />
                    <View>
                      <Text style={styles.progressTitleText}>
                        {item?.title}
                      </Text>
                      <Text style={styles.progressTitleText}>
                        {item?.value}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.teacherCard}
          onPress={handleStartLiveSession}
        >
          <Ionicons name="musical-notes" size={26} color={colors.white} />
          <View>
            <Text style={styles.teacherTitle}>
              {t(`teacherChildProgress.startLive`)}
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.subHeading}>
          {t(`teacherChildProgress.checkOut`)}
        </Text>

        <View style={styles.optionGrid}>
          <TouchableOpacity
            style={styles.optionBtn}
            onPress={handleStudentActivities}
          >
            <Ionicons name="bulb-outline" size={20} color={colors.jumbo} />
            <Text style={styles.optionText}>
              {t(`teacherChildProgress.activities`)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn} onPress={handleChatKid}>
            <MaterialIcons name="chat" size={20} color={colors.jumbo} />
            <Text style={styles.optionText}>
              {t(`teacherChildProgress.chatKid`)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn} onPress={handleAssignment}>
            <Ionicons
              name="document-text-outline"
              size={20}
              color={colors.jumbo}
            />
            <Text style={styles.optionText}>
              {t(`teacherChildProgress.assignment`)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn} onPress={handleChatParent}>
            <MaterialIcons name="chat" size={20} color={colors.jumbo} />
            <Text style={styles.optionText}>
              {t(`teacherChildProgress.chatParent`)}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </StatusBarWrapper>
  );
}
