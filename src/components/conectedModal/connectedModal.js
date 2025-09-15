import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BaseModal from '../modal/modal';

const ConnectedModal = ({ visible, onClose }) => {
    return (
        <BaseModal visible={visible} onClose={onClose}>
            <View style={styles.iconWrapper}>
                <MaterialCommunityIcons name="account-sync" size={40} color="white" />
            </View>
            <Text style={styles.title}>Connected</Text>
            <Text style={styles.subtitle}>You’re now linked with your parent!</Text>
        </BaseModal>
    );
};



export default ConnectedModal;
