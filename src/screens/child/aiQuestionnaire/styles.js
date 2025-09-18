import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/fonts";
import colors from "../../../utils/AppColors";
import { height } from "../../../utils/Dimensions";


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
    micContainer: {
        width: 100, height: 100,
        borderRadius: 100, backgroundColor: colors.dodgerBlue,
        justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
    },
    micImg: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    userImg: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 8,
    },
    questionRow: {
        padding: 10,
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
        paddingVertical: 50,
        paddingHorizontal: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    actionRow: {
        flex: 1,
        flexDirection: "row",
        // alignItems: "center",
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
        flex: 1
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: fonts.regular,
        color: "#000",
    },
    sendBtn: {
        marginLeft: 10,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    sendImg: {
        width: 50,
        height: 50,
    },
    sendText: {
        color: "#fff",
        fontWeight: "600",
    },


})
