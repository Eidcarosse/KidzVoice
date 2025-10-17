import React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { ArrowLeft, MoreVertical, MapPin, Globe, CheckCircle } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomHeader from "../../../components/customHeader/header";
import { styles } from "./styles";
import StatusBarWrapper from "../../../components/customStatusbar";

const ViewProfileScreen = ({ navigation, route }) => {
    const inset = useSafeAreaInsets();
    const { item, isTeacher } = route.params || {};


    return (
        <StatusBarWrapper>
            <View style={[styles.container,
                // { paddingTop: inset.top, paddingBottom: inset.bottom }
            ]}>
                <CustomHeader title={item?.name || "Teacher Profile"} rightIcon={<MoreVertical size={22} color="#000" />} />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: item.image }} style={styles.profileImage} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={styles.certifiedRow}>
                                <Text style={styles.certified}>Certified (Level 1)</Text>
                                <CheckCircle size={12} color="#007BFF" style={{ marginLeft: 4 }} />
                            </View>
                            <View style={styles.row}>
                                <MapPin size={12} color="#555" />
                                <Text style={styles.meta}>{item.location}</Text>
                                <Globe size={12} color="#555" style={{ marginLeft: 10 }} />
                                <Text style={styles.meta}>{item.language}</Text>
                            </View>
                        </View>
                    </View>

                    {/* <View style={styles.coverWrapper}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.coverImage}
                    />
                </View> */}

                    {/* Dummy Sections */}
                    {(isTeacher
                        ? [
                            {
                                title: "Bio-graph",
                                tags: ["CBT", "Diagnosis", "Crisis Care", "Research", "Empathy"],
                                text: "Licensed psychotherapist specializing in depth psychology, cognitive behavioral therapy, family and couples therapy, and crisis care. Experienced in guiding clients through emotional recovery and mental resilience building.",
                            },
                            {
                                title: "Courses",
                                tags: ["Behavioral Therapy", "Emotional Healing", "Empathy"],
                                text: "Teaches workshops on cognitive behavioral therapy (CBT), stress management, and effective communication in relationships. Trainer in Nonviolent Communication and resilience-based therapies.",
                            },
                            {
                                title: "Education",
                                tags: ["Psychology", "Therapy", "Research"],
                                text: "Ph.D. in Clinical Psychology from the University of Berlin. Conducted research on anxiety treatment and behavioral change models.",
                            },
                        ]
                        : [
                            {
                                title: "About Me",
                                tags: ["Anxiety", "Stress", "Loneliness", "Confidence"],
                                text: "I’ve been feeling anxious and isolated since moving to a new school. Sometimes, it’s hard to express how I feel or connect with others my age.",
                            },
                            {
                                title: "Challenges",
                                tags: ["Panic Attacks", "Low Self-Esteem", "Overthinking"],
                                text: "I often feel nervous before exams or group activities. I want to learn how to manage my emotions and build confidence.",
                            },
                            {
                                title: "Goals",
                                tags: ["Emotional Balance", "Self-Growth", "Focus"],
                                text: "I want to feel more comfortable in social situations, stay focused in school, and learn how to control my thoughts during stressful moments.",
                            },
                        ]
                    ).map((section, index) => (
                        <View key={index} style={styles.section}>
                            <Text style={styles.sectionTitle}>{section.title}</Text>

                            <View style={styles.tagContainer}>
                                {section.tags.map((tag, i) => (
                                    <Text key={i} style={styles.tag}>
                                        {tag}
                                    </Text>
                                ))}
                            </View>

                            <Text style={styles.sectionText}>{section.text}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Bottom Button */}
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>{isTeacher ? "Accept Request" : "Send Request"}</Text>
                </TouchableOpacity>
            </View>
        </StatusBarWrapper>
    );
};

export default ViewProfileScreen;


