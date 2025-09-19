import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/customHeader/header'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Images from '../../../assets/images';
import { styles } from './styles';
import VideoPlayer from '../../../components/vedioPlayer/vedioPlayer';
import SuccessModal from '../../../components/successModal/success';

export default function AiLiveVedio() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState()
    return (
        <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
            <CustomHeader
                // isBack={true} onGoBack={handleBack}
                title={'Ai Live Section'} />
            <Image source={Images.AIICON} style={styles.img} />

            <View style={styles.textBox}>
                <Text style={styles.questionText}>
                    Let’s start with a breathing game. Imagine this ball is your breath. When it gets big, you breathe in. When it gets small, you breathe out. Ready?
                </Text>
            </View>
            <VideoPlayer videoSource={"https://www.w3schools.com/html/mov_bbb.mp4"} setModalVisible={setModalVisible} />
            <SuccessModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)} />
        </View>
    )
}