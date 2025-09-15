import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#007bff',
        padding: 20,
        borderRadius: 50,
        marginBottom: 20,
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