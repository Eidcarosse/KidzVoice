import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BaseModal from '../modal/modal';
import { styles } from './styles';
import colors from '../../utils/AppColors';
import { useTranslation } from 'react-i18next'; // 🟢 import translation hook

const ConnectedModal = ({ visible, onClose, isLoader }) => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const animationRef = useRef(null);
    const { t } = useTranslation(); // 🟢 initialize translation

    const startSpin = () => {
        animationRef.current = Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 1200,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );
        animationRef.current.start();
    };

    const stopSpin = () => {
        if (animationRef.current) {
            animationRef.current.stop();
            spinValue.setValue(0);
        }
    };

    useEffect(() => {
        if (isLoader && visible) {
            startSpin();
        } else {
            stopSpin();
        }
        return () => stopSpin(); // cleanup
    }, [isLoader, visible]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    // 👇 When you tap loader icon, it restarts animation
    const handleRestartAnimation = () => {
        stopSpin();
        startSpin();
    };

    return (
        <BaseModal visible={visible} onClose={onClose}>
            {isLoader ? (
                <TouchableOpacity onPress={handleRestartAnimation} activeOpacity={0.8}>
                    <View style={styles.loaderView}>
                        <Animated.View style={{ transform: [{ rotate: spin }] }}>
                            <MaterialCommunityIcons
                                name="loading"
                                size={80}
                                color={colors.dodgerBlue}
                            />
                        </Animated.View>
                    </View>
                </TouchableOpacity>
            ) : (
                <>
                    <View style={styles.iconWrapper}>
                        <MaterialCommunityIcons name="account-sync" size={40} color="white" />
                    </View>
                    <Text style={styles.title}>{t('connectedModal.title')}</Text>
                    <Text style={styles.subtitle}>{t('connectedModal.subtitle')}</Text>
                </>
            )}
        </BaseModal>
    );
};

export default ConnectedModal;
