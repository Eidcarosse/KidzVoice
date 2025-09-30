import React, { useState, useEffect, useRef } from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAudioPlayer, AudioModule } from "expo-audio";
import colors from "../../utils/AppColors";
import { fontSizes, width } from "../../utils/Dimensions";
import { fonts } from "../../utils/fonts";

const formatTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function AudioNote({ uri, duration: initialDuration }) {
  const player = useAudioPlayer(uri);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(initialDuration || 0);
  const playerRef = useRef(player); // Store player instance

  console.log("Voice Note", uri, "  Duration", initialDuration);

  // Update playerRef when player changes
  useEffect(() => {
    playerRef.current = player;
  }, [player]);

  // Fetch duration from metadata if initialDuration is undefined
  useEffect(() => {
    const loadDuration = async () => {
      if (!uri || initialDuration) return;
      try {
        const { durationMillis } = await AudioModule.getInfoAsync(uri);
        console.log("Fetched duration from metadata:", durationMillis / 1000);
        if (durationMillis) {
          setDuration(durationMillis / 1000);
        } else {
          setDuration(0);
        }
      } catch (e) {
        console.log("Error fetching audio duration:", e);
        setDuration(0);
      }
    };
    loadDuration();
  }, [uri, initialDuration]);

  // Set initial duration when component mounts or uri changes
  useEffect(() => {
    setDuration(initialDuration || 0);
    setPosition(0);
  }, [uri, initialDuration]);

  // Timer to update progress
  useEffect(() => {
    let interval;
    if (isPlaying) {
      // interval = setInterval(async () => {
      setPosition((prev) => {
        if (prev + 1 >= duration && duration > 0) {
          clearInterval(interval);
          setIsPlaying(false);
          setPosition(0);
          // Reset player to start
          playerRef.current
            .seekTo(0)
            .catch((e) => console.log("Seek error on completion:", e));
          return 0;
        }
        return prev + 1;
      });
      // }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handlePlayPause = async () => {
    try {
      if (isPlaying) {
        console.log("Pausing audio");
        await playerRef.current.pause();
        setIsPlaying(false);
      } else {
        console.log(
          "Attempting to play audio, position:",
          position,
          "duration:",
          duration
        );
        if (position >= duration && duration > 0) {
          console.log("Resetting to start before play");
          await playerRef.current.seekTo(0);
          setPosition(0);
        }
        await playerRef.current.play();
        setIsPlaying(true);
      }
    } catch (e) {
      console.log("Play/pause error:", e);
      // Fallback: Try reloading the player
      try {
        console.log("Reloading player due to error");
        const newPlayer = useAudioPlayer(uri);
        playerRef.current = newPlayer;
        await newPlayer.seekTo(0);
        await newPlayer.play();
        setIsPlaying(true);
      } catch (reloadError) {
        console.log("Reload error:", reloadError);
      }
    }
  };

  const handleStop = async () => {
    try {
      console.log("Stopping audio");
      await playerRef.current.seekTo(0);
      await playerRef.current.pause();
      setIsPlaying(false);
      setPosition(0);
    } catch (e) {
      console.log("Stop error:", e);
    }
  };

  // Cleanup player on unmount
  useEffect(() => {
    return () => {
      playerRef.current
        .pause()
        .catch((e) => console.log("Cleanup pause error:", e));
    };
  }, []);

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
            { width: duration > 0 ? `${(position / duration) * 100}%` : "0%" },
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
