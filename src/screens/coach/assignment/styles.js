import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../utils/AppColors';
import { fonts } from '../../../utils/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    backText: {
        fontSize: 16,
        marginLeft: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    label: {
        color: colors.mineShaft,
        fontSize: 16,
        fontFamily: fonts.regular,
        marginBottom: 6,
        marginHorizontal: 12,

    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#D1D1D1',
        borderRadius: 12,
        padding: 10,
        minHeight: 200,
        backgroundColor: '#fff',
    },

    input: {
        fontSize: 16,
        color: '#333',
        textAlignVertical: 'top',

    },

    button: {
        borderWidth: 1,
        borderColor: '#007BFF',
        paddingVertical: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#007BFF',
        fontWeight: '500',
    },
    uploadBox: {
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        backgroundColor: '#fff',
        marginVertical: 6
    },
    uploadText: {
        color: '#007BFF',
        fontWeight: '500',

    },
    reviewText: {
        marginTop: 20,
        marginBottom: 2,
        color: '#007BFF',
        marginHorizontal: 16,
    },
    nextButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: 12
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    labelStyle: {
        color: colors.mineShaft,
        fontSize: 16,
        fontFamily: fonts.regular,
        marginHorizontal: 12,

    }
});

export default styles
