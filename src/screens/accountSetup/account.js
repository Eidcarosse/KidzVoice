import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Button, Input, PhotoUploader } from '../../components';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../../utils/AppColors';
import Images from '../../assets/images';
import { fonts } from '../../utils/fonts';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreensName from '../../routes/routes';
import StatusBarWrapper from '../../components/customStatusbar';

const AccountSetupScreen = () => {
    const navigation = useNavigation()
    const [code, setCode] = useState('CD65 I');
    const [name, setName] = useState('');

    const handlePhotoUpload = () => {
        // open file/image picker
    };

    const handleContinue = () => {
        // form validation or navigation
        navigation.navigate(ScreensName.LEARNER_QUESTIONAIR)
    };

    return (
        <StatusBarWrapper>
            <Image source={Images.ACCOUNTIMAGE} style={styles.illustration} />

            <Text style={styles.title}>Account Setup</Text>
            <Text style={styles.subtitle}>Enters the unique code from Sara</Text>
            <Input
                placeholder="Enter code"
                value={code}
                onChangeText={setCode}
                editable={false}
                icon={<AntDesign name="user-add" size={18} color={colors.ebonyClays} />}
            />

            <Input
                placeholder="Enter your name here"
                value={name}
                onChangeText={setName}
                icon={<AntDesign name="user" size={18} color={colors.ebonyClays} />}
            />
            <PhotoUploader />

            {/* <Pressable style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable> */}
            <Button title={"Continue"} onPress={handleContinue} />
        </StatusBarWrapper>
    );
};



export default AccountSetupScreen;
