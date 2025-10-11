import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { Button, SingleCheckBox } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import SignatureCanvas from "react-native-signature-canvas";
import BaseModal from "../../../components/modal/modal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function DigitalContract() {
  const navigation = useNavigation();
  const [guardingPolicies, setGuardingPolicies] = useState(true);
  const [guardingGuideLines, setGuardingGuideLines] = useState(true);
  const [protectionResponsibilities, setProtectionResponsibilities] =
    useState(true);
  const [professionalConduct, setProfessionalConduct] = useState(true);
  const [eSignature, setESignature] = useState(null);
  const [showPad, setShowPad] = useState(false);

  const signatureRef = useRef();

  const handleNext = () => {
    navigation.navigate(ScreensName.PAYOUTSETUP);
  };

  const handleOK = (sig) => {
    console.log("Signature (base64):", sig);
    setESignature(sig);
    setShowPad(false);
  };

  const handleEmpty = () => {
    console.log("Empty signature");
  };

  const handleClear = () => {
    signatureRef.current?.clearSignature();
    setESignature(null);
    setShowPad(false);
  };

  return (
    <StatusBarWrapper scrollType={"scroll"} edges={["bottom", "top"]}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={80}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.digitalText}>Digital Contract</Text>

        <Text style={styles.contractText}>
          This Digital Contract outlines the agreement between the security personnel
          and the company. By signing below, you confirm that you have read, understood,
          and agreed to all terms and conditions mentioned herein.

          You agree to maintain professional behavior while on duty,
          to safeguard company property, and to respect confidentiality at all times.
          You also acknowledge that any violation of the company’s code of conduct
          or data protection guidelines may result in disciplinary action,
          including termination of service.

          This contract serves as a binding acknowledgment that you will perform
          your duties responsibly, ethically, and in accordance with
          company policies and regulations.
        </Text>


        <SingleCheckBox
          label={"I agree to safeguarding policies"}
          state={guardingPolicies}
          setState={setGuardingPolicies}
        />

        <Text style={styles.eSignatureText}>E-Signature Field</Text>

        <TouchableOpacity
          style={styles.eSignatureView}
          onPress={() => setShowPad(true)}
        >
          {eSignature && (
            <Image
              source={{ uri: eSignature }}
              style={styles.signatureImage}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>

        <Text style={styles.codeText}>Code of Conduct</Text>

        <SingleCheckBox
          label={"I will follow safeguarding guidelines"}
          state={guardingGuideLines}
          setState={setGuardingGuideLines}
        />
        <SingleCheckBox
          label={"I understand data protection responsibilities"}
          state={protectionResponsibilities}
          setState={setProtectionResponsibilities}
        />
        <SingleCheckBox
          label={"I commit to professional conduct"}
          state={professionalConduct}
          setState={setProfessionalConduct}
        />

        <Button title={"Save"} btnStyle={styles.saveBtn} onPress={handleNext} />
      </KeyboardAwareScrollView>

      <Modal visible={showPad} animationType="slide">
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <SignatureCanvas
            ref={signatureRef}
            onOK={handleOK}
            onEmpty={() => console.log("Empty signature")}
            onClear={handleClear}
            descriptionText="Sign here"
            clearText="Clear"
            confirmText="Save"
          />
        </View>
      </Modal>
    </StatusBarWrapper>
  );
}
