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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Images from "../../assets/images";
import { styles } from "./styles";
import StatusBarWrapper from "../../components/customStatusbar";
import { AiCustomHeader } from "../../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
    const [answers, setAnswers] = useState([]);
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSubmit = () => {
        if (!text.trim()) return;

        const newAnswer = {
            question: dummyQuestions[currentIndex],
            answer: text.trim(),
        };

        setAnswers((prev) => [...prev, newAnswer]);
        setText("");
        setIsTyping(false);

        if (currentIndex < dummyQuestions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            console.log("✅ All answers:", [...answers, newAnswer]);
            alert("You have completed all questions!");
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
                <AiCustomHeader user={{ img: Images.AIICON, name: 'Max' }} />
                <View style={styles.questionRow}>
                    <Image source={Images.AIICON} style={styles.aiImg} />
                    <Text style={styles.questionText}>
                        {dummyQuestions[currentIndex]}
                    </Text>
                </View>

                <FlatList
                    data={answers}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.answerBubble}>
                            <Ionicons name="person-circle-outline" size={24} color="#555" />
                            <Text style={styles.answerText}>{item.answer}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 10 }}
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
                        </View>
                    ) : (
                        <View style={styles.actionRow}>
                            <TouchableOpacity onPress={() => setIsTyping(true)}>
                                <Ionicons name="text-outline" size={36} color="#555" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleVoiceInput}>
                                <Ionicons name="mic-circle" size={72} color="#007AFF" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => alert("Closed")}>
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


