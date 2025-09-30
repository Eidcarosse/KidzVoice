import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function VideoPlayer({ fullScreen, videoSource, setModalVisible = () => { } }) {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = false;
        player.play();
    });

    player.addListener?.('playToEnd', () => {
        setModalVisible(true);
    });



    return (
        <View style={styles.contentContainer}>
            <VideoView
                style={[
                    styles.video,
                    fullScreen ? { flex: 1 } : { aspectRatio: 16 / 9 }
                ]}
                player={player}
                allowsPictureInPicture
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    video: {
        width: '100%',
    },
});
