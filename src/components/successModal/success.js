import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../button/button";
import BaseModal from "../modal/modal";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../routes/routes";

const SuccessModal = ({ visible, onClose, questionOf, title, subtitle }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (questionOf === "FeelingResult") {
      navigation.navigate(ScreensName.AILIVEVEDIOSECTION);
    } else if (questionOf === "AiLiveVedio") {
      navigation.navigate(ScreensName.QUESTIONAIRE, { questionOf: "LiveVedio" });
    } else if (questionOf === "AiExample") {
      navigation.navigate(ScreensName.AIGAME);
    } else if (questionOf === "AiGame") {
      navigation.navigate(ScreensName.ChildDashboard, { isSectionTaken: true });
    }
    onClose();
  };
  return (
    <BaseModal visible={visible} onClose={onClose}>
      <View style={styles.container}>
        {/* Emoji / Icon */}
        <Text style={styles.emoji}>😊</Text>

        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>{subtitle}</Text>

        <Button
          title={`${'Next'}`}
          onPress={handlePress}
          btnStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    // height: '30%',
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
    alignSelf: "center",
  },
  title: {
    fontSize: 22,
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
    width: "100%",
    alignSelf: "center",
    // backgroundColor: '#0066FF',
    // borderRadius: 12,
    // paddingVertical: 14,
    // paddingHorizontal: 32,
    // width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});

export default SuccessModal;
