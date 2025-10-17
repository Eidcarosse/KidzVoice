import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 14,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.medium
    },
    certifiedRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2,
    },
    certified: {
        fontSize: 12,
        color: "#007BFF",
        fontFamily: fonts.regular
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    meta: {
        fontSize: 11,
        color: "#555",
        marginLeft: 3,
        fontFamily: fonts.regular
    },
    coverWrapper: {
        borderRadius: 14,
        overflow: "hidden",
        marginHorizontal: 16,
        marginTop: 8,
    },
    coverImage: {
        width: "100%",
        aspectRatio: 16 / 9,
        borderRadius: 14,
        resizeMode: 'cover'
    },
    section: {
        paddingHorizontal: 16,
        marginTop: 14,
    },
    sectionTitle: {
        fontSize: 15,
        fontFamily: fonts.medium,
        marginBottom: 4,
    },
    tagContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 6,
    },
    tag: {
        fontSize: 12,
        color: "#555",
        marginRight: 6,
        fontFamily: fonts.light
    },
    sectionText: {
        fontSize: 14,
        color: "#444",
        lineHeight: 20,
        fontFamily: fonts.regular
    },
    btn: {
        marginBottom: 30,

    },
    btnText: {
        color: "#fff",
        fontFamily: fonts.medium,
        fontSize: 15,

    },
});