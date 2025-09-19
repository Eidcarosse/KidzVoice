import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";
import { height } from "../../utils/Dimensions";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },


    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain'
    },
    btnStyle: {
        marginBottom: height(8),
    },
    title: {
        marginTop: height(1),
        fontSize: 24,
        fontFamily: fonts.medium,
        marginHorizontal: 16
    },
    subtitle: {
        fontSize: 18,
        color: '#9370DB',
        fontWeight: '600',
    },
    messageContainer: {
        marginTop: height(3),
        marginHorizontal: 16,


    },
    messageText: {
        fontFamily: fonts.medium,
        lineHeight: 33,
        fontSize: 22,
        color: '#282727',
        textAlign: 'left',
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#6A5ACD',
        marginBottom: 8,
        marginLeft: 5,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderWidth: 2,
        borderColor: '#E6E6FA',
        borderRadius: 15,
        padding: 15,
        fontSize: 16,
        color: '#333',
        minHeight: 100,
        textAlignVertical: 'top',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginVertical: 10,
        minWidth: 200,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    packButton: {
        backgroundColor: '#9370DB',
    },
    resetButton: {
        backgroundColor: '#6A5ACD',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    successContainer: {
        backgroundColor: 'rgba(144, 238, 144, 0.3)',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: 'rgba(144, 238, 144, 0.5)',
    },
    successText: {
        color: '#228B22',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    decoration: {
        alignItems: 'center',
        marginTop: 30,
    },
    magicSymbol: {
        fontSize: 24,
        color: '#6A5ACD',
    },
});