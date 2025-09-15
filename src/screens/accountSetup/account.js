import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import InputField from '../components/InputField';
import { PhotoUploader } from '../../components';

const AccountSetupScreen = () => {
    const [code, setCode] = useState('CD65 I');
    const [name, setName] = useState('');

    const handlePhotoUpload = () => {
        // open file/image picker
    };

    const handleContinue = () => {
        // form validation or navigation
    };

    return (
        <View style={styles.container}>
            {/* <Image source={} style={styles.illustration} /> */}

            <Text style={styles.title}>Account Setup</Text>
            <Text style={styles.subtitle}>Enters the unique code from Sara</Text>

            {/* <InputField
                icon="person-add-alt"
                placeholder="Enter code"
                value={code}
                onChangeText={setCode}
                editable={false}
            />

            <InputField
                icon="person"
                placeholder="Enter your name here"
                value={name}
                onChangeText={setName}
            /> */}

            <PhotoUploader onPress={handlePhotoUpload} />

            <Pressable style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#fff',
    },
    illustration: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24,
        color: '#555',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default AccountSetupScreen;
