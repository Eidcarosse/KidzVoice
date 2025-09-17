import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import {
  useAudioRecorder,
  useAudioRecorderState,
  RecordingPresets,
  AudioModule,
  setAudioModeAsync,
} from "expo-audio";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../../utils/AppColors";
import { fonts } from "../../../utils/fonts";
import {
  fontSizes,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../../utils/Dimensions";
import Images from "../../../assets/images";

const VoiceMessageModal = ({ isVisible = false, onClose, onSend }) => {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(audioRecorder);

  const [recordTime, setRecordTime] = useState("00:00:00");
  const [audioUri, setAudioUri] = useState(null);
  const [stopped, setStopped] = useState(false);

  const timerRef = useRef(null);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(totalSeconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const startRecord = async () => {
    try {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert("Permission denied", "Microphone permission is required");
        return;
      }

      await setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });

      await audioRecorder.prepareToRecordAsync();
      audioRecorder.record();

      setStopped(false);
      setAudioUri(null);
      setRecordTime("00:00:00");

      const start = Date.now();
      timerRef.current = setInterval(() => {
        setRecordTime(formatTime(Date.now() - start));
      }, 500);
    } catch (e) {
      console.log("Recording error:", e);
    }
  };

  const stopRecord = async () => {
    try {
      if (!recorderState.isRecording) return;

      clearInterval(timerRef.current);
      timerRef.current = null;

      await audioRecorder.stop();
      setAudioUri(audioRecorder.uri);
      setStopped(true);
    } catch (e) {
      console.log("Stop record error:", e);
    }
  };

  const handleRedo = async () => {
    setAudioUri(null);
    setStopped(false);
    setRecordTime("00:00:00");
    startRecord();
  };

  const handleSend = () => {
    if (audioUri) onSend(audioUri);
    onClose();
  };

  useEffect(() => {
    if (isVisible) {
      startRecord();
    } else {
      stopRecord();
    }
    return () => {
      stopRecord();
    };
  }, [isVisible]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      coverScreen={true}
      statusBarTranslucent={true}
      deviceWidth={SCREEN_WIDTH}
      deviceHeight={
        SCREEN_HEIGHT +
        (Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0)
      }
      backdropColor="rgba(0,0,0,0.5)"
      backdropOpacity={1}
      useNativeDriver={true}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={100}
      animationOutTiming={100}
    >
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onClose}
          style={styles.closeIcon}
        >
          <View style={styles.closeInner}>
            <Ionicons name="close" size={20} color={colors.black} />
          </View>
        </TouchableOpacity>

        <Image source={Images.AVATAR} style={styles.voiceImg} />

        <Text style={styles.timer}>{recordTime}</Text>

        {recorderState.isRecording && !stopped && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.stopBtn}
            onPress={stopRecord}
          >
            <Ionicons name="stop" size={20} color={colors.background} />
            <Text style={styles.actionText}> Stop</Text>
          </TouchableOpacity>
        )}

        {stopped && (
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.actionBtn}
              onPress={handleRedo}
            >
              <MaterialCommunityIcons name="redo" size={20} color="#fff" />
              <Text style={styles.actionText}>Redo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.sendBtn}
              onPress={handleSend}
            >
              <Ionicons name="send" size={20} color={colors.black} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { justifyContent: "flex-end", alignItems: "center", bottom: 80 },
  container: {
    width: "95%",
    height: 220,
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  voiceImg: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 12,
  },
  timer: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.medium,
  },
  stopBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 1000,
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    margin: 18,
  },
  closeInner: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: { flexDirection: "row", gap: 8 },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 100,
  },
  actionText: {
    color: colors.background,
    marginLeft: 6,
    fontSize: fontSizes.base,
    fontFamily: fonts.medium,
    lineHeight: 16,
  },
  sendBtn: {
    backgroundColor: colors.primaryLight,
    height: 40,
    width: 60,
    justifyContent: "center",
    borderRadius: 1000,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default VoiceMessageModal;
