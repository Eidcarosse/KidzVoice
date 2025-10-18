import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  ScrollView,
  Modal,
} from "react-native";
import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./style";
import ScreensName from "../../../routes/routes";
import CustomHeader from "../../../components/customHeader/header";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../../components";
import { getStoredValue, infoToastMessage } from "../../../utils/Methods";
import TeacherIcon from "./../../../assets/svg/training.svg"
export default function ChildDashboard() {
  const navigation = useNavigation();
  const route = useRoute();
  const isSectionTaken = route?.params?.isSectionTaken || false;
  const insets = useSafeAreaInsets();
  const [isLocked, setIsLocked] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);


  useEffect(() => {
    const checkLock = async () => {
      const savedTime = await AsyncStorage.getItem("LOCK_KEY");
      if (savedTime) {
        const lockTime = parseInt(savedTime, 10);
        const now = Date.now();
        const diff = lockTime + 24 * 60 * 60 * 1000 - now;

        if (diff > 0) {
          setIsLocked(true);
          setRemainingTime(diff);
        } else {
          setIsLocked(false);
          await AsyncStorage.removeItem("LOCK_KEY");
        }
      }
    };

    checkLock();
  }, []);

  useEffect(() => {
    if (!isLocked || remainingTime === null) return;

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (!prev || prev <= 1000) {
          clearInterval(interval);
          setIsLocked(false);
          AsyncStorage.removeItem("LOCK_KEY");
          return null;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isLocked, remainingTime]);
  const handlePressSetting = (text) => {
    infoToastMessage(`${text}, "${text} coming soon"`);
  };
  const handlePress = async () => {
    await AsyncStorage.setItem("LOCK_KEY", Date.now().toString());
    setIsLocked(true);
    setRemainingTime(24 * 60 * 60 * 1000); // 24 hours
    navigation.navigate(ScreensName.AILIVESECTION);
  };

  // format remaining time (HH:MM:SS)
  const formatTime = (ms) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const [childData, setChildData] = useState();
  const [loading, setLoading] = useState(true);

  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    console.log("Child Data Response", childDataRes);
    setChildData(childDataRes);
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);
  return (
    // <StatusBarWrapper>
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <ScrollView>
        <Image source={Images.AIBLUISHBG} style={styles.backgroundImageStyle} />

        <View style={styles.topRow}>
          <TouchableOpacity
            onPress={() => setShowSettingsModal(true)}
            style={styles.settingIcon}
          >
            <Ionicons name="settings-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{childData?.name}</Text>
            <Text style={styles.email}>{childData?.name}@gmail.com</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.liveButton,
              (isLocked || isSectionTaken) && { backgroundColor: "#99dae3ff" },
            ]}
            disabled={isLocked || isSectionTaken}
            onPress={handlePress}
          >
            <Text style={styles.liveText}>
              {isLocked && remainingTime
                ? `Come back in ${formatTime(remainingTime)}`
                : "AI Live Session"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.badges}>
          <Text style={styles.badge}>⭐ Homework Hero</Text>
          <Text style={styles.badge}>🏆 Friendly Star</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Challenges</Text>
          <Text style={styles.subtitle}>
            Focus in class, Reading struggles, Making friends
          </Text>
        </View>

        {/* 🔹 Progress Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.textStyle}>Level 1</Text>
          <View style={styles.progressContainer}>
            <MaterialIcons name="check-circle" size={38} color="green" />
            <View style={styles.progressHeader}>
              <Text style={styles.progressText}>
                100% <Text style={styles.completeStyle}>Completed</Text>
              </Text>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
            </View>
          </View>
        </View>

        {/* 🔹 Cards Row */}
        <View style={styles.row}>
          <Pressable style={styles.card} onPress={() => handlePressSetting("Assignment")} >
            <View style={styles.iconWrapper}>
              <Ionicons name="book-outline" size={20} color="#1976d2" />
            </View>
            <Text style={styles.cardText}>Assignment</Text>
            <Text style={styles.cardSub}>2 complete out of 10</Text>
          </Pressable>
          <Pressable style={styles.card} onPress={() => handlePressSetting("Activities")} >
            <View style={styles.iconWrapper}>
              <Ionicons name="bicycle-outline" size={20} color="#1976d2" />
            </View>
            <Text style={styles.cardText}>Activities</Text>
            <Text style={styles.cardSub}>2 complete out of 10</Text>
          </Pressable>
        </View>


        <TouchableOpacity style={styles.teacherContainer} onPress={() => navigation.navigate(ScreensName.TEACHERSCREEN)}>
          <View style={styles.iconContainer}>
            <TeacherIcon width={30} height={30} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Teachers</Text>
            <Text style={styles.subtitle}>Up to 30 teachers are available.</Text>
          </View>
        </TouchableOpacity>




        <Text style={styles.titleStyle}>Your Personal Growth Journey</Text>
        <View style={styles.growContainer}>
          <View style={styles.growthCard}>
            <Text style={styles.growthTitle}>
              Learning and Friendship Workshop
            </Text>
            <Text style={styles.growthSub}>
              CBT | Cognitive Behavioral Therapy
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 10 }}>

          <Button
            title="Logout"
            onPress={async () => {
              try {
                await AsyncStorage.removeItem('childData');
                await AsyncStorage.removeItem('LOCK_KEY');
                console.log('✅ Async data cleared successfully');
                navigation.navigate(ScreensName.WELCOME);
              } catch (error) {
                console.error('❌ Error clearing AsyncStorage:', error);
              }
            }}
          />
        </View>
      </ScrollView>
      {/* ⚙️ Settings Modal */}
      <Modal
        visible={showSettingsModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSettingsModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Are you sure you want to logout?</Text>

            <View style={styles.modalRow}>

              <TouchableOpacity style={styles.cancelButton} onPress={() => setShowSettingsModal(false)}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoutButton} onPress={async () => {
                try {
                  await AsyncStorage.removeItem("childData");
                  await AsyncStorage.removeItem("LOCK_KEY");
                  setShowSettingsModal(false);
                  navigation.navigate(ScreensName.WELCOME);
                } catch (error) {
                  console.error("❌ Error during logout:", error);
                }
              }}>
                <MaterialCommunityIcons name="logout" size={22} color="#fff" />
                <Text style={styles.logoutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


    </View>
    // </StatusBarWrapper>
  );
}
