import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import BaseModal from '../modal/modal';
import { styles } from './styles';
import colors from '../../utils/AppColors';

const ConnectedModal = ({ visible, onClose, isLoader }) => {
    return (
        <BaseModal visible={visible} onClose={onClose}>
            {isLoader ? (
                <View style={styles.loaderView}>
                    <Feather name="loader" size={80} color={colors.dodgerBlue} />
                </View>
            ) : (
                <>
                    <View style={styles.iconWrapper}>
                        <MaterialCommunityIcons name="account-sync" size={40} color="white" />
                    </View>
                    <Text style={styles.title}>Connected</Text>
                    <Text style={styles.subtitle}>You’re now linked with your parent!</Text>
                </>
            )}
        </BaseModal>
    );
};



export default ConnectedModal;
