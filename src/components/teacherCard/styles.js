import { Dimensions, StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";
const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width * 0.22;
export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        marginVertical: 6,
        shadowOpacity: 0.05,
        paddingRight: 12,
        borderWidth: 1,
        borderColor: "#EAEAEA"
    },
    image: {
        width: IMAGE_WIDTH,
        aspectRatio: 4 / 4,
        borderRadius: 14,
        marginRight: 12,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.medium,
        color: "#000",
    },
    title: {
        color: "#555",
        fontSize: 13,
        marginTop: 2,
        fontFamily: fonts.medium
    },
    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        gap: 10,
    },
    metaItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
    },
    metaText: {
        color: "#555",
        fontSize: 8,
        fontFamily: fonts.regular
    },
    link: {
        color: "#1E88E5",
        fontSize: 13,
        marginLeft: 8,
        fontFamily: fonts.regular
    },
})