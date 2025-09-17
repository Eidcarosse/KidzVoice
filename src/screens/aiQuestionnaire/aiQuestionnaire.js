import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    FlatList,
    StyleSheet,
    Platform,
    Image,
    SectionList,
} from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Images from "../../assets/images";
import { styles } from "./styles";
import StatusBarWrapper from "../../components/customStatusbar";
import { AiCustomHeader } from "../../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../utils/AppColors";
import { requestAudioPermissions } from "../../utils/helper";
import VoiceMessageModal from "../../components/voice/modal";
import VoiceMessage from "../../components/voice";
import AudioNote from "../../components/voice";

const dummyQuestions = [
    "Who are you?",
    "What’s your favorite color?",
    "Where are you from?",
    "What do you like to do in your free time?",
    "Who inspires you the most?",
    "What’s your dream job?",
    "If you could visit anywhere, where would it be?",
    "What’s your favorite movie?",
    "What skill do you want to learn?",
    "What makes you happy?",
];

const Questionnaire = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isVoiceModalVisible, setIsVoiceModalVisible] =
        useState(false);


    const [sections, setSections] = useState([
        { title: dummyQuestions[0], data: [] },
    ]);
    const handleSubmit = () => {
        if (!text.trim()) return;

        const newAnswer = text.trim();
        const nextIndex = currentIndex + 1;

        const updatedSections = [...sections];
        updatedSections[currentIndex] = {
            ...updatedSections[currentIndex],
            data: [newAnswer],
        };

        // Add next question if available
        if (nextIndex < dummyQuestions.length) {
            updatedSections.push({
                title: dummyQuestions[nextIndex],
                data: [],
            });
        }

        setSections(updatedSections);
        setCurrentIndex(nextIndex);
        setText("");

        if (nextIndex >= dummyQuestions.length) {
            alert("✅ All questions completed!");
        }
    };


    const handleSendVoiceMessage = (audioUri) => {
        if (!audioUri) return;

        const nextIndex = currentIndex + 1;

        const updatedSections = [...sections];
        updatedSections[currentIndex] = {
            ...updatedSections[currentIndex],
            data: [
                ...updatedSections[currentIndex].data,
                { type: "voice", uri: audioUri },
            ],
        };

        if (nextIndex < dummyQuestions.length) {
            updatedSections.push({
                title: dummyQuestions[nextIndex],
                data: [],
            });
        }

        setSections(updatedSections);
        setCurrentIndex(nextIndex);

        if (nextIndex >= dummyQuestions.length) {
            alert("✅ All questions completed!");
        }
    };


    const insert = useSafeAreaInsets()
    return (
        <View style={[styles.container, { paddingTop: insert.top || 5 }]}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <AiCustomHeader user={{ img: Images.AVATAR, name: 'Max' }} />

                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => index.toString()}
                    renderSectionHeader={({ section }) => (
                        <View style={styles.questionRow}>
                            <Image source={Images.AIICON} style={styles.aiImg} />
                            <Text style={styles.questionText}>{section.title}</Text>
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <View style={styles.answerBubble}>
                            <Image source={Images.AVATAR} style={styles.userImg} />
                            {typeof item === "string" ? (
                                <Text style={styles.answerText}>{item}</Text>
                            ) : item.type === "voice" ? (
                                <AudioNote uri={item.uri} />

                            ) : null}
                        </View>
                    )}
                    contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
                />
                <View
                    style={styles.bottomBox}
                >
                    <Image source={Images.AIBLUISHBG} style={StyleSheet.absoluteFill} />
                    {isTyping ? (
                        <View style={styles.inputRow}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Type your answer..."
                                value={text}
                                onChangeText={setText}
                            />
                            <TouchableOpacity style={styles.sendBtn} onPress={handleSubmit}>
                                <Image source={Images.SEND_ICON} style={styles.sendImg} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSections([
                                { title: dummyQuestions[0], data: [] },
                            ])}>
                                <Ionicons name="close-circle-outline" size={36} color="#555" />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.actionRow}>
                            <TouchableOpacity onPress={() => setIsTyping(true)}>
                                <Ionicons name="text-outline" size={36} color="#555" />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.micContainer} onPress={async () => {
                                // const hasPermission = await requestAudioPermissions();
                                // if (!hasPermission) return;

                                setIsVoiceModalVisible(true);
                            }}>
                                <Image source={Images.MIC} style={styles.micImg} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSections([
                                { title: dummyQuestions[0], data: [] },
                            ])}>
                                <Ionicons name="close-circle-outline" size={36} color="#555" />
                            </TouchableOpacity>
                        </View>
                    )}

                </View>
            </KeyboardAvoidingView>
            {isVoiceModalVisible && (
                <VoiceMessageModal
                    isVisible={isVoiceModalVisible}
                    onClose={() => setIsVoiceModalVisible(false)}
                    onSend={audioUri => {
                        handleSendVoiceMessage(audioUri);
                        setIsVoiceModalVisible(false);
                    }}
                />
            )}
        </View>
    );
};

export default Questionnaire;


