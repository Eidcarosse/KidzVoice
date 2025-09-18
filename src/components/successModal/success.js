import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../button/button';
import BaseModal from '../modal/modal';

const SuccessModal = ({ visible, onClose }) => {
    return (
        <BaseModal visible={visible} onClose={onClose}>
            <View style={styles.container}>
                {/* Emoji / Icon */}
                <Text style={styles.emoji}>😊</Text>

                {/* Title */}
                <Text style={styles.title}>Great job</Text>

                {/* Subtitle */}
                <Text style={styles.subtitle}>
                    Max! You just trained your focus, just like a football player before a big match.
                </Text>

                <Button
                    title="Next"
                    onPress={onClose}
                    btnStyle={styles.button}
                    textStyle={styles.buttonText}
                />

            </View>

        </BaseModal>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        // height: '30%',
        backgroundColor: '#fff',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'

    },
    emoji: {
        fontSize: 48,
        marginBottom: 16,
        alignSelf: 'center'
    },
    title: {
        fontSize: 22,
        color: '#000',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        color: '#555',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 20,
    },
    button: {
        width: '100%',
        alignSelf: 'center'
        // backgroundColor: '#0066FF',
        // borderRadius: 12,
        // paddingVertical: 14,
        // paddingHorizontal: 32,
        // width: '100%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
    },
});

export default SuccessModal;
