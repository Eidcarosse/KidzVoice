import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import {
  Button,
  Input,
  SingleCheckBox,
  UploadDocument,
} from "../../../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";

export default function EducationalInfo({
  qualification,
  setQualification,
  degree,
  setDegree,
  licenseNum,
  setLicenseNum,
  license,
  setLicense,

  shortCv,
  setShortCV,
  motivation,
  setMotivation,

  id,
  setId,
  certificate,
  setCertificate,
  reference,
  setReference,

  onPress,
  guardingPolicy,
  setGuardingPolicy,
  dataPolicy,
  setDataPolicy,
}) {
  const { t } = useTranslation();
  return (
    <KeyboardAwareScrollView>
      <View style={styles.parentView}>
        <Text style={styles.educationalText}>
          {t(`coacEducationalInfo.education`)}
        </Text>

        <Text style={styles.titleText}>
          {t(`coacEducationalInfo.highestQualification`)}
        </Text>

        <Input
          placeholder={t(`coacEducationalInfo.highestQualification`)}
          state={qualification}
          setState={setQualification}
        />

        <UploadDocument
          state={degree}
          setState={setDegree}
          title={t(`coacEducationalInfo.uploadDegree`)}
        />

        <View style={styles.lineView} />

        <Text style={styles.educationalText}>
          {t(`coacEducationalInfo.professionalLicense`)}
        </Text>

        <Text style={styles.titleText}>
          {t(`coacEducationalInfo.licenseNo`)}
        </Text>

        <Input
          placeholder={t(`coacEducationalInfo.professionalLicense`)}
          state={licenseNum}
          setState={setLicenseNum}
        />

        <UploadDocument
          title={t(`coacEducationalInfo.uploadProof`)}
          state={license}
          setState={setLicense}
        />

        <View style={styles.lineView} />

        <Text style={styles.educationalText}>
          {t(`coacEducationalInfo.experience`)}
        </Text>

        <Text style={styles.titleText}>{t(`coacEducationalInfo.shortCV`)}</Text>
        <Input
          placeholder={t(`coacEducationalInfo.shortCV`)}
          state={shortCv}
          setState={setShortCV}
        />

        <Text style={styles.titleText}>
          {t(`coacEducationalInfo.motivation`)}
        </Text>
        <Input
          placeholder={t(`coacEducationalInfo.motivation`)}
          state={motivation}
          setState={setMotivation}
        />

        <View style={styles.lineView} />

        <Text style={styles.educationalText}>
          {t(`coacEducationalInfo.documentUpload`)}
        </Text>

        <UploadDocument
          title={t(`coacEducationalInfo.uploadId`)}
          viewStyle={styles.uploadIdView}
          textStyle={styles.uploadIdText}
          state={id}
          setState={setId}
        />
        <UploadDocument
          title={t(`coacEducationalInfo.uploadCertificate`)}
          viewStyle={styles.uploadIdView}
          textStyle={styles.uploadIdText}
          state={certificate}
          setState={setCertificate}
        />
        <UploadDocument
          title={t(`coacEducationalInfo.uploadReference`)}
          viewStyle={styles.uploadIdView}
          textStyle={styles.uploadIdText}
          state={reference}
          setState={setReference}
        />

        <SingleCheckBox
          label={t(`coacEducationalInfo.guardingPolicy`)}
          state={guardingPolicy}
          setState={setGuardingPolicy}
        />

        <SingleCheckBox
          label={t(`coacEducationalInfo.dataPolicy`)}
          state={dataPolicy}
          setState={setDataPolicy}
        />

        <Button
          title={t(`coacEducationalInfo.submitApplication`)}
          onPress={onPress}
          btnStyle={styles.nextButton}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
