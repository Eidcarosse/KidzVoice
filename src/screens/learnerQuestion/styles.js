import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/fonts';
import { height } from '../../utils/Dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: height(2)
    },
    itemView: {
        marginHorizontal: 16
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.bold,
        marginBottom: 4,
        color: '#222',
    },
    btnStyle: {
        marginBottom: 25,
    },
    subtitle: {
        fontFamily: fonts.light,
        fontSize: 13,
        color: '#888',
        marginBottom: 25,
    },
    inputContainer: {
        marginBottom: 18,
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
        color: '#333',
        fontFamily: fonts.medium,
    },
    required: {
        color: 'red',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 10,
        fontSize: 15,
        fontFamily: fonts.regular,
        backgroundColor: '#fafafa',
    },
    uploadBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cde0ff',
        backgroundColor: '#eaf2ff',
        padding: 12,
        borderRadius: 10,
        gap: 10,
    },
    uploadText: {
        color: '#007bff',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default styles;
