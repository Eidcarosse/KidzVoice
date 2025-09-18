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




export default function VideoPlayer({ videoSource, setModalVisible = () => { } }) {
    const [hasEnded, setHasEnded] = useState(false);
    const player = useVideoPlayer(videoSource, player => {
        player.loop = false;
        player.play();
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    useEvent(player, 'timeUpdate', (event) => {
        if (!event) return; // safeguard

        const { currentTime, duration } = event;

        if (
            !hasEnded &&
            duration && duration > 0 && // make sure duration is valid
            currentTime >= duration
        ) {
            console.log('✅ Video fully finished');
            setHasEnded(true);

            // run setModalVisible inside a microtask so it’s not inside render
            setTimeout(() => setModalVisible(true), 0);
        }
    });
    return (
        <View style={styles.contentContainer}>
            <VideoView style={styles.video} player={player} allowsPictureInPicture />
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
        aspectRatio: 16 / 9

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
