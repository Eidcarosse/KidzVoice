import { View, Text } from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import { Button, DocumentVerification, Header } from "../../../components";
import styles from "./styles";
import {
  Backpack,
  Contact,
  Contact2,
  Contact2Icon,
  ContactIcon,
  ListCheck,
  LucideNotepadTextDashed,
} from "lucide-react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";

export default function ApplicationStatus() {
  const navigation = useNavigation();
  const [idCheck, setIdCheck] = useState(true);
  const [backgroundCheck, setBackgroundCheck] = useState(true);
  const [licenseVerification, setLicenseVerification] = useState(false);
  const [referenceVerification, setREferenceVerification] = useState(true);

  const handleGetStarted = () => {
    navigation.navigate(ScreensName.DIGITALCONTRACT);
  };
  return (
    <StatusBarWrapper>
      <Header title={"Application Status"} />

      <Text style={styles.verificationText}>Verification Stages</Text>

      <DocumentVerification
        title={"ID Check"}
        icon={<Contact strokeWidth={1.2} size={25} />}
        state={idCheck}
      />

      <DocumentVerification
        title={"Background Check"}
        icon={<Backpack strokeWidth={1.2} size={25} />}
        state={backgroundCheck}
      />

      <DocumentVerification
        title={"License Verification"}
        icon={<LucideNotepadTextDashed strokeWidth={1.2} size={25} />}
        state={licenseVerification}
        errorMessage={"Your license could not be verified."}
      />

      <DocumentVerification
        title={"References"}
        icon={<Entypo name="attachment" size={18} />}
        state={referenceVerification}
      />

      <View style={styles.lineView} />

      <Text style={styles.estimatedText}>
        Estimated time remaining: 2–3 business days
      </Text>

      <Text style={styles.helpText}>help center.</Text>
      <View style={{ flex: 1 }} />

      <Text style={styles.youText}>
        You will need to wait until the contract is approved.
      </Text>

      <Button
        title={"Get Started"}
        btnStyle={styles.getBtn}
        onPress={handleGetStarted}
      />
    </StatusBarWrapper>
  );
}
