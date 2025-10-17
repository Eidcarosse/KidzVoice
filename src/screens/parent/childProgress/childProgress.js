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
import StatusBarWrapper from "../../../components/customStatusbar";
import ProgressChart from "./progressChart";
import styles from "./styles";
import { childProgreeData } from "../../../utils/Data";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../../../utils/AppColors";
import {
  getStoredValue,
  infoToastMessage,
  storeValue,
} from "../../../utils/Methods";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../../components";
import { useTranslation } from "react-i18next";

export default function ChildProgress() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [childData, setChildData] = useState();
  const [loading, setLoading] = useState(true);

  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    setChildData(childDataRes);
  };

  const handleSearchTeacher = () => {
    console.log("Guest Mode");
    infoToastMessage("Teacher", "Teacher Search Coming Soon");
  };

  const handleStudentActivities = () => {
    console.log("Guest Mode");
    infoToastMessage("Student Activities", "Student Activities Coming Soon");
  };

  const handleTeacherChat = () => {
    console.log("Guest Mode");
    infoToastMessage("Teacher Chat", "Teacher Chat Coming Soon");
  };

  const handleAssignment = () => {
    console.log("Guest Mode");
    infoToastMessage("Assignment", "Assignment Coming Soon");
  };

  const handleOtherTasks = () => {
    console.log("Guest Mode");
    infoToastMessage("Other Tasks", "Other Tasks Coming Soon");
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      // Clean up when screen loses focus
      return () => subscription.remove();
    }, [])
  );

  // useEffect(() => {
  //   const backAction = () => {
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: ScreensName.SIGNIN }],
  //     });

  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove(); // cleanup
  // }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <StatusBarWrapper>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>{childData?.name}</Text>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.progressHeaderView}>
            <Text style={styles.progressText}>
              {t(`childProgress.progressBar`)}
            </Text>
            <Text style={styles.viewDetailsText}>
              {t(`childProgress.viewDetailsReport`)}
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
                        {t(`childProgress.${item?.label}`)}
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
          onPress={handleSearchTeacher}
        >
          <Ionicons name="musical-notes" size={26} color={colors.white} />
          <View>
            <Text style={styles.teacherTitle}>
              {t(`childProgress.teachers`)}
            </Text>
            <Text style={styles.teacherSubtitle}>
              {t(`childProgress.teacherSubtitle`)}
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.subHeading}>{t(`childProgress.checkOut`)}</Text>

        <View style={styles.optionGrid}>
          <TouchableOpacity
            style={styles.optionBtn}
            onPress={handleStudentActivities}
          >
            <Ionicons name="bulb-outline" size={20} color={colors.jumbo} />
            <Text style={styles.optionText}>
              {t(`childProgress.activitiesForStudent`)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionBtn}
            onPress={handleTeacherChat}
          >
            <MaterialIcons name="chat" size={20} color={colors.jumbo} />
            <Text style={styles.optionText}>
              {t(`childProgress.chatTeacher`)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn} onPress={handleAssignment}>
            <Ionicons
              name="document-text-outline"
              size={20}
              color={colors.jumbo}
            />
            <Text style={styles.optionText}>
              {t(`childProgress.assignment`)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionBtn} onPress={handleOtherTasks}>
            <Ionicons name="list-outline" size={20} color={colors.jumbo} />
            <Text style={styles.optionText}>
              {t(`childProgress.otherTasks`)}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 10 }}
        >
          <Button
            title={t(`childProgress.setUpChild`)}
            onPress={async () => {
              try {
                navigation.navigate(ScreensName.ACCOUNT);
              } catch (error) {
                console.error("❌ Error clearing AsyncStorage:", error);
              }
            }}
            textStyle={styles.textStyle}
            btnStyle={styles.btnStyleView}
          />

          <Button
            title={t(`childProgress.logOut`)}
            onPress={async () => {
              try {
                const parentData = await getStoredValue("parentData");

                console.log("Parent Data", parentData);

                const updatedData = {
                  ...parentData,
                  isLogin: false,
                };

                console.log("Updated Parent Data", updatedData);

                await storeValue("parentData", updatedData);
                // await AsyncStorage.removeItem('childData');
                await AsyncStorage.removeItem("LOCK_KEY");
                console.log("✅ Async data cleared successfully");
                navigation.navigate(ScreensName.WELCOME);
              } catch (error) {
                console.error("❌ Error clearing AsyncStorage:", error);
              }
            }}
          />
        </View>
      </ScrollView>
    </StatusBarWrapper>
  );
}
