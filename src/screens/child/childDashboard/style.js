import { Rotate3D } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",

    },

    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    backIcon: {
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 6,
    },
    settingIcon: {
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 6,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        marginTop: 30,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    userInfo: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontSize: 18,
        fontFamily: fonts.bold
    },
    email: {
        fontSize: 14,
        color: "gray",
        fontFamily: fonts.bold
    },

    liveButton: {
        backgroundColor: "#1976d2",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 25,
    },
    liveText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 13,
        fontFamily: fonts.bold
    },

    badges: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "lightgray",
        paddingBottom: 12,
        marginHorizontal: 12,
    },
    badge: {
        marginLeft: 12,
        fontSize: 12,
        color: 'gray'
    },

    section: {
        marginTop: 5,
        paddingHorizontal: 12,
    },
    sectionContainer: {
        marginTop: 20,
        backgroundColor: "#fff",
        margin: 12,
        borderRadius: 12,
        padding: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 12,
        fontFamily: fonts.bold
    },
    subtitle: {
        fontSize: 13,
        color: "gray",
        marginTop: 4,
    },

    progressContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
    },
    progressHeader: {
        flex: 1,
    },
    progressText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
    progressBar: {
        width: "100%",
        height: 10,
        borderRadius: 10,
        backgroundColor: "#e0e0e0",
        marginTop: 6,
    },
    progressFill: {
        width: "100%",
        height: "100%",
        backgroundColor: "green",
        borderRadius: 10,
    },
    textStyle: {
        fontSize: 13,
        color: "gray",
        fontFamily: fonts.bold
    },
    completeStyle: {
        fontSize: 13,
        color: "gray",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        margin: 8,
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: "#f4f4f4",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 6,
    },
    cardText: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 6,
        fontFamily: fonts.bold
    },
    cardSub: {
        fontSize: 12,
        color: "gray",
        textAlign: "center",
    },

    titleStyle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 25,
        marginLeft: 12,
        fontFamily: fonts.bold
    },
    growContainer: {
        marginHorizontal: 12,
    },
    growthCard: {
        marginTop: 10,
        padding: 12,
        backgroundColor: "#e3f2fd",
        borderRadius: 12,
    },
    growthTitle: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: fonts.bold
    },
    growthSub: {
        fontSize: 12,
        color: "gray",
    },
    backgroundImageStyle: {
        flex: 1,
        height: "265%"
    }
});

export default styles;
