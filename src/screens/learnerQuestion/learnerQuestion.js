import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import styles from './styles';
import PhotoUploader from '../../components/photoUploader/photoUploader';
import StatusBarWrapper from '../../components/customStatusbar';
import { Button } from '../../components';
import ConnectedModal from '../../components/conectedModal/connectedModal';
import ScreensName from '../../routes/routes';
import { useNavigation } from '@react-navigation/native';

const InputField = ({ label, placeholder, required = false }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>
                {label}{required && <Text style={styles.required}>*</Text>}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
            />
        </View>
    );
};


const LearnerQuestionScreen = () => {
    const navigation = useNavigation()
    const [isConnectedModal, setIsConnectedModal] = useState(false)

    const handleContinue = () => {
        setIsConnectedModal(true)
        setTimeout(() => {
            setIsConnectedModal(false)
            navigation.navigate(ScreensName.ACCOUNT)

        }, 4000);
    };
    return (
        <StatusBarWrapper>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.itemView}>
                    <Text style={styles.title}>Backpack Questionnaire</Text>
                    <Text style={styles.subtitle}>Packing your backpack for the journey</Text>

                    <InputField label="Who are you" placeholder="e.g. student, gamer, artist" required />
                    <InputField label="What do you wish for?" placeholder="e.g. make friends, do well in school" />
                    <InputField label="What’s your problem?" placeholder="e.g. schoolwork, friends, emotions" />
                    <InputField label="What are your dreams?" placeholder="e.g. astronaut, doctor, artist" />
                </View>
                <PhotoUploader />

            </ScrollView>
            <Button title={'Continue'} onPress={handleContinue} btnStyle={styles.btnStyle} />

            <ConnectedModal isLoader={true} visible={isConnectedModal} onClose={() => setIsConnectedModal(false)} />
        </StatusBarWrapper>
    );
};

export default LearnerQuestionScreen;
