import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../../components/customHeader/header';
import Images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FeelingResult from '../aiLiveSection/component/feelingResult';
import ScreensName from '../../../routes/routes';
import { styles } from './styles';
import SuccessModal from '../../../components/successModal/success';
import { useTranslation } from 'react-i18next'; // 🟢 import translation hook

export default function AiGame() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const { t } = useTranslation();

    const handleBack = () => {
        navigation.navigate(ScreensName.MAGICBACKPACK);
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
            <CustomHeader
                isBack={true}
                onGoBack={handleBack}
                title={t('aiLiveSection.title')}
            />

            <FeelingResult
                image={Images.AIICON}
                text={t('aiLiveSection.question')}
            />

            <View style={styles.textContainer}>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.text}>🔮 {t('aiLiveSection.magicBalls')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.text}>🌬️ {t('aiLiveSection.breathingGame')}</Text>
                </TouchableOpacity>
            </View>

            <SuccessModal
                subtitle={t('aiLiveSection.successSubtitle')}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                questionOf={'AiGame'}
            />
        </View>
    );
}
