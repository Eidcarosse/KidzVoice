import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import StatusBarWrapper from "../../../components/customStatusbar";
import styles from "./styles";
import Images from "../../../assets/images";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Button, Input } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import PersonalInfo from "./personalInfo";
import EducationalInfo from "./educationalInfo/educationalInfo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ScreensName from "../../../routes/routes";

export default function CoachAccount() {
  const navigation = useNavigation();

  const [activeInfo, setActiveInfo] = useState("Personal");

  const [name, setName] = useState();
  const [dob, setDob] = useState();
  const [contact, setContact] = useState();

  const [qualification, setQualification] = useState(null);
  const [degree, setDegree] = useState(null);
  const [licenseNum, setLicenseNum] = useState(null);
  const [license, setLicense] = useState(null);
  const [shortCv, setShortCV] = useState(null);
  const [motivation, setMotivation] = useState(null);
  const [id, setId] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [reference, setReference] = useState(null);
  const [guardingPolicy, setGuardingPolicy] = useState(false);
  const [dataPolicy, setDataPolicy] = useState(false);

  const handleNext = () => {
    console.log("Next Pressed");
    console.log("Name", name);
    console.log("DOB", dob);
    console.log("Contact", contact);

    if (activeInfo === "Personal") {
      // if (name && dob && contact) {
      setActiveInfo("Education");
      // }
    } else {
      // if (qualification) {
      navigation.navigate(ScreensName.APPLICATIONSTATUS);
      // }
    }
  };
  return (
    <StatusBarWrapper>
      <View style={styles.prifileImageView}>
        <Image
          style={styles.profileImageStyle}
          source={Images.COACHPROFILE}
          resizeMode="contain"
        />
        <View style={styles.iconView}>
          <AntDesign name="edit" size={20} />
        </View>
      </View>

      <Text style={styles.accountText}>Account Setup</Text>
      <KeyboardAwareScrollView
        // contentContainerStyle={{ flex: 1 }}
        enableOnAndroid
        extraHeight={120}
        // extraScrollHeight={50} // scroll up extra space when keyboard appears
        keyboardShouldPersistTaps="handled"
        // contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        {activeInfo === "Personal" && (
          <PersonalInfo
            name={name}
            setName={setName}
            dob={dob}
            setDob={setDob}
            contact={contact}
            setContact={setContact}
            onPress={handleNext}
          />
        )}

        {activeInfo === "Education" && (
          <EducationalInfo
            qualification={qualification}
            setQualification={setQualification}
            degree={degree}
            setDegree={setDegree}
            licenseNum={licenseNum}
            setLicenseNum={setLicenseNum}
            license={license}
            setLicense={setLicense}
            shortCv={shortCv}
            setShortCV={setShortCV}
            motivation={motivation}
            setMotivation={setMotivation}
            id={id}
            setId={setId}
            certificate={certificate}
            setCertificate={setCertificate}
            reference={reference}
            setReference={setReference}
            guardingPolicy={guardingPolicy}
            setGuardingPolicy={setGuardingPolicy}
            dataPolicy={dataPolicy}
            setDataPolicy={setDataPolicy}
            onPress={handleNext}
          />
        )}
      </KeyboardAwareScrollView>
    </StatusBarWrapper>
  );
}
