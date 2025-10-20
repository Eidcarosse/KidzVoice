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
import { useTranslation } from "react-i18next";

export default function ApplicationStatus() {
  const navigation = useNavigation();
  const { t } = useTranslation();
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

      <Text style={styles.verificationText}>
        {t(`applicationStatus.verificationStages`)}
      </Text>

      <DocumentVerification
        title={t(`applicationStatus.idCheck`)}
        icon={<Contact strokeWidth={1.2} size={25} />}
        state={idCheck}
      />

      <DocumentVerification
        title={t(`applicationStatus.backgroundCheck`)}
        icon={<Backpack strokeWidth={1.2} size={25} />}
        state={backgroundCheck}
      />

      <DocumentVerification
        title={t(`applicationStatus.licenseVerification`)}
        icon={<LucideNotepadTextDashed strokeWidth={1.2} size={25} />}
        state={licenseVerification}
        errorMessage={t(`applicationStatus.licenseError`)}
      />

      <DocumentVerification
        title={t(`applicationStatus.references`)}
        icon={<Entypo name="attachment" size={18} />}
        state={referenceVerification}
      />

      <View style={styles.lineView} />

      <Text style={styles.estimatedText}>
        {t(`applicationStatus.estimatedTime`)}
      </Text>

      <Text style={styles.helpText}>{t(`applicationStatus.helpCenter`)}</Text>
      <View style={{ flex: 1 }} />

      <Text style={styles.youText}>{t(`applicationStatus.youText`)}</Text>

      <Button
        title={t(`applicationStatus.getBtn`)}
        btnStyle={styles.getBtn}
        onPress={handleGetStarted}
      />
    </StatusBarWrapper>
  );
}
