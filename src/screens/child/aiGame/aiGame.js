import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/customHeader/header';
import Images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FeelingResult from '../aiLiveSection/component/feelingResult';
import ScreensName from '../../../routes/routes';
import { styles } from './styles';
import SuccessModal from '../../../components/successModal/success';

export default function AiGame() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const handleBack = () => {

        navigation.navigate(ScreensName.MAGICBACKPACK);
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
            <CustomHeader isBack={true} onGoBack={handleBack} title={'Ai Live Section'} />
            <FeelingResult image={Images.AIICON} text={"Tell me, Max, what helped you most today: the breathing game or the magic ball?"} />
            <View style={styles.textContainer} >
                <TouchableOpacity style={styles.btnContainer} onPress={() => setModalVisible(true)}>
                    <Text style={styles.text}>🔮 Magic Ball</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={() => setModalVisible(true)}>
                    <Text style={styles.text}>🌬️ Breathing Game</Text>
                </TouchableOpacity>
            </View>
            <SuccessModal

                subtitle={"Perfect! I’ll remember that. We’ll use the magic ball more often in your training."}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                questionOf={"AiGame"}
            />
        </View>
    )
}