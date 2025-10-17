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
import { Button } from "../../../components";

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
                                title: "Child History",
                                tags: ["CBT", "Diagnosis", "Crisis Care", "Research", "Empathy"],
                                text: "Licensed psychotherapist specializing in depth psychology, cognitive behavioral therapy, family and couples therapy, and crisis care. Experienced in guiding clients through emotional recovery and mental resilience building. Believes that understanding early childhood patterns is key to unlocking adult behavioral responses and creating long-term healing paths.",
                            },
                            {
                                title: "Current Struggles",
                                tags: ["Behavioral Therapy", "Emotional Healing", "Empathy"],
                                text: "Teaches workshops on cognitive behavioral therapy (CBT), stress management, and effective communication in relationships. Trainer in Nonviolent Communication and resilience-based therapies. Currently exploring innovative ways to integrate emotional awareness and mindfulness into classroom environments to better support young learners.",
                            },
                            {
                                title: "Family Context",
                                tags: ["Psychology", "Therapy", "Research"],
                                text: "Ph.D. in Clinical Psychology from the University of Berlin. Conducted research on anxiety treatment and behavioral change models. Works closely with families to foster emotionally safe home environments, emphasizing the importance of trust, communication, and supportive parenting techniques.",
                            },
                        ]
                        : [
                            {
                                title: "About Me",
                                tags: ["Anxiety", "Stress", "Loneliness", "Confidence"],
                                text: "I’ve been feeling anxious and isolated since moving to a new school. Sometimes, it’s hard to express how I feel or connect with others my age. I’m trying to understand my emotions better and figure out how to feel more comfortable around people who don’t know me yet.",
                            },
                            {
                                title: "Challenges",
                                tags: ["Panic Attacks", "Low Self-Esteem", "Overthinking"],
                                text: "I often feel nervous before exams or group activities. I want to learn how to manage my emotions and build confidence. Sometimes I overthink what others might be thinking about me, which makes it harder to relax or focus on what I enjoy doing.",
                            },
                            {
                                title: "Goals",
                                tags: ["Emotional Balance", "Self-Growth", "Focus"],
                                text: "I want to feel more comfortable in social situations, stay focused in school, and learn how to control my thoughts during stressful moments. My goal is to develop stronger emotional balance, improve my self-talk, and feel proud of who I am — not just for achievements, but for personal growth too.",
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
                {/* <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>{isTeacher ? "Accept Request" : "Send Request"}</Text>
                </TouchableOpacity> */}
                <Button textStyle={styles.btnText} btnStyle={styles.btn} title={isTeacher ? "Accept Request" : "Send Request"} />
            </View>
        </StatusBarWrapper>
    );
};

export default ViewProfileScreen;


