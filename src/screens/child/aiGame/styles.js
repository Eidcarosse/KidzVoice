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
    btnContainer: {
        width: width(44),
        height: height(7),
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#D6D4D4'
    },
    questionText: {
        fontSize: 22,
        color: '#282727',
        textAlign: 'center',
        lineHeight: 33,
        fontFamily: fonts.bold
    },
    optionsContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    textContainer: {
        marginTop: height(4),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    text: {

    }
})