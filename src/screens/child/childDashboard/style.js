import { Rotate3D } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/fonts";
import { height, width } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",

    },

    topRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 16,

    },
    backIcon: {
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 6,
    },
    settingIcon: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
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
        fontSize: 13,
        fontFamily: fonts.bold
    },

    badges: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "lightgray",
        gap: 10,
        paddingBottom: 16,
        backgroundColor: '#fff'
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
        color: "#333",
        fontFamily: fonts.regular
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
        width: '90%',
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center'

    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        width: '48%',
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
        marginTop: 6,
        fontFamily: fonts.bold
    },
    cardSub: {
        fontSize: 12,
        color: "gray",
        // textAlign: "center",
    },

    titleStyle: {
        fontSize: 16,
        marginTop: height(2),
        marginLeft: 16,
        fontFamily: fonts.medium
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
        fontFamily: fonts.medium
    },
    growthSub: {
        fontSize: 12,
        color: "gray",
    },
    backgroundImageStyle: {
        alignSelf: 'center',
        width: '100%',
        transform: [{ rotate: "180deg" }],
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    }
});

export default styles;
