import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({

    illustration: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.bold,
        textAlign: 'center',
        marginBottom: 8,
        paddingHorizontal: 16,

    },
    subtitle: {
        fontSize: 14,
        fontFamily: fonts.regular,
        color: '#555',
        paddingHorizontal: 16,

    },

});