import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Button, DropDown } from "../../../components";
import styles from "./styles";
import Images from "../../../assets/images";
import { Feather, Ionicons } from "@expo/vector-icons";
import colors from "../../../utils/AppColors";
import ConnectedModal from "../../../components/conectedModal/connectedModal";
import * as Clipboard from "expo-clipboard";
import { User, Copy, FileText, ClipboardList } from "lucide-react-native";

export default function GenerateChild() {
  const [isConnectedModal, setIsConnectedModal] = useState(false);
  const [childId, setChild] = useState("");

  const generateChildId = () => {
    // Random 2-digit number
    const randomNum1 = Math.floor(10 + Math.random() * 90);

    // Random 8-digit number
    const randomNum2 = Math.floor(10000000 + Math.random() * 90000000);

    return `CD${randomNum1}ID${randomNum2}`;
  };

  const copyToClipboard = async () => {
    if (childId) {
      await Clipboard.setStringAsync(childId);
      Alert.alert("Copied", `${childId} copied to clipboard ✅`);
    }
  };

  const handleGenerateChildId = () => {
    setIsConnectedModal(true);
    setTimeout(() => {
      setIsConnectedModal(false);
      const id = generateChildId();
      setChild(id);
    }, 2000);
  };
  return (
    <StatusBarWrapper>
      <Image
        source={Images.GENERATECHILD}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.yourText}>
        Your answers are securely saved. You can update anytime
      </Text>
      <DropDown
        state={"View Summary"}
        // icon={<Feather name="user" size={20} color={colors.ebonyClay} />}
        icon={<ClipboardList size={20} color={colors.ebonyClay} />}
      />
      <Text style={styles.secureText}>Secure link between accounts</Text>

      <DropDown
        state={childId}
        placeholder={"Generate child ID"}
        icon={<User size={20} color={colors.ebonyClay} />}
        rightIcon={
          <Ionicons name="copy-outline" size={20} color={colors.ebonyClay} />
        }
        onPress={copyToClipboard}
      />

      <Button
        title={"Generate Child ID"}
        btnStyle={styles.generateBtnStyle}
        onPress={handleGenerateChildId}
      />

      <ConnectedModal
        isLoader={true}
        visible={isConnectedModal}
        onClose={() => setIsConnectedModal(false)}
      />
    </StatusBarWrapper>
  );
}
