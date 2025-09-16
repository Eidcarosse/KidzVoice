import React from 'react';
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import styles from './styles';
import PhotoUploader from '../../components/photoUploader/photoUploader';
import StatusBarWrapper from '../../components/customStatusbar';
import { Button } from '../../components';

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

                <Button title={'Continue'} />
            </ScrollView>
        </StatusBarWrapper>
    );
};

export default LearnerQuestionScreen;
