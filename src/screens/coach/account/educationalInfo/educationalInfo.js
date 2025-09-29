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
  return (
    <KeyboardAwareScrollView>
      <View style={styles.parentView}>
        <Text style={styles.educationalText}>Education</Text>

        <Text style={styles.titleText}>Highest Qualification</Text>

        <Input
          placeholder={"Highest Qualification"}
          state={qualification}
          setState={setQualification}
        />

        <UploadDocument
          state={degree}
          setState={setDegree}
          title={"Upload Degree"}
        />

        <View style={styles.lineView} />

        <Text style={styles.educationalText}>Professional license</Text>

        <Text style={styles.titleText}>license no (Optional)</Text>

        <Input
          placeholder={"Professional license"}
          state={licenseNum}
          setState={setLicenseNum}
        />

        <UploadDocument
          title={"upload proof"}
          state={license}
          setState={setLicense}
        />

        <View style={styles.lineView} />

        <Text style={styles.educationalText}>Experience</Text>

        <Text style={styles.titleText}>Short CV</Text>
        <Input placeholder={"Short CV"} state={shortCv} setState={setShortCV} />

        <Text style={styles.titleText}>Motivation</Text>
        <Input
          placeholder={"Motivation"}
          state={motivation}
          setState={setMotivation}
        />

        <View style={styles.lineView} />

        <Text style={styles.educationalText}>Document Upload</Text>

        <UploadDocument
          title={"Upload Id"}
          viewStyle={styles.uploadIdView}
          textStyle={styles.uploadIdText}
          state={id}
          setState={setId}
        />
        <UploadDocument
          title={"Upload Certificates"}
          viewStyle={styles.uploadIdView}
          textStyle={styles.uploadIdText}
          state={certificate}
          setState={setCertificate}
        />
        <UploadDocument
          title={"Upload References"}
          viewStyle={styles.uploadIdView}
          textStyle={styles.uploadIdText}
          state={reference}
          setState={setReference}
        />

        <SingleCheckBox
          label={"I agree to safeguarding policies"}
          state={guardingPolicy}
          setState={setGuardingPolicy}
        />

        <SingleCheckBox
          label={"I agree to the data policy"}
          state={dataPolicy}
          setState={setDataPolicy}
        />

        <Button
          title={"Submit Application"}
          onPress={onPress}
          btnStyle={styles.nextButton}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
