import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    questionBox: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontFamily: fonts.bold
    },
    questionRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    aiImg: {
        width: 30,
        height: 30,
        marginRight: 8,
        resizeMode: "contain",
    },
    questionText: {
        fontSize: 16,
        color: "#333",
    },
    answerBubble: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        padding: 12,
        borderRadius: 12,
        marginVertical: 4,
    },
    answerText: {
        marginLeft: 8,
        fontSize: 15,
        color: "#222",
        fontFamily: fonts.regular
    },
    bottomBox: {
        padding: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    actionRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    micWrapper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#007AFF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: "#000",
    },
    sendBtn: {
        marginLeft: 10,
        backgroundColor: "#007AFF",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    sendText: {
        color: "#fff",
        fontWeight: "600",
    },


})
