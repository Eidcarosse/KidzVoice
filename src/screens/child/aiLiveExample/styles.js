import { StyleSheet } from "react-native";
import { fonts } from "../../../utils/fonts";
import { height } from "../../../utils/Dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    question: {
        fontSize: 28,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#d6d4d4',
        paddingHorizontal: 50,
        paddingVertical: 12,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        minWidth: 80,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    equalStyle: {
        fontSize: 40,
        marginTop: 5,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    optionButton: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#d6d4d4',
        borderRadius: 10,
        minWidth: 70,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    correctOption: {
        borderColor: 'blue',
    },
    incorrectOption: {
        borderColor: 'red',
    },
    optionText: {
        fontSize: 30,
        fontFamily: fonts.regular
    },
    resultText: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 27,
        color: '#333',

    },

    questionContainer: {
        marginTop: height(2),
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center"
    },
    answerBox: {
        width: 80,
        height: 60,
        borderWidth: 1,
        borderColor: '#d6d4d4',
        marginBottom: 30,
        marginHorizontal: 25,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },


    answerText: {
        fontSize: 24,
        fontFamily: fonts.bold
    },
})