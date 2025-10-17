import { Rotate3D } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/fonts";
import { height, width } from "../../../utils/Dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",

    },
    btnStyle: {
        flex: 1,
        marginTop: 40,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
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
        marginTop: 4,
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
    },
    teacherContainer: {
        backgroundColor: '#007BFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginHorizontal: 16,
        marginTop: 10,
        paddingVertical: 12,
        borderRadius: 20,
        alignSelf: 'center',

    },
    iconContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 50,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontFamily: fonts.medium
    },
    subtitle: {
        color: '#E0E0E0',
        fontSize: 12,
        marginTop: 2,
        fontFamily: fonts.regular
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    modalBox: {
        width: "90%",
        maxWidth: 380,
        backgroundColor: "#fff",
        borderRadius: 14,
        paddingVertical: 20,
        paddingHorizontal: 18,
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 6,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    modalTitle: {
        fontSize: 18,
        textAlign: "center",
        color: "#000",
        marginBottom: 8,
        fontFamily: fonts.medium
    },
    modalRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        marginTop: 10,
    },
    cancelButton: {
        paddingVertical: 10,
        paddingHorizontal: 23,
        borderRadius: 8,
        borderWidth: 0.4,
    },
    cancelText: {
        color: "#1976d2",
        fontSize: 14,
        fontFamily: fonts.regular,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f44336",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 18,
        justifyContent: "center",
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 8,
        fontFamily: fonts.medium,
    },

});

export default styles;
