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

const ViewProfileScreen = ({ navigation, route }) => {
    const inset = useSafeAreaInsets();
    const { item } = route.params || {};

    return (
        <View style={[styles.container, { paddingTop: inset.top, paddingBottom: inset.bottom }]}>
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

                <View style={styles.coverWrapper}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.coverImage}
                    />
                </View>

                {/* Dummy Sections */}
                {[
                    {
                        title: "Bio-graph",
                        tags: ["CBT", "Diagnosis", "Crisis Care", "Research", "Empathy"],
                        text: "lic. phil. & Dipl. Psych., licensed psychotherapist Depth psychology, cognitive behavioral therapy, family and couples therapy, psychodrama, and resource therapy.Specialist for gifted children with learning disabilities and trainer in Nonviolent Communication. Psychotherapy, supervision, individual, couple, group.Lecturer, speaker",
                    },
                    {
                        title: "Courses",
                        tags: ["CBT", "Diagnosis", "Empathy"],
                        text: "lic. phil. & Dipl. Psych., licensed psychotherapist Depth psychology, cognitive behavioral therapy, family and couples therapy, psychodrama, and resource therapy.Specialist for gifted children with learning disabilities and trainer in Nonviolent Communication. Psychotherapy, supervision, individual, couple, group.Lecturer, speaker",
                    },
                    {
                        title: "Education",
                        tags: ["Psychology", "Research", "Empathy"],
                        text: "Ph.D. in Psychology, University of Berlin. Researcher in behavioral science and family therapy.",
                    },
                ].map((section, index) => (
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
                <Text style={styles.btnText}>Send Request</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ViewProfileScreen;


