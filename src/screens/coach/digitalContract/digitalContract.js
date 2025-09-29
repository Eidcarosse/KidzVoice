import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React, { useRef, useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import { Button, SingleCheckBox } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import ScreensName from "../../../routes/routes";
import SignatureCanvas from "react-native-signature-canvas";
import BaseModal from "../../../components/modal/modal";

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
    <StatusBarWrapper scrollType={"scroll"}>
      <ScrollView>
        <Text style={styles.digitalText}>Digital Contract</Text>

        <Text style={styles.contractText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
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
      </ScrollView>

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
