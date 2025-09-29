import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import VideoPlayer from '../../../components/vedioPlayer/vedioPlayer';
import SuccessModal from '../../../components/successModal/success';
import { useNavigation } from '@react-navigation/native';

export default function AiLiveVedioView() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <VideoPlayer
                videoSource={"https://www.w3schools.com/html/mov_bbb.mp4"}
                setModalVisible={setModalVisible}
                fullScreen={true}
            />

            <SuccessModal
                title={"Great job"}
                subtitle={
                    "Max! You just trained your focus, just like a football player before a big match."
                }
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                questionOf={"AiLiveVedio"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
});
