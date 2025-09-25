import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import ScreensName from "../../../routes/routes";
import CustomHeader from "../../../components/customHeader/header";
import StatusBarWrapper from "../../../components/customStatusbar";
import Images from "../../../assets/images";

export default function ChildDashboard() {
    const navigation = useNavigation();

    return (
        <StatusBarWrapper>
            <View style={styles.container}>
                <Image source={Images.AIBLUISHBG} style={styles.backgroundImageStyle} />

                <View style={styles.topRow}>
                    <CustomHeader
                        isBack={true}
                        onGoBack={() => navigation.goBack()}
                    />
                    <TouchableOpacity
                        onPress={() => alert("Settings pressed")}
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
                        <Text style={styles.name}>Max</Text>
                        <Text style={styles.email}>max@mail.com</Text>
                    </View>

                    <TouchableOpacity style={styles.liveButton} onPress={() => navigation.navigate(ScreensName.AILIVESECTION)}>
                        <Text style={styles.liveText}>AI Live Session</Text>
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
                    <View style={styles.card}>
                        <View style={styles.iconWrapper}>
                            <Ionicons name="book-outline" size={20} color="#1976d2" />
                        </View>
                        <Text style={styles.cardText}>Assignment</Text>
                        <Text style={styles.cardSub}>2 complete out of 10</Text>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.iconWrapper}>
                            <Ionicons name="bicycle-outline" size={20} color="#1976d2" />
                        </View>
                        <Text style={styles.cardText}>Activities</Text>
                        <Text style={styles.cardSub}>2 complete out of 10</Text>
                    </View>
                </View>

                {/* 🔹 Growth Journey */}
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
            </View>
        </StatusBarWrapper>
    );
}
