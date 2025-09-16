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
import Images from "../../assets/images";
import { styles } from "./styles";

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
    const [answers, setAnswers] = useState({});
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (!text.trim()) return;

        setAnswers((prev) => ({ ...prev, [currentIndex]: text }));
        setText("");

        if (currentIndex < dummyQuestions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            console.log("✅ All answers:", answers);
            alert("You have completed all questions!");
        }
    };

    const handleVoiceInput = () => {
        // For now just simulate with dummy text
        const simulatedVoiceText = "This is a voice answer";
        setText(simulatedVoiceText);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            {/* Question Section */}
            <View style={styles.questionBox}>
                <Text style={styles.title}>Question</Text>
                <View style={styles.questionRow}>
                    <Image source={Images.AIICON} style={styles.aiImg} />
                    <Text style={styles.questionText}>
                        {dummyQuestions[currentIndex]}
                    </Text>
                </View>
            </View>

            {/* Answer Section */}
            <FlatList
                data={Object.entries(answers)}
                keyExtractor={([index]) => index}
                renderItem={({ item }) => (
                    <View style={styles.answerBubble}>
                        <Ionicons name="person-circle-outline" size={24} color="#555" />
                        <Text style={styles.answerText}>{item[1]}</Text>
                    </View>
                )}
            />

            {/* Input Section */}
            <View style={styles.inputRow}>
                <TouchableOpacity onPress={handleVoiceInput}>
                    <Ionicons name="mic-circle" size={48} color="#007AFF" />
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="Type your answer..."
                    value={text}
                    onChangeText={setText}
                />

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Questionnaire;

