import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

const PlayPauseButton = ({ isPlaying, player }) => {

    const handlePress = () => {
        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={32}
                color="#fff"
            />
        </TouchableOpacity>
    );
}




export default function VideoPlayer({ fullScreen, videoSource, setModalVisible = () => { } }) {
    const [hasEnded, setHasEnded] = useState(false);
    const player = useVideoPlayer(videoSource, player => {
        player.loop = false;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    useEvent(player, 'playToEnd', () => {
        console.log('✅ Video finished playing');
        setHasEnded(true);

        // wait 10 seconds before opening modal
        setTimeout(() => setModalVisible(true), 10000);
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

            {/* <View style={styles.controlsContainer}>
                <PlayPauseButton player={player} isPlaying={isPlaying} />
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    video: {
        width: '100%',

    },
    controlsContainer: {
        padding: 10,
    },
    button: {
        backgroundColor: "#1DB954",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
});
