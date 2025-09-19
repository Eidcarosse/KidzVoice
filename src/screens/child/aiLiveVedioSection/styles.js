import { StyleSheet } from "react-native";
import colors from "../../../utils/AppColors";
import { height, width } from "../../../utils/Dimensions";
import { fonts } from "../../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bloader,
    },
    img: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: height(4),
    },
    textBox: {
        marginVertical: 16,
        paddingHorizontal: 20,
    },
    questionText: {
        fontSize: 16,
        color: '#282727',
        textAlign: 'center',
        lineHeight: 33,
        fontFamily: fonts.regular
    },
})