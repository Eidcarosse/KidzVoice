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
import { useTranslation } from "react-i18next";

export default function DigitalContract() {
  const navigation = useNavigation();
  const { t } = useTranslation();
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
        <Text style={styles.digitalText}>
          {t(`digitalContract.digitalContract`)}
        </Text>

        <Text style={styles.contractText}>
          {t(`digitalContract.contractText`)}
        </Text>

        <SingleCheckBox
          label={t(`digitalContract.guardingPolicy`)}
          state={guardingPolicies}
          setState={setGuardingPolicies}
        />

        <Text style={styles.eSignatureText}>
          {t(`digitalContract.eSignature`)}
        </Text>

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

        <Text style={styles.codeText}>{t(`digitalContract.codeText`)}</Text>

        <SingleCheckBox
          label={t(`digitalContract.safeGaurdingGuidelines`)}
          state={guardingGuideLines}
          setState={setGuardingGuideLines}
        />
        <SingleCheckBox
          label={t(`digitalContract.dataProtection`)}
          state={protectionResponsibilities}
          setState={setProtectionResponsibilities}
        />
        <SingleCheckBox
          label={t(`digitalContract.professionalConduct`)}
          state={professionalConduct}
          setState={setProfessionalConduct}
        />

        <Button
          title={t(`digitalContract.save`)}
          btnStyle={styles.saveBtn}
          onPress={handleNext}
        />
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
            descriptionText={t(`digitalContract.signHere`)}
            clearText={t(`digitalContract.clear`)}
            confirmText={t(`digitalContract.save`)}
          />
        </View>
      </Modal>
    </StatusBarWrapper>
  );
}
