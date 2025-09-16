import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNModal from 'react-native-modal';
import { styles } from './styles';

const BaseModal = ({
    visible,
    onClose = () => { },
    children,
    backdropOpacity = 0.3,
    animationIn = 'zoomIn',
    animationOut = 'zoomOut',
}) => {
    return (
        <RNModal
            isVisible={visible}
            onBackdropPress={onClose}
            animationIn={animationIn}
            animationOut={animationOut}
            backdropOpacity={backdropOpacity}
            useNativeDriver
        >
            <View style={styles.modalContainer}>
                {children}
            </View>
        </RNModal>
    );
};



export default BaseModal;
