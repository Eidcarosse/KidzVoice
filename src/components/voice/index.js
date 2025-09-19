import React, { useState, useEffect } from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAudioPlayer } from "expo-audio";
import colors from "../../utils/AppColors";
import { fontSizes, width } from "../../utils/Dimensions";
import { fonts } from "../../utils/fonts";

const formatTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function AudioNote({ uri }) {
  const player = useAudioPlayer(uri);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  // fake timer to update progress (since we’re not using status)
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setPosition((prev) => {
          if (prev + 1 >= duration) {
            clearInterval(interval);
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
      if (duration === 0) {
        // try to load duration from metadata if available
        setDuration(60); // fallback duration if unknown
      }
    }
  };

  const handleStop = () => {
    player.seekTo(0);
    player.pause();
    setIsPlaying(false);
    setPosition(0);
  };

  return (
    <View style={styles.container}>
      {/* Play / Pause */}
      <Pressable onPress={handlePlayPause} style={styles.playButton}>
        <Ionicons
          name={isPlaying ? "pause" : "play"}
          size={28}
          color={colors.primary}
        />
      </Pressable>

      {/* Stop */}
      <Pressable onPress={handleStop} style={styles.playButton}>
        <MaterialIcons name="stop" size={26} color={colors.red} />
      </Pressable>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: `${(position / duration) * 100 || 0}%` },
          ]}
        />
      </View>

      {/* Time */}
      <Text style={styles.timeText}>
        {formatTime(position)} / {formatTime(duration)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 12,
    backgroundColor: colors.lightGrey2,
  },
  playButton: {
    marginHorizontal: 6,
  },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 100,
    backgroundColor: colors.border,
    marginHorizontal: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
  },
  timeText: {
    paddingRight: width(10),
    fontSize: fontSizes.xs,
    fontFamily: fonts.regular,
    color: colors.darkCharcoal,
  },
});
