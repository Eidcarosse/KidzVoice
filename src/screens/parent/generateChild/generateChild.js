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
import { storeValue } from "../../../utils/Methods";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";

export default function GenerateChild() {
  const navigation = useNavigation();
  const [isConnectedModal, setIsConnectedModal] = useState(false);
  const [childId, setChild] = useState("");

  const generateChildId = async () => {
    // Random 2-digit number
    const randomNum1 = Math.floor(10 + Math.random() * 90);

    // Random 8-digit number
    const randomNum2 = Math.floor(10000000 + Math.random() * 90000000);

    const res = await storeValue("ChildId", `CD${randomNum1}ID${randomNum2}`);
    return `CD${randomNum1}ID${randomNum2}`;
  };

  const handleViewSummary = () => {
    navigation.navigate(ScreensName.SIGNIN);
  };

  const copyToClipboard = async () => {
    console.log("Copying Child Id");

    if (childId) {
      await Clipboard.setStringAsync(childId);
      console.log("Id Copied");
    }
  };

  const handleGenerateChildId = () => {
    setIsConnectedModal(true);
    setTimeout(async () => {
      setIsConnectedModal(false);
      const id = await generateChildId();
      console.log("Generated Id", id);

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
        onPress={handleViewSummary}
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
