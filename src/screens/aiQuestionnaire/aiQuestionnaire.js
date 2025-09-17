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


    const handleVoiceInput = () => {
        const simulatedVoiceText = "This is a voice answer";
        setText(simulatedVoiceText);
        setIsTyping(true);
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
                            <Text style={styles.answerText}>{item}</Text>
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
                                <Text style={styles.sendText}>Send</Text>
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

                            <TouchableOpacity onPress={handleVoiceInput} style={styles.micContainer}>
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
        </View>
    );
};

export default Questionnaire;


