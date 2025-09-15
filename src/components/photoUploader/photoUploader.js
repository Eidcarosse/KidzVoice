import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const PhotoUploader = () => {
    const [image, setImage] = useState(null);
    const handleUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Upload Creative Stuff (Optional)</Text>
            <Pressable style={styles.uploadBox} onPress={handleUpload}>
                <Ionicons name="cloud-upload-outline" size={24} color="#007bff" />
                <Text style={styles.uploadText}>Upload your photo</Text>
            </Pressable>
        </View>
    );
};

export default PhotoUploader;
