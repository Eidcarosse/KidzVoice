import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#007bff',
        padding: 20,
        borderRadius: 50,
        marginBottom: 20,
    },
    loaderView: {
        padding: 40,

    },
    title: {
        fontSize: 20,
        color: '#000',
        fontFamily: fonts.bold,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        fontFamily: fonts.regular,
        textAlign: 'center',
    },
});