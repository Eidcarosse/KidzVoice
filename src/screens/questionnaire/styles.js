import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 16 },
    title: {
        fontSize: 20,
        fontFamily: fonts.bold,
        marginBottom: 12
    },
    questionBox: { marginBottom: 20 },
    questionRow: { flexDirection: "row", alignItems: "center", gap: 10 },
    questionText: { fontSize: 18, fontWeight: "500" },
    aiImg: {
        width: 28,
        height: 28,
        resizeMode: 'contain'
    },
    answerBubble: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        padding: 10,
        borderRadius: 12,
        marginBottom: 8,
    },
    answerText: { fontSize: 16, marginLeft: 6 },

    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "auto",
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        padding: 10,
        marginHorizontal: 10,
    },
    submitBtn: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
    },
    submitText: { color: "#fff", fontWeight: "600" },
});
