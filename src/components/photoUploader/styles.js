import { StyleSheet } from 'react-native';
import { fonts } from '../../utils/fonts';

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 16,
        marginVertical: 12,
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
        color: '#333',
        fontFamily: fonts.regular
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
});

export default styles;
