import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../../components";

export default function ChildProgress() {
  const navigation = useNavigation();
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

  useEffect(() => {
    const backAction = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: ScreensName.SIGNIN }],
      });

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // cleanup
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <StatusBarWrapper edges={["bottom", "top"]}>
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
          <Text style={styles.progressText}>Progress Bar</Text>
          <Text style={styles.viewDetailsText}>View details report</Text>
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
                    <Text style={styles.progressTitleText}>{item?.title}</Text>
                    <Text style={styles.progressTitleText}>{item?.value}</Text>
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
          <Text style={styles.teacherTitle}>Teachers</Text>
          <Text style={styles.teacherSubtitle}>
            You can search out more teacher
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.subHeading}>
        You can check out the ongoing progress of your child
      </Text>

      <View style={styles.optionGrid}>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={handleStudentActivities}
        >
          <Ionicons name="bulb-outline" size={20} color={colors.jumbo} />
          <Text style={styles.optionText}>Activities for student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBtn} onPress={handleTeacherChat}>
          <MaterialIcons name="chat" size={20} color={colors.jumbo} />
          <Text style={styles.optionText}>Chat teacher</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBtn} onPress={handleAssignment}>
          <Ionicons
            name="document-text-outline"
            size={20}
            color={colors.jumbo}
          />
          <Text style={styles.optionText}>Assignment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionBtn} onPress={handleOtherTasks}>
          <Ionicons name="list-outline" size={20} color={colors.jumbo} />
          <Text style={styles.optionText}>Other tasks</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 10 }}>
        <Button
          title="Setup Child"
          onPress={async () => {
            try {
              navigation.navigate(ScreensName.SIGNIN)
            } catch (error) {
              console.error('❌ Error clearing AsyncStorage:', error);
            }
          }}
          textStyle={styles.textStyle}
          btnStyle={styles.btnStyleView}
        />

        <Button
          title="Logout"
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
    </StatusBarWrapper>
  );
}
